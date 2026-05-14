import os
from dotenv import load_dotenv
# Load environment variables early
load_dotenv()

from fastapi import FastAPI, Depends, HTTPException, status, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from typing import List, Optional, Dict, Any
from datetime import datetime, timedelta
import models, schemas, database, shutil, uuid
import smtplib
from email.mime.text import MIMEText
from services.ml_engine import MLEngine
from services.scraper import ScraperService
from services.agent import GearhouseAgent
from services import actions

# --- SMTP Configuration ---
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SENDER_EMAIL = os.getenv("SMTP_EMAIL", "orilionaobeb@gmail.com") 
SENDER_PASSWORD = os.getenv("SMTP_PASSWORD") # This must be an App Password

def send_reset_email(receiver_email: str, token: str):
    if not SENDER_PASSWORD:
        print("Warning: SMTP_PASSWORD not set. Cannot send real reset email.")
        # For development, we'll log the link
        print(f"--- RESET LINK (DEV): http://localhost:5173/reset-password?token={token} ---")
        return True

    try:
        reset_link = f"http://localhost:5173/reset-password?token={token}"
        body = f"""
        <html>
        <body>
            <h2>Password Reset Request</h2>
            <p>You requested to reset your password for Gearhouse OEM Dashboard.</p>
            <p>Click the link below to set a new password. This link is valid for 15 minutes.</p>
            <a href="{reset_link}" style="background-color: #D72322; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a>
            <p>If you didn't request this, you can safely ignore this email.</p>
            <p>Regards,<br>Gearhouse Team</p>
        </body>
        </html>
        """
        message = MIMEText(body, "html")
        message["Subject"] = "Gearhouse Password Reset"
        message["From"] = SENDER_EMAIL
        message["To"] = receiver_email

        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.sendmail(SENDER_EMAIL, receiver_email, message.as_string())
        server.quit()
        return True
    except Exception as e:
        print(f"SMTP Error: {e}")
        return False

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

# Ensure uploads directory exists
UPLOAD_DIR = "uploads"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

app.mount("/uploads", StaticFiles(directory=UPLOAD_DIR), name="uploads")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

