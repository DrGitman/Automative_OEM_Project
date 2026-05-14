import google.generativeai as genai
import os
from sqlalchemy.orm import Session
from .ml_engine import MLEngine
from .knowledge_base import KnowledgeBase
from .scraper import ScraperService
import models
import json
from datetime import datetime
from typing import Optional, Dict, Any

# Setup Gemini - Try loading from environment
def configure_genai():
    api_key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")
    if api_key and api_key != "REPLACE_WITH_YOUR_KEY":
        genai.configure(api_key=api_key)
        return True
    return False

configure_genai()

class GearhouseAgent:
    def __init__(self, db: Session, user_id: int):
        self.db = db
        self.user_id = user_id
        self.kb = KnowledgeBase(db)
        model_name = os.getenv("GEMINI_MODEL", "gemini-1.5-flash") # Use a stable model that supports function calling

        # Define tools for function calling
        tools = [
            self.book_appointment_tool,
            self.update_vehicle_tool
        ]

        self.model = genai.GenerativeModel(
            model_name=model_name,
            tools=tools
        )

    def book_appointment_tool(self, vehicle_id: int, service_type: str, date: str, service_center: str = "Recommended Service Center", location_address: str = "123 Main St, Downtown"):
        """
        Books a maintenance appointment for a vehicle.

        Args:
            vehicle_id: The ID of the vehicle.
            service_type: The type of service (e.g., Oil Change, Brake Service).
            date: The preferred date in ISO format (YYYY-MM-DD).
            service_center: The name of the service center.
            location_address: The address of the service center.
        """
        # This is a tool definition, the actual execution happens via the frontend confirmation flow
        # as per the current architecture in actions.py
        return {
            "type": "BOOK_APPOINTMENT",
            "details": {
                "label": f"Book {service_type} for Vehicle #{vehicle_id}",
                "vehicle_id": vehicle_id,
                "service_type": service_type,
                "date": date,
                "service_center": service_center,
                "location_address": location_address
            }
        }

    def update_vehicle_tool(self, vehicle_id: int, mileage: Optional[float] = None, status: Optional[str] = None, color: Optional[str] = None):
        """
        Updates vehicle information such as mileage, status, or color.

        Args:
            vehicle_id: The ID of the vehicle.
            mileage: The new mileage of the vehicle.
            status: The new status (In Operation, Maintenance, Inactive).
            color: The new color of the vehicle.
        """
        details = {"vehicle_id": vehicle_id, "label": f"Update Vehicle #{vehicle_id}"}
        if mileage is not None: details["mileage"] = mileage
        if status is not None: details["status"] = status
        if color is not None: details["color"] = color

        return {
            "type": "UPDATE_VEHICLE",
            "details": details
        }

    def chat(self, message: str, language: str = "English"):
        # Ensure configured
        configure_genai()
        
        # 1. Get Context (RAG)
        context = self.kb.get_context(self.user_id)
        
        # 2. Formulate system instruction
        system_instruction = f"""
        You are Gearbot, the advanced AI Fleet Intelligence Assistant for the Gearhouse OEM Dashboard.
        Your goal is to provide intelligent, contextual, and helpful advice to vehicle owners.
        
        CURRENT LANGUAGE: {language}
        You MUST respond in {language}.

        CONTEXT FROM DATABASE:
        {context}
        
        INSTRUCTIONS:
        - BE CONCISE: Keep your answers direct and short unless a detailed explanation is requested.
        - NO REPETITIVE GREETINGS: Do not greet the user in every response.
        - STAY ON TOPIC: Focus on vehicle maintenance and fleet management.
        - DATA DRIVEN: Use the database context to provide real values.
        - TOOLS: Use the provided tools if the user wants to book an appointment or update vehicle info.
        - PERSONALITY: Professional, modern, and efficient.
        """
        
        try:
            # We use a chat session to handle function calling better
            chat_session = self.model.start_chat(history=[])
            response = chat_session.send_message(f"{system_instruction}\n\nUSER MESSAGE: {message}")
            
            text = response.text
            action = None

            # Check for function calls in the response
            # Gemini response might contain multiple parts, one of which could be a function call
            for part in response.candidates[0].content.parts:
                if fn := part.function_call:
                    # Map function call back to our action format
                    # We call the tool method locally to get the structured action dict
                    args = {k: v for k, v in fn.args.items()}
                    if fn.name == "book_appointment_tool":
                        action = self.book_appointment_tool(**args)
                    elif fn.name == "update_vehicle_tool":
                        action = self.update_vehicle_tool(**args)
                    
                    # If there's a function call, we might want to append a message about it
                    if not text:
                        text = f"I've prepared the details to {action['details']['label'].lower()}. Please confirm to proceed."

            return {"response": text, "action": action}
        except Exception as e:
            print(f"Agent Error: {e}")
            import traceback
            traceback.print_exc()
            return {"response": f"I encountered an error while thinking: {str(e)}", "action": None}
