import os
from sqlalchemy.orm import Session
import models
from .scraper import ScraperService

class KnowledgeBase:
    def __init__(self, db: Session):
        self.db = db

    def get_context(self, user_id: int):
        """
        Retrieves a full fleet context for a user.
        """
        user = self.db.query(models.User).filter(models.User.id == user_id).first()
        if not user:
            return "User not found."
            
        context = f"Fleet Owner: {user.firstname} {user.lastname}\n"
        context += f"Total Vehicles: {len(user.vehicles)}\n\n"
        
        for v in user.vehicles:
            context += self.get_vehicle_context(v.id) + "\n---\n"
            
        return context

    def get_vehicle_context(self, vehicle_id: int):
        """
        Retrieves full context for a vehicle, combining DB records and scraped data.
        """
        vehicle = self.db.query(models.Vehicle).filter(models.Vehicle.id == vehicle_id).first()
        if not vehicle:
            return "Vehicle not found."
            
        # Get related records
        service_history = vehicle.service_history
        alerts = vehicle.alerts
        
        # Build context string
        context = f"Vehicle: {vehicle.make} {vehicle.model} ({vehicle.year})\n"
        context += f"Mileage: {vehicle.mileage}km\n"
        context += f"Status: {vehicle.status}\n"
        context += f"Health Score: {vehicle.health_score}%\n"
        
        if alerts:
            context += "Active Alerts:\n"
            for alert in alerts:
                if alert.status == "Open":
                    context += f"- {alert.alert_type}: {alert.description} (Severity: {alert.severity})\n"
                    
        if service_history:
            context += "Service History (Recent):\n"
            for record in sorted(service_history, key=lambda x: x.service_date, reverse=True)[:3]:
                context += f"- {record.service_date.strftime('%Y-%m-%d')}: {record.service_type} - {record.description} (Cost: ${record.cost})\n"
                
        # Scrape common issues for this model
        common_issues = ScraperService.get_common_issues(vehicle.make, vehicle.model)
        context += "Common Issues for this Model:\n"
        for issue in common_issues:
            context += f"- {issue}\n"
            
        return context

    def search_tips(self, query: str):
        """
        Simple keyword-based search for maintenance tips.
        In a full version, this would use vector embeddings.
        """
        tips = ScraperService.get_maintenance_tips()
        # For now, just return them as advice string
        advice = "Maintenance Tips & Advice:\n"
        for tip in tips:
            advice += f"- {tip['title']}: {tip['advice']}\n"
        return advice
