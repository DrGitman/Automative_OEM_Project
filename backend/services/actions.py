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
            
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
        
    return {"status": "error", "message": "Unknown action type"}
