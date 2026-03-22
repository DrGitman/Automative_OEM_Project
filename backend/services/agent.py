import google.generativeai as genai
import os
from sqlalchemy.orm import Session
from .ml_engine import MLEngine
from .knowledge_base import KnowledgeBase
from .scraper import ScraperService
import models
import json

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
        model_name = os.getenv("GEMINI_MODEL", "gemini-3.1-flash-lite-preview")
        self.model = genai.GenerativeModel(model_name)

    def chat(self, message: str):
        # Ensure configured
        configure_genai()
        
        # 1. Get Context (RAG)
        context = self.kb.get_context(self.user_id)
        
        # 2. Formulate prompt
        prompt = f"""
        You are Gearbot, the advanced AI Fleet Intelligence Assistant for the Gearhouse OEM Dashboard.
        Your goal is to provide intelligent, contextual, and helpful advice to vehicle owners.
        
        CONTEXT FROM DATABASE:
        {context}
        
        USER MESSAGE: {message}
        
        INSTRUCTIONS:
        - BE CONCISE: Unless the user asks for a "general overview" or "summary", keep your answers direct and short.
        - NO REPETITIVE GREETINGS: Do not greet the user (e.g., "Hello James") in every response. Only greet if the user says hello first or if it's a completely new topic.
        - STAY ON TOPIC: Focus strictly on answering the user's specific question. Do not volunteer unsolicited information about other vehicles unless it's critical for safety (e.g., an active High Risk alert).
        - DATA DRIVEN: Use the database context to provide real values (mileage, health scores), but don't list everything in every message.
        - ACTIONS: If an action is required (e.g., booking, emailing, or updating), include a JSON block:
          ACTION_REQUIRED: {{"type": "ACTION_TYPE", "details": {{"label": "Descriptive Action Name", ...}}}}
          (Types: BOOK_APPOINTMENT, SEND_EMAIL, CONTACT_SUPPLIER, UPDATE_VEHICLE, DELETE_RECORD)
        - PERSONALITY: Professional, modern, and efficient.
        """
        
        try:
            response = self.model.generate_content(prompt)
            text = response.text
            
            # Simple check for action
            action = None
            if "ACTION_REQUIRED:" in text:
                parts = text.split("ACTION_REQUIRED:")
                text = parts[0].strip()
                try:
                    action_json = parts[1].strip()
                    # Find the first { and last } to handle potential noise
                    start = action_json.find("{")
                    end = action_json.rfind("}") + 1
                    if start >= 0 and end > 0:
                        action = json.loads(action_json[start:end])
                except Exception as je:
                    print(f"Action Parse Error: {je}")
                    
            return {"response": text, "action": action}
        except Exception as e:
            print(f"Agent Error: {e}")
            import traceback
            traceback.print_exc()
            return {"response": f"I encountered an error while thinking: {str(e)}", "action": None}

    def execute_action(self, action_type: str, data: dict):
        """
        Triggered when an agent wants to perform an action.
        Requires safety confirmation (handled in Phase 3/4).
        """
        # Placeholder for action execution logic
        # e.g., if action_type == 'book_appointment', create record in DB.
        pass
