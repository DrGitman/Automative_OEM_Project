from sqlalchemy import Column, Integer, String, DateTime, Float, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from database import Base

# --- USER MODEL ---
# Stores account information and profile details.
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    firstname = Column(String(100), nullable=False)
    lastname = Column(String(100), nullable=False)
    email = Column(String(255), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    profile_image = Column(String(255), nullable=True)
    role = Column(String(20), default="Owner")
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    vehicles = relationship("Vehicle", back_populates="owner")
    notifications = relationship("Notification", back_populates="user")
    appointments = relationship("Appointment", back_populates="user")

# --- VEHICLE MODEL ---
# Stores car specifications, fleet status, and ownership.
class Vehicle(Base):
    __tablename__ = "vehicles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    make = Column(String(50), nullable=False)
    model = Column(String(50), nullable=False)
    year = Column(Integer)
    vin = Column(String(17), unique=True)
    license_plate = Column(String(20))
    color = Column(String(20))
    mileage = Column(Float, default=0.0)
    engine_cc = Column(String(20))
    engine_type = Column(String(50))
    transmission = Column(String(50))
    fuel_capacity = Column(String(20))
    fuel_type = Column(String(50))
    last_service_date = Column(DateTime, nullable=True)
    service_interval = Column(Integer, default=10000)
    status = Column(String(20), default="In Operation") # In Operation, Maintenance, Inactive
    image_url = Column(String(255), nullable=True)
    risk_level = Column(String(20), default="Low") # High, Medium, Low
    health_score = Column(Integer, default=100)

    owner = relationship("User", back_populates="vehicles")
    service_history = relationship("ServiceHistory", back_populates="vehicle")
    alerts = relationship("MaintenanceAlert", back_populates="vehicle")
    insurance = relationship("Insurance", back_populates="vehicle", uselist=False)

# --- SERVICE HISTORY MODEL ---
# Tracks past repairs, oil changes, and maintenance costs.
class ServiceHistory(Base):
    __tablename__ = "service_history"

    id = Column(Integer, primary_key=True, index=True)
    vehicle_id = Column(Integer, ForeignKey("vehicles.id"))
    service_date = Column(DateTime, server_default=func.now())
    mileage = Column(Float)
    cost = Column(Float, default=0.0)
    description = Column(String(1000))
    service_type = Column(String(50))
    technician_location = Column(String(255))

    vehicle = relationship("Vehicle", back_populates="service_history")
    parts = relationship("ServicePart", back_populates="service")

class ServicePart(Base):
    __tablename__ = "service_parts"

    id = Column(Integer, primary_key=True, index=True)
    service_id = Column(Integer, ForeignKey("service_history.id"))
    part_name = Column(String(100))
    cost = Column(Float)

    service = relationship("ServiceHistory", back_populates="parts")

class MaintenanceAlert(Base):
    __tablename__ = "maintenance_alerts"

    id = Column(Integer, primary_key=True, index=True)
    vehicle_id = Column(Integer, ForeignKey("vehicles.id"))
    alert_type = Column(String(50))
    description = Column(String(255))
    status = Column(String(20), default="Open") # Open, Closed
    severity = Column(String(20)) # High, Medium, Low
    date_created = Column(DateTime, server_default=func.now())

    vehicle = relationship("Vehicle", back_populates="alerts")

# --- APPOINTMENT MODEL ---
# Manages workshop bookings and service center visits.
class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    vehicle_id = Column(Integer, ForeignKey("vehicles.id"))
    service_center = Column(String(100))
    location_address = Column(String(255))
    service_type = Column(String(50))
    preferred_date = Column(DateTime)
    preferred_time = Column(String(50))
    notes = Column(String(1000))
    status = Column(String(20), default="Confirmed")
    estimated_duration = Column(String(50))
    estimated_cost = Column(Float)
    created_at = Column(DateTime, server_default=func.now())

    user = relationship("User", back_populates="appointments")
    vehicle = relationship("Vehicle")

class Notification(Base):
    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String(100))
    message = Column(String(500))
    category = Column(String(50)) # Critical, Booking, System, Speed
    is_read = Column(Boolean, default=False)
    created_at = Column(DateTime, server_default=func.now())

    user = relationship("User", back_populates="notifications")

class Insurance(Base):
    __tablename__ = "insurance"

    id = Column(Integer, primary_key=True, index=True)
    vehicle_id = Column(Integer, ForeignKey("vehicles.id"))
    provider = Column(String(100))
    policy_number = Column(String(50))
    expiry_date = Column(DateTime)
    premium_amount = Column(Float)

    vehicle = relationship("Vehicle", back_populates="insurance")

class SparePart(Base):
    __tablename__ = "spare_parts"

    id = Column(Integer, primary_key=True, index=True)
    part_name = Column(String(100))
    part_number = Column(String(50), unique=True)
    price = Column(Float)
    stock_quantity = Column(Integer, default=0)
