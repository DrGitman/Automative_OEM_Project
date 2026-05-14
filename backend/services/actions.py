from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import database, models, schemas
from datetime import datetime

router = APIRouter()

@router.post("/ai/execute-action")
def execute_ai_action(user_id: int, action: dict, db: Session = Depends(database.get_db)):
    """
    Executes a confirmed AI action.
    """
    action_type = action.get("type")
    details = action.get("details", {})
    
    try:
        if action_type == "BOOK_APPOINTMENT":
            # Map details to Appointment model
            new_appt = models.Appointment(
                user_id=user_id,
                vehicle_id=details.get("vehicle_id"),
                service_center=details.get("service_center", "Recommended Service Center"),
                location_address=details.get("location_address", "123 Main St, Downtown"),
                service_type=details.get("service_type"),
                preferred_date=datetime.fromisoformat(details.get("date")) if details.get("date") else datetime.now(),
                status="Confirmed"
            )
            db.add(new_appt)
            db.commit()
            return {"status": "success", "message": "Appointment booked successfully!"}
            
        elif action_type == "UPDATE_VEHICLE":
            v_id = details.get("vehicle_id")
            vehicle = db.query(models.Vehicle).filter(models.Vehicle.id == v_id).first()
            if vehicle:
                for key, val in details.items():
                    if hasattr(vehicle, key) and key != "vehicle_id":
                        setattr(vehicle, key, val)
                db.commit()
                return {"status": "success", "message": "Vehicle updated successfully!"}
                
        elif action_type == "DELETE_RECORD":
            # Safety check: only allow deleting Specific records (e.g., service history)
            # but for this demo we'll just acknowledge the pattern
            return {"status": "success", "message": "Record deletion simulated (safety layer active)."}
            
        elif action_type == "SEND_EMAIL":
            # We import here to avoid circular dependency
            from main import send_email
            recipient = details.get("recipient_email")
            subject = details.get("subject", "Gearhouse Fleet Intelligence")
            body = details.get("body", "")

            # Wrap body in simple HTML if it's not already
            html_body = f"<html><body><p>{body.replace('\n', '<br>')}</p></body></html>"

            if send_email(recipient, subject, html_body):
                return {"status": "success", "message": f"Email sent successfully to {recipient}!"}
            else:
                return {"status": "error", "message": "Failed to send email. Check SMTP configuration."}

        elif action_type == "ADD_SERVICE_HISTORY":
            new_record = models.ServiceHistory(
                vehicle_id=details.get("vehicle_id"),
                service_type=details.get("service_type"),
                cost=details.get("cost", 0.0),
                description=details.get("description", ""),
                mileage=details.get("mileage", 0.0),
                service_date=datetime.fromisoformat(details.get("service_date")) if details.get("service_date") else datetime.now()
            )
            db.add(new_record)
            db.commit()
            return {"status": "success", "message": "Service history recorded successfully!"}

        elif action_type == "MANAGE_ALERT":
            alert_id = details.get("alert_id")
            alert = db.query(models.MaintenanceAlert).filter(models.MaintenanceAlert.id == alert_id).first()
            if alert:
                alert.status = details.get("status", "Closed")
                db.commit()
                return {"status": "success", "message": f"Alert #{alert_id} updated to {alert.status}!"}
            else:
                return {"status": "error", "message": "Alert not found."}

    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
        
    return {"status": "error", "message": "Unknown action type"}
