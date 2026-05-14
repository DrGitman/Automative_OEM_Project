import google.generativeai as genai
import os
from sqlalchemy.orm import Session
from .ml_engine import MLEngine
from .knowledge_base import KnowledgeBase
from .scraper import ScraperService
import models
import json
from datetime import datetime
from typing import Optional, Dict, Any, List

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
            self.update_vehicle_tool,
            self.send_email_tool,
            self.add_service_history_tool,
            self.manage_alert_tool
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

    def send_email_tool(self, recipient_email: str, subject: str, body: str):
        """
        Sends an email to a specified recipient.

        Args:
            recipient_email: The email address of the recipient.
            subject: The subject of the email.
            body: The body content of the email.
        """
        return {
            "type": "SEND_EMAIL",
            "details": {
                "label": f"Send email to {recipient_email}",
                "recipient_email": recipient_email,
                "subject": subject,
                "body": body
            }
        }

    def add_service_history_tool(self, vehicle_id: int, service_type: str, cost: float, description: str, mileage: float, date: Optional[str] = None):
        """
        Adds a new record to a vehicle's service history.

        Args:
            vehicle_id: The ID of the vehicle.
            service_type: Type of service performed.
            cost: Total cost of the service.
            description: Detailed notes about the work done.
            mileage: Odometer reading at the time of service.
            date: Date of service in ISO format (YYYY-MM-DD). Defaults to today.
        """
        return {
            "type": "ADD_SERVICE_HISTORY",
            "details": {
                "label": f"Add {service_type} record for Vehicle #{vehicle_id}",
                "vehicle_id": vehicle_id,
                "service_type": service_type,
                "cost": cost,
                "description": description,
                "mileage": mileage,
                "service_date": date or datetime.now().isoformat()
            }
        }

    def manage_alert_tool(self, alert_id: int, status: str):
        """
        Updates the status of a maintenance alert (e.g., resolving it).

        Args:
            alert_id: The ID of the alert to manage.
            status: The new status (Open, Closed).
        """
        return {
            "type": "MANAGE_ALERT",
            "details": {
                "label": f"Mark Alert #{alert_id} as {status}",
                "alert_id": alert_id,
                "status": status
            }
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
        - PROACTIVE TOOLS: Use the provided tools whenever a user wants to perform an action (booking, updating, emailing, logging history, or resolving alerts).
        - ONE-COMMAND ACTIONS: If a user gives a command like "Schedule an oil change for my Hilux tomorrow", use the appropriate tool immediately.
        - PERSONALITY: Professional, modern, and efficient.
        """
        
        try:
            # We use a chat session to handle function calling better
            chat_session = self.model.start_chat(history=[])
            response = chat_session.send_message(f"{system_instruction}\n\nUSER MESSAGE: {message}")
            
            text = ""
            action = None

            # Check for function calls in the response
            for part in response.candidates[0].content.parts:
                if fn := part.function_call:
                    # Map function call back to our action format
                    args = {k: v for k, v in fn.args.items()}
                    if fn.name == "book_appointment_tool":
                        action = self.book_appointment_tool(**args)
                    elif fn.name == "update_vehicle_tool":
                        action = self.update_vehicle_tool(**args)
                    elif fn.name == "send_email_tool":
                        action = self.send_email_tool(**args)
                    elif fn.name == "add_service_history_tool":
                        action = self.add_service_history_tool(**args)
                    elif fn.name == "manage_alert_tool":
                        action = self.manage_alert_tool(**args)
                    
                    # If there's a function call, we might want to append a message about it
                    if not text:
                        text = f"I've prepared the details to {action['details']['label'].lower()}. Please confirm to proceed."
                elif hasattr(part, 'text') and part.text:
                    text = part.text

            if not text and not action:
                text = "I'm sorry, I couldn't process that request. Could you please rephrase?"

            return {"response": text, "action": action}
        except Exception as e:
            print(f"Agent Error: {e}")
            import traceback
            traceback.print_exc()
            return {"response": f"I encountered an error while thinking: {str(e)}", "action": None}
