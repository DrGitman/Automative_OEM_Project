from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from typing import List, Optional, Dict
from datetime import datetime
import models, schemas, database

app = FastAPI()

# CORS configuration
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # More permissive for development/debugging
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Password hashing configuration
pwd_context = CryptContext(schemes=["pbkdf2_sha256", "bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

@app.on_event("startup")
def on_startup():
    try:
        models.Base.metadata.create_all(bind=database.engine)
        print("Database tables verified/created successfully.")
    except Exception as e:
        print(f"CRITICAL: Could not create database tables. Error: {e}")
        print("Please ensure your PostgreSQL user has CREATE permissions on the 'public' schema.")

@app.get("/")
def read_root():
    return {"status": "ok", "message": "Backend is running"}

@app.get("/check-db")
def check_db(db: Session = Depends(database.get_db)):
    try:
        # Try a simple query
        db.execute("SELECT 1")
        return {"status": "connected", "database": "PostgreSQL"}
    except Exception as e:
        return {"status": "error", "message": str(e)}

# Helper to seed data for a new user (for demo purposes)
def seed_user_data(db: Session, user_id: int):
    # Check if user already has vehicles
    if db.query(models.Vehicle).filter(models.Vehicle.user_id == user_id).first():
        return

    # Add Vehicles with rich data from designs
    v1 = models.Vehicle(
        make="Toyota", model="Hilux Double Cab", year=2022, 
        vin="1HTF2394019238842", license_plate="ABC-1234", 
        color="Silver", mileage=45200, risk_level="Low", 
        user_id=user_id, image_url="https://images.unsplash.com/photo-1594056244670-6541f6c077a7",
        engine_cc="2,755 cc", engine_type="2.8L Diesel Turbo", 
        transmission="6-Speed Automatic", fuel_capacity="80 Liters", 
        fuel_type="Diesel", last_service_date=datetime(2023, 10, 12),
        service_interval=10000, status="In Operation", health_score=94
    )
    v2 = models.Vehicle(
        make="Tesla", model="Model 3", year=2023, 
        vin="5YJ3E1EA8NF20", license_plate="GH-102", 
        color="White", mileage=12400, risk_level="High", 
        user_id=user_id, status="Maintenance", health_score=78
    )
    v3 = models.Vehicle(
        make="Ford", model="Transit", year=2021, 
        vin="1FT9W29B93290", license_plate="GH-024", 
        color="Blue", mileage=82150, risk_level="Medium", 
        user_id=user_id, status="In Operation", health_score=85
    )
    db.add_all([v1, v2, v3])
    db.commit()

    # Add Service History with Parts
    s1 = models.ServiceHistory(
        vehicle_id=v1.id, cost=350.0, 
        description="Critical safety check of brake pads and hydraulic lines. Found significant wear on front left rotor. Replaced pads with heavy-duty ceramic variant for improved towing performance.", 
        service_type="Brake Change", service_date=datetime(2023, 10, 20),
        technician_location="Main Street Auto Service", mileage=124500
    )
    db.add(s1)
    db.commit()
    
    parts = [
        models.ServicePart(service_id=s1.id, part_name="Heavy Duty Brake Pads (Front Set)", cost=185.0),
        models.ServicePart(service_id=s1.id, part_name="Rotor Refacing Service", cost=95.0),
        models.ServicePart(service_id=s1.id, part_name="DOT 4 Brake Fluid (1L)", cost=25.0)
    ]
    db.add_all(parts)

    # Add Alerts
    alerts = [
        models.MaintenanceAlert(vehicle_id=v2.id, alert_type="Brake Wear", description="Reports a critical brake wear warning. Immediate inspection required.", status="Open", severity="High"),
        models.MaintenanceAlert(vehicle_id=v1.id, alert_type="Oil Change", status="Closed", severity="Low"),
    ]
    db.add_all(alerts)

    # Add Notifications
    notifications = [
        models.Notification(user_id=user_id, title="Urgent Maintenance Required", message="Vehicle GH-102 (Tesla Model 3) reports a critical brake wear warning.", category="Critical"),
        models.Notification(user_id=user_id, title="Service Confirmation", message="Booking #BK-8842 for Toyota Hilux has been confirmed with City Garage.", category="Booking"),
        models.Notification(user_id=user_id, title="Vehicle Return Complete", message="Ford Transit (GH-024) has been returned and cleared for next assignment.", category="System")
    ]
    db.add_all(notifications)
    
    # Add an Appointment
    appt = models.Appointment(
        user_id=user_id, vehicle_id=v1.id, service_center="Gearhouse Downtown Garage",
        location_address="123 Main St, Downtown", service_type="Oil Change",
        preferred_date=datetime.now(), preferred_time="08:00 AM - 10:00 AM",
        estimated_duration="1.5 Hours", estimated_cost=85.0, status="Confirmed"
    )
    db.add(appt)
    db.commit()

@app.post("/signup", response_model=schemas.UserResponse)
def signup(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    try:
        db_user = db.query(models.User).filter(models.User.email == user.email).first()
        if db_user:
            raise HTTPException(status_code=400, detail="Email already registered")
        
        hashed_password = get_password_hash(user.password)
        new_user = models.User(
            firstname=user.firstname,
            lastname=user.lastname,
            email=user.email,
            password_hash=hashed_password
        )
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        
        # Seed data for the new user so the dashboard isn't empty
        seed_user_data(db, new_user.id)
        
        return new_user
    except HTTPException:
        raise
    except Exception as e:
        print(f"Signup error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Registration failed: {str(e)}"
        )

@app.post("/login")
def login(user: schemas.UserLogin, db: Session = Depends(database.get_db)):
    try:
        db_user = db.query(models.User).filter(models.User.email == user.email).first()
        if not db_user or not verify_password(user.password, db_user.password_hash):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect email or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
        
        # Ensure seed data exists (for existing users during development)
        seed_user_data(db, db_user.id)
        
        return {"message": "Login successful", "user": {"id": db_user.id, "email": db_user.email, "firstname": db_user.firstname, "lastname": db_user.lastname}}
    except HTTPException:
        raise
    except Exception as e:
        print(f"Login error: {e}")
        error_msg = str(e)
        if "hash could not be identified" in error_msg:
            detail = "Invalid password hash format. This can happen if the database was modified manually or if there's a protocol mismatch. Please try signing up again."
        else:
            detail = f"Internal server error: {error_msg}"
            
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=detail
        )

@app.get("/dashboard/data", response_model=schemas.DashboardData)
def get_dashboard_data(user_id: int, db: Session = Depends(database.get_db)):
    try:
        user = db.query(models.User).filter(models.User.id == user_id).first()
        if not user:
            print(f"ERROR: User with id {user_id} not found")
            raise HTTPException(status_code=404, detail="User not found")
        
        # Calculate Stats (with None protection)
        total_inv = sum((s.cost or 0.0) for v in user.vehicles for s in v.service_history)
        service_count = sum(len(v.service_history) for v in user.vehicles)
        scheduled_tasks = len(user.appointments)
        
        # Notifications
        notifications = db.query(models.Notification).filter(models.Notification.user_id == user_id).order_by(models.Notification.created_at.desc()).limit(5).all()
        
        # Chart data
        chart_data = [
            {"month": "Jan", "open_alerts": 20, "closed_alerts": 15},
            {"month": "Feb", "open_alerts": 25, "closed_alerts": 18},
            {"month": "Mar", "open_alerts": 22, "closed_alerts": 20},
            {"month": "Apr", "open_alerts": 34, "closed_alerts": 25},
            {"month": "May", "open_alerts": 28, "closed_alerts": 22},
            {"month": "Jun", "open_alerts": 24, "closed_alerts": 19},
            {"month": "Jul", "open_alerts": 30, "closed_alerts": 24},
        ]

        return {
            "stats": {
                "total_investment": float(total_inv),
                "service_records_count": int(service_count),
                "scheduled_tasks_count": int(scheduled_tasks),
                "user_name": f"{user.firstname} {user.lastname}"
            },
            "vehicles": [
                {
                    "id": v.id,
                    "make": v.make,
                    "model": v.model,
                    "year": v.year,
                    "vin": v.vin,
                    "license_plate": v.license_plate,
                    "color": v.color,
                    "mileage": v.mileage,
                    "engine_cc": v.engine_cc,
                    "engine_type": v.engine_type,
                    "transmission": v.transmission,
                    "fuel_capacity": v.fuel_capacity,
                    "fuel_type": v.fuel_type,
                    "last_service_date": v.last_service_date,
                    "service_interval": v.service_interval,
                    "status": v.status,
                    "risk_level": v.risk_level,
                    "health_score": v.health_score,
                    "image_url": v.image_url
                } for v in user.vehicles
            ],
            "chart_data": chart_data,
            "notifications": notifications
        }
    except Exception as e:
        import traceback
        print("EXCEPTION in /dashboard/data:")
        traceback.print_exc()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Dashboard calculation error: {str(e)}"
        )

@app.post("/reset-password")
def reset_password(data: schemas.PasswordReset, db: Session = Depends(database.get_db)):
    db_user = db.query(models.User).filter(models.User.email == data.email).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    
    db_user.password_hash = get_password_hash(data.new_password)
    db.commit()
    return {"message": "Password updated successfully"}

# ==========================================
# MAINTENANCE & SERVICE ENDPOINTS
# ==========================================
@app.get("/maintenance/data", response_model=schemas.MaintenancePageData)
def get_maintenance_data(user_id: int, db: Session = Depends(database.get_db)):
    try:
        user = db.query(models.User).filter(models.User.id == user_id).first()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        
        vehicle_ids = [v.id for v in user.vehicles]
        
        # Get all service records for user's vehicles
        services = db.query(models.ServiceHistory).filter(models.ServiceHistory.vehicle_id.in_(vehicle_ids)).order_by(models.ServiceHistory.service_date.desc()).all()
        
        # Get all alerts
        alerts = db.query(models.MaintenanceAlert).filter(models.MaintenanceAlert.vehicle_id.in_(vehicle_ids)).all()
        
        # Get upcoming appointments
        appointments = db.query(models.Appointment).filter(
            models.Appointment.user_id == user_id,
            models.Appointment.preferred_date >= datetime.now()
        ).order_by(models.Appointment.preferred_date.asc()).all()
        
        # Calculate stats
        total_logs = len(services) + len(alerts)
        active_alerts = len([a for a in alerts if a.status == "Open"])
        completed_ytd = len([s for s in services if s.service_date and s.service_date.year == datetime.now().year])
        
        records = []
        # Add service history records
        for s in services:
            records.append({
                "id": s.id,
                "vehicle_id": s.vehicle_id,
                "vehicle": f"{s.vehicle.make} {s.vehicle.model}" if s.vehicle else "Unknown",
                "vin": s.vehicle.vin if s.vehicle else "N/A",
                "service": s.service_type,
                "date": s.service_date.strftime("%b %d, %Y") if s.service_date else "N/A",
                "status": "COMPLETED",
                "cost": s.cost or 0.0,
                "notes": s.description or "",
                "technician_location": s.technician_location,
                "parts": s.parts
            })
        
        # Add alerts as overdue/open records
        for a in alerts:
            records.append({
                "id": 10000 + a.id, # Avoid ID collision
                "vehicle_id": a.vehicle_id,
                "vehicle": f"{a.vehicle.make} {a.vehicle.model}" if a.vehicle else "Unknown",
                "vin": a.vehicle.vin if a.vehicle else "N/A",
                "service": a.alert_type,
                "date": "Overdue" if a.severity == "High" else "Scheduled",
                "status": "OVERDUE" if a.severity == "High" else "OPEN",
                "cost": 0.0,
                "notes": a.description or f"Severity: {a.severity}",
                "technician_location": None,
                "parts": []
            })
            
        upcoming = []
        for appt in appointments:
            upcoming.append({
                "id": f"appt-{appt.id}",
                "title": appt.service_type,
                "date": appt.preferred_date.strftime("%b %d, %Y") if appt.preferred_date else "N/A",
                "category": "Booking"
            })
        
        # Add a mock AI prediction if needed
        if not upcoming:
            upcoming.append({
                "id": "ai-1",
                "title": "Tire Rotation",
                "date": "Feb 15, 2026",
                "category": "AI Prediction"
            })

        return {
            "stats": {
                "total_logs": total_logs,
                "active_alerts": active_alerts,
                "completed_ytd": completed_ytd,
                "ai_predicted": 15
            },
            "records": sorted(records, key=lambda x: x['date'], reverse=True),
            "upcoming": upcoming
        }
    except Exception as e:
        import traceback
        print("EXCEPTION in /maintenance/data:")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/maintenance/add", response_model=schemas.ServiceHistoryResponse)
def add_maintenance(record: schemas.ServiceHistoryCreate, db: Session = Depends(database.get_db)):
    db_record = models.ServiceHistory(
        vehicle_id=record.vehicle_id,
        service_type=record.service_type,
        service_date=record.service_date,
        mileage=record.mileage,
        cost=record.cost,
        description=record.description,
        technician_location=record.technician_location
    )
    db.add(db_record)
    db.commit()
    db.refresh(db_record)
    
    if record.parts:
        for part in record.parts:
            db_part = models.ServicePart(
                service_id=db_record.id,
                part_name=part.part_name,
                cost=part.cost
            )
            db.add(db_part)
        db.commit()
        db.refresh(db_record)
        
    return db_record

@app.put("/maintenance/update/{record_id}", response_model=schemas.ServiceHistoryResponse)
def update_maintenance(record_id: int, record: schemas.ServiceHistoryUpdate, db: Session = Depends(database.get_db)):
    db_record = db.query(models.ServiceHistory).filter(models.ServiceHistory.id == record_id).first()
    if not db_record:
        raise HTTPException(status_code=404, detail="Record not found")
    
    update_data = record.dict(exclude_unset=True)
    if 'parts' in update_data:
        # Delete old parts
        db.query(models.ServicePart).filter(models.ServicePart.service_id == record_id).delete()
        # Add new parts
        for part in record.parts:
            db_part = models.ServicePart(
                service_id=record_id,
                part_name=part.part_name,
                cost=part.cost
            )
            db.add(db_part)
        del update_data['parts']
        
    for key, value in update_data.items():
        setattr(db_record, key, value)
        
    db.commit()
    db.refresh(db_record)
    return db_record

@app.delete("/maintenance/delete/{record_id}")
def delete_maintenance(record_id: int, db: Session = Depends(database.get_db)):
    db_record = db.query(models.ServiceHistory).filter(models.ServiceHistory.id == record_id).first()
    if not db_record:
        raise HTTPException(status_code=404, detail="Record not found")
    
    db.delete(db_record)
    db.commit()
    return {"message": "Record deleted successfully"}

# ==========================================
# APPOINTMENT & BOOKING ENDPOINTS
# ==========================================
def get_appointments(user_id: int, db: Session = Depends(database.get_db)):
    appointments = db.query(models.Appointment).filter(models.Appointment.user_id == user_id).all()
    return appointments

@app.post("/appointments/add", response_model=schemas.AppointmentResponse)
def add_appointment(appt: schemas.AppointmentCreate, user_id: int, db: Session = Depends(database.get_db)):
    db_appt = models.Appointment(
        **appt.dict(),
        user_id=user_id,
        status="Confirmed"
    )
    db.add(db_appt)
    db.commit()
    db.refresh(db_appt)
    
    # Add a notification for the user
    notification = models.Notification(
        user_id=user_id,
        title="Booking Confirmation",
        message=f"Your booking for {appt.service_type} on {appt.preferred_date.strftime('%b %d')} is confirmed.",
        category="Booking"
    )
    db.add(notification)
    db.commit()
    
    return db_appt

@app.get("/bookings/data")
def get_bookings_data(user_id: int, db: Session = Depends(database.get_db)):
    # Compatible with existing/new frontend expectations
    appointments = db.query(models.Appointment).filter(models.Appointment.user_id == user_id).all()
    
    formatted_bookings = []
    for appt in appointments:
        # Map DB date to calendar day/hour for the week view if needed
        # For a real calendar, we just need the raw dates
        formatted_bookings.append({
            "id": appt.id,
            "name": f"{appt.user.firstname} {appt.user.lastname}",
            "service": appt.service_type,
            "date": appt.preferred_date.isoformat(),
            "time": appt.preferred_time,
            "duration": appt.estimated_duration,
            "cost": appt.estimated_cost,
            "status": appt.status,
            "center": appt.service_center,
            "address": appt.location_address
        })
        
    return {
        "current_month": datetime.now().strftime("%B %Y"),
        "bookings": formatted_bookings
    }

# ==========================================
# VEHICLE MANAGEMENT ENDPOINTS
# ==========================================
def add_vehicle(vehicle: schemas.VehicleCreate, user_id: int, db: Session = Depends(database.get_db)):
    db_vehicle = models.Vehicle(
        **vehicle.dict(),
        user_id=user_id,
        status="In Operation",
        risk_level="Low",
        health_score=100
    )
    db.add(db_vehicle)
    db.commit()
    db.refresh(db_vehicle)
    return db_vehicle

@app.put("/vehicles/update/{vehicle_id}", response_model=schemas.VehicleResponse)
def update_vehicle(vehicle_id: int, vehicle: schemas.VehicleUpdate, db: Session = Depends(database.get_db)):
    db_vehicle = db.query(models.Vehicle).filter(models.Vehicle.id == vehicle_id).first()
    if not db_vehicle:
        raise HTTPException(status_code=404, detail="Vehicle not found")
    
    update_data = vehicle.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_vehicle, key, value)
        
    db.commit()
    db.refresh(db_vehicle)
    return db_vehicle

@app.delete("/vehicles/delete/{vehicle_id}")
def delete_vehicle(vehicle_id: int, db: Session = Depends(database.get_db)):
    db_vehicle = db.query(models.Vehicle).filter(models.Vehicle.id == vehicle_id).first()
    if not db_vehicle:
        raise HTTPException(status_code=404, detail="Vehicle not found")
    
    db.delete(db_vehicle)
    db.commit()
    return {"message": "Vehicle deleted successfully"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