@app.on_event("startup")
def on_startup():
    try:
        models.Base.metadata.create_all(bind=database.engine)
        
        # Manual migration for phone and two_factor_enabled columns
        from sqlalchemy import text
        with database.SessionLocal() as db:
            try:
                # PostgreSQL specific syntax for adding columns only if they don't exist
                db.execute(text("ALTER TABLE users ADD COLUMN IF NOT EXISTS phone VARCHAR(20)"))
                db.execute(text("ALTER TABLE users ADD COLUMN IF NOT EXISTS two_factor_enabled BOOLEAN DEFAULT FALSE"))
                db.commit()
                print("Database schema migration successful.")
            except Exception as e:
                db.rollback()
                # If IF NOT EXISTS is not supported (older PG versions), it might error.
                # However, it's supported since PG 9.6.
                print(f"Migration error (this might be fine if columns already exist): {e}")

        print("Database tables verified/created successfully.")
    except Exception as e:
        print(f"CRITICAL: Could not create database tables. Error: {e}")

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

    # Add Service History (Total $9,445 across 2 records)
    s1 = models.ServiceHistory(
        vehicle_id=v1.id, cost=5620.0, 
        description="Major engine overhaul and fuel system cleaning. Replaced fuel injectors and high-pressure pump.", 
        service_type="Engine Overhaul", service_date=datetime(2023, 11, 15),
        technician_location="Gearhouse Premium Service", mileage=124500
    )
    s2 = models.ServiceHistory(
        vehicle_id=v2.id, cost=3825.0, 
        description="Comprehensive electrical system diagnostic and battery replacement. Updated firmware for all control modules.", 
        service_type="Electrical Service", service_date=datetime(2024, 1, 10),
        technician_location="Electro Auto Lab", mileage=12400
    )
    db.add_all([s1, s2])
    db.commit()
    
    parts = [
        models.ServicePart(service_id=s1.id, part_name="Fuel Injectors (Set of 6)", cost=2400.0),
        models.ServicePart(service_id=s1.id, part_name="High Pressure Fuel Pump", cost=1850.0),
        models.ServicePart(service_id=s2.id, part_name="Premium AGM Battery", cost=850.0)
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
        
        return {
            "id": new_user.id,
            "email": new_user.email,
            "firstname": new_user.firstname,
            "lastname": new_user.lastname,
            "profile_image": getattr(new_user, 'profile_image', None),
            "phone": getattr(new_user, 'phone', None),
            "role": getattr(new_user, 'role', 'Owner'),
            "two_factor_enabled": getattr(new_user, 'two_factor_enabled', False),
            "created_at": new_user.created_at
        }
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
        
        return {
            "message": "Login successful", 
            "user": {
                "id": db_user.id, 
                "email": db_user.email, 
                "firstname": db_user.firstname, 
                "lastname": db_user.lastname,
                "profile_image": getattr(db_user, 'profile_image', None),
                "phone": getattr(db_user, 'phone', None),
                "two_factor_enabled": getattr(db_user, 'two_factor_enabled', False)
            }
        }
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

        # Get real AI insights and predictions
        insights = []
        ml_engine = MLEngine()
        ai_predicted_count = 0
        
        for v in user.vehicles:
            try:
                # Update risk level dynamically via AI
                alert_count = len([a for a in v.alerts if a.status == "Open"])
                v.risk_level = ml_engine.assess_risk(v, alert_count)
                
                # Get tips for the modal
                v_tips = ml_engine.generate_health_tips(v)
                if v.risk_level != "Low" or v_tips:
                    insights.append({
                        "vehicle": f"{v.make} {v.model}",
                        "insight": v_tips[0] if v_tips else "General maintenance check advised",
                        "risk": v.risk_level
                    })
                
                # Count predictions (within 30 days)
                next_service = MLEngine.predict_next_service(v, v.service_history)
                if (next_service - datetime.now()).days <= 30:
                    ai_predicted_count += 1
            except Exception as e:
                print(f"ML Processing error for {v.id}: {e}")

        active_alerts = sum(len([a for a in v.alerts if a.status == "Open"]) for v in user.vehicles)

        return {
            "stats": {
                "user_name": f"{user.firstname} {user.lastname}",
                "total_investment": float(total_inv or 0.0),
                "investment_change": "+12.5% from last week",
                "investment_trend": [30, 45, 35, 60, 50, 75, 65, 80],
                "service_records_count": int(service_count or 0),
                "records_change": "+2 this month",
                "records_trend": [20, 30, 25, 40, 35, 50, 45, 60],
                "scheduled_tasks_count": int(scheduled_tasks or 0),
                "tasks_change": "-1 from yesterday",
                "tasks_trend": [50, 40, 60, 45, 70, 55, 80, 65],
                "ai_predicted": ai_predicted_count,
                "active_alerts": active_alerts,
                "top_insights": insights[:4]
            },
            "vehicles": user.vehicles,
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

@app.post("/forgot-password")
def forgot_password(request: schemas.ForgotPasswordRequest, db: Session = Depends(database.get_db)):
    user = db.query(models.User).filter(models.User.email == request.email).first()
    if not user:
        # We don't want to leak user existence, so we return success anyway
        # but in a real app you might handle this differently.
        return {"message": "If an account exists, a reset link has been sent."}

    # Generate token
    token = str(uuid.uuid4())
    expires_at = datetime.now() + timedelta(minutes=15)
    
    # Store token
    reset_token = models.PasswordResetToken(
        token=token,
        user_id=user.id,
        expires_at=expires_at
    )
    db.add(reset_token)
    db.commit()

    # Send email
    if send_reset_email(user.email, token):
        return {"message": "Reset link sent successfully", "to": user.email}
    else:
        raise HTTPException(status_code=500, detail="Failed to send email")

@app.get("/verify-reset-token/{token}", response_model=schemas.TokenVerificationResponse)
def verify_reset_token(token: str, db: Session = Depends(database.get_db)):
    reset_token = db.query(models.PasswordResetToken).filter(
        models.PasswordResetToken.token == token,
        models.PasswordResetToken.is_used == False
    ).first()

    if not reset_token:
        return {"valid": False, "message": "Invalid or used token"}

    if datetime.now() > reset_token.expires_at:
        return {"valid": False, "message": "Token has expired"}

    return {"valid": True, "email": reset_token.user.email, "message": "Token is valid"}

@app.post("/reset-password")
def reset_password(data: schemas.ResetPasswordRequest, db: Session = Depends(database.get_db)):
    reset_token = db.query(models.PasswordResetToken).filter(
        models.PasswordResetToken.token == data.token,
        models.PasswordResetToken.is_used == False
    ).first()

    if not reset_token:
        raise HTTPException(status_code=400, detail="Invalid or used token")

    if datetime.now() > reset_token.expires_at:
        raise HTTPException(status_code=400, detail="Token has expired")

    user = reset_token.user
    user.password_hash = get_password_hash(data.password)
    
    # Mark token as used
    reset_token.is_used = True
    db.commit()

    return {"message": "Password updated successfully"}

# ==========================================
# USER PROFILE & SECURITY ENDPOINTS
# ==========================================
@app.put("/users/update/{user_id}", response_model=schemas.UserResponse)
def update_user(user_id: int, user_update: schemas.UserUpdate, db: Session = Depends(database.get_db)):
    try:
        db_user = db.query(models.User).filter(models.User.id == user_id).first()
        if not db_user:
            raise HTTPException(status_code=404, detail="User not found")
        
        update_data = user_update.dict(exclude_unset=True)
        for key, value in update_data.items():
            if hasattr(db_user, key):
                setattr(db_user, key, value)
        
        db.commit()
        db.refresh(db_user)
        return {
            "id": db_user.id,
            "email": db_user.email,
            "firstname": db_user.firstname,
            "lastname": db_user.lastname,
            "profile_image": getattr(db_user, 'profile_image', None),
            "phone": getattr(db_user, 'phone', None),
            "role": getattr(db_user, 'role', 'Owner'),
            "two_factor_enabled": getattr(db_user, 'two_factor_enabled', False),
            "created_at": db_user.created_at
        }
    except HTTPException:
        raise
    except Exception as e:
        db.rollback()
        import traceback
        print(f"Update user error at {datetime.now()}:")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Update failed: {str(e)}")

@app.put("/users/change-password/{user_id}")
def change_password(user_id: int, data: schemas.PasswordChangeRequest, db: Session = Depends(database.get_db)):
    try:
        db_user = db.query(models.User).filter(models.User.id == user_id).first()
        if not db_user:
            raise HTTPException(status_code=404, detail="User not found")
        
        if not verify_password(data.current_password, db_user.password_hash):
            raise HTTPException(status_code=400, detail="Incorrect current password")
        
        db_user.password_hash = get_password_hash(data.new_password)
        db.commit()
        return {"message": "Password changed successfully"}
    except HTTPException:
        raise
    except Exception as e:
        db.rollback()
        print(f"Change password error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.delete("/users/deactivate/{user_id}")
def deactivate_user(user_id: int, db: Session = Depends(database.get_db)):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # In a real app, you might just mark as inactive. Here we'll delete for simplicity.
    db.delete(db_user)
    db.commit()
    return {"message": "Account deactivated"}

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
                "parts": [{"id": p.id, "part_name": p.part_name, "cost": p.cost} for p in s.parts] if s.parts else []
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
        
        # Add real AI predictions and update risk levels
        ml = MLEngine()
        for vehicle in user.vehicles:
            try:
                # Update risk level via AI
                alert_count = len([a for a in vehicle.alerts if a.status == "Open"])
                vehicle.risk_level = ml.assess_risk(vehicle, alert_count)

                # Use ML Engine to predict next service
                next_service = MLEngine.predict_next_service(vehicle, vehicle.service_history)
                # If predicted date is within next 30 days, add to upcoming
                if (next_service - datetime.now()).days <= 30:
                    upcoming.append({
                        "id": f"ai-pred-{vehicle.id}",
                        "title": f"Predicted: {vehicle.make} Service",
                        "date": next_service.strftime("%b %d, %Y"),
                        "category": "AI Prediction"
                    })
            except Exception as e:
                print(f"ML Prediction error for vehicle {vehicle.id}: {e}")

        # Update stats with real predicted count
        ai_predicted_count = len([u for u in upcoming if u["category"] == "AI Prediction"])

        return {
            "stats": {
                "total_logs": int(total_logs or 0),
                "active_alerts": int(active_alerts or 0),
                "completed_ytd": int(completed_ytd or 0),
                "ai_predicted": ai_predicted_count
            },
            "records": sorted(records, key=lambda x: x.get('date', ''), reverse=True),
            "upcoming": upcoming,
            "vehicles": user.vehicles
        }
    except Exception as e:
        import traceback
        print("EXCEPTION in /maintenance/data:")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/appointments/data", response_model=Dict[str, Any])
def get_appointments_data(user_id: int, db: Session = Depends(database.get_db)):
    try:
        appointments = db.query(models.Appointment).filter(
            models.Appointment.user_id == user_id
        ).order_by(models.Appointment.preferred_date.asc()).all()
        
        return {
            "bookings": [
                {
                    "id": a.id,
                    "vehicle_id": a.vehicle_id,
                    "service": a.service_type,
                    "date": a.preferred_date.isoformat() if a.preferred_date else "",
                    "time": a.preferred_time,
                    "status": a.status,
                    "center": a.service_center,
                    "address": a.location_address,
                    "duration": a.estimated_duration,
                    "cost": a.estimated_cost,
                    "notes": a.notes,
                    "name": "Technician Team" # Placeholder or can be linked to a tech table if available
                } for a in appointments
            ]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/appointments/add", response_model=schemas.AppointmentResponse)
def add_appointment(user_id: int, appointment: schemas.AppointmentCreate, db: Session = Depends(database.get_db)):
    try:
        db_appt = models.Appointment(
            user_id=user_id,
            vehicle_id=appointment.vehicle_id,
            service_center=appointment.service_center,
            location_address=appointment.location_address,
            service_type=appointment.service_type,
            preferred_date=appointment.preferred_date,
            preferred_time=appointment.preferred_time,
            notes=appointment.notes,
            estimated_duration=appointment.estimated_duration,
            estimated_cost=appointment.estimated_cost,
            status="Confirmed"
        )
        db.add(db_appt)
        db.commit()
        db.refresh(db_appt)
        return db_appt
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/bookings/data", response_model=Dict[str, Any])
def get_bookings_alias(user_id: int, db: Session = Depends(database.get_db)):
    # Alias for /appointments/data to support existing frontend calls if any
    return get_appointments_data(user_id, db)

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
@app.post("/vehicles/add", response_model=schemas.VehicleResponse)
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

@app.post("/upload-image")
async def upload_image(file: UploadFile = File(...)):
    print(f"RECIEVED IMAGE UPLOAD: {file.filename}") # Simple DEBUG
    try:
        # Generate unique filename
        file_extension = os.path.splitext(file.filename)[1]
        unique_filename = f"{uuid.uuid4()}{file_extension}"
        file_path = os.path.join(UPLOAD_DIR, unique_filename)
        
        # Save file
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            
        print(f"FILE SAVED TO: {file_path}")
        return {"url": f"/uploads/{unique_filename}"}
    except Exception as e:
        print(f"UPLOAD ERROR: {e}")
        raise HTTPException(status_code=500, detail=str(e))

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

app.include_router(actions.router, prefix="/ai", tags=["AI Actions"])

# ==========================================
# AI AGENT ENDPOINTS
# ==========================================
@app.post("/ai/chat")
async def ai_chat(user_id: int, message: Dict[str, Any], db: Session = Depends(database.get_db)):
    try:
        agent = GearhouseAgent(db, user_id)
        msg_text = message.get("message", "")
        language = message.get("language", "English")
        result = agent.chat(msg_text, language=language)
        return result
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/ai/recommendations/{vehicle_id}")
def get_ai_recommendations(vehicle_id: int, db: Session = Depends(database.get_db)):
    vehicle = db.query(models.Vehicle).filter(models.Vehicle.id == vehicle_id).first()
    if not vehicle:
        raise HTTPException(status_code=404, detail="Vehicle not found")
    
    tips = MLEngine.generate_health_tips(vehicle)
    scraped_issues = ScraperService.get_common_issues(vehicle.make, vehicle.model)
    
    return {
        "tips": tips,
        "common_issues": scraped_issues,
        "risk_level": MLEngine.assess_risk(vehicle, len([a for a in vehicle.alerts if a.status == "Open"]))
    }

if __name__ == "__main__":
    import uvicorn
    # Create database tables if they don't exist
    models.Base.metadata.create_all(bind=database.engine)
    uvicorn.run(app, host="0.0.0.0", port=8000)
