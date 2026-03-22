import numpy as np
from sklearn.linear_model import LinearRegression
from datetime import datetime, timedelta
from sqlalchemy.orm import Session
import models

class MLEngine:
    @staticmethod
    def predict_next_service(vehicle: models.Vehicle, service_history: list[models.ServiceHistory]):
        """
        Predicts the next service date based on mileage trends and service intervals.
        """
        if not service_history or len(service_history) < 2:
            # Fallback for new vehicles or those with little history
            last_date = vehicle.last_service_date or datetime.now()
            interval = vehicle.service_interval or 10000
            # Rough estimate: 1000km/month
            days_to_service = (interval / 1000) * 30
            return last_date + timedelta(days=int(days_to_service))

        # Sort history by date
        sorted_history = sorted(service_history, key=lambda x: x.service_date)
        
        # Prepare data for Linear Regression: Days since first service vs Mileage
        first_date = sorted_history[0].service_date
        X = [] # Days since first service
        y = [] # Mileage
        
        for record in sorted_history:
            days = (record.service_date - first_date).days
            X.append([days])
            y.append(record.mileage)
            
        # Add current mileage as a data point
        current_days = (datetime.now() - first_date).days
        X.append([current_days])
        y.append(vehicle.mileage)
        
        # Train model
        model = LinearRegression()
        model.fit(X, y)
        
        # Calculate daily mileage (the slope)
        daily_mileage = model.coef_[0]
        if daily_mileage <= 0:
            daily_mileage = 30 # Fallback 30km/day
            
        # Calculate remaining mileage until next interval
        last_service_mileage = sorted_history[-1].mileage
        target_mileage = last_service_mileage + (vehicle.service_interval or 10000)
        remaining_mileage = target_mileage - vehicle.mileage
        
        if remaining_mileage <= 0:
            return datetime.now() # Overdue
            
        days_to_next_service = remaining_mileage / daily_mileage
        return datetime.now() + timedelta(days=int(days_to_next_service))

    @staticmethod
    def assess_risk(vehicle: models.Vehicle, alert_count: int):
        """
        Determines the risk level based on health score and active alerts.
        """
        if vehicle.health_score < 60 or alert_count > 3:
            return "High"
        elif vehicle.health_score < 85 or alert_count > 1:
            return "Medium"
        return "Low"

    @staticmethod
    def generate_health_tips(vehicle: models.Vehicle):
        """
        Generates contextual tips based on vehicle data.
        """
        tips = []
        if vehicle.mileage > 100000:
            tips.append("Your vehicle has high mileage. Consider a comprehensive suspension check.")
        if vehicle.fuel_type == "Diesel":
            tips.append("Remember to check the Diesel Particulate Filter (DPF) regularly for highway driving.")
        if vehicle.health_score < 80:
            tips.append("Health score is declining. A diagnostic scan is recommended to pinpoint issues.")
        
        return tips
