from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List, Dict, Any
from datetime import datetime

# ==========================================
# AUTHENTICATION SCHEMAS
# ==========================================

class UserBase(BaseModel):
    email: EmailStr
    firstname: str
    lastname: str

class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class PasswordReset(BaseModel):
    email: EmailStr
    new_password: str

class UserResponse(UserBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# ==========================================
# DASHBOARD SCHEMAS
# ==========================================
class VehicleResponse(BaseModel):
    id: int
    make: str
    model: str
    year: int
    vin: Optional[str]
    license_plate: Optional[str]
    color: Optional[str]
    mileage: float
    engine_cc: Optional[str]
    engine_type: Optional[str]
    transmission: Optional[str]
    fuel_capacity: Optional[str]
    fuel_type: Optional[str]
    last_service_date: Optional[datetime]
    service_interval: int
    status: str
    risk_level: str
    health_score: int
    image_url: Optional[str]

    class Config:
        from_attributes = True

class ServicePartResponse(BaseModel):
    id: int
    part_name: str
    cost: float

    class Config:
        from_attributes = True

class ServiceHistoryResponse(BaseModel):
    id: int
    service_date: datetime
    cost: float
    description: str
    service_type: str
    technician_location: Optional[str]
    parts: List[ServicePartResponse] = []

    class Config:
        from_attributes = True

class AppointmentCreate(BaseModel):
    vehicle_id: int
    service_center: str
    location_address: str
    service_type: str
    preferred_date: datetime
    preferred_time: str
    notes: Optional[str]
    estimated_duration: Optional[str]
    estimated_cost: Optional[float]

class AppointmentResponse(BaseModel):
    id: int
    vehicle_id: int
    service_center: str
    location_address: str
    service_type: str
    preferred_date: datetime
    preferred_time: str
    status: str
    estimated_duration: Optional[str]
    estimated_cost: Optional[float]
    created_at: datetime

    class Config:
        from_attributes = True

class NotificationResponse(BaseModel):
    id: int
    title: str
    message: str
    category: str
    is_read: bool
    created_at: datetime

    class Config:
        from_attributes = True

class DashboardStats(BaseModel):
    total_investment: float
    service_records_count: int
    scheduled_tasks_count: int
    user_name: str
    investment_change: str = "0%"
    records_change: str = "0%"
    tasks_change: str = "0%"
    investment_trend: List[float] = []
    records_trend: List[float] = []
    tasks_trend: List[float] = []

class ChartDataPoint(BaseModel):
    month: str
    open_alerts: int
    closed_alerts: int

class DashboardData(BaseModel):
    stats: DashboardStats
    vehicles: List[VehicleResponse]
    chart_data: List[ChartDataPoint]
    notifications: List[NotificationResponse] = []

class ServicePartCreate(BaseModel):
    part_name: str
    cost: float

class ServiceHistoryCreate(BaseModel):
    vehicle_id: int
    service_type: str
    service_date: datetime
    mileage: float
    cost: float
    description: str
    technician_location: Optional[str] = None
    parts: List[ServicePartCreate] = []

class ServiceHistoryUpdate(BaseModel):
    vehicle_id: Optional[int] = None
    service_type: Optional[str] = None
    service_date: Optional[datetime] = None
    mileage: Optional[float] = None
    cost: Optional[float] = None
    description: Optional[str] = None
    technician_location: Optional[str] = None
    parts: Optional[List[ServicePartCreate]] = None

class MaintenanceStats(BaseModel):
    total_logs: int
    active_alerts: int
    completed_ytd: int
    ai_predicted: int

class MaintenanceRecord(BaseModel):
    id: int
    vehicle_id: int
    vehicle: str
    vin: Optional[str]
    service: str
    date: str
    status: str
    cost: float
    notes: str
    technician_location: Optional[str]
    parts: List[ServicePartResponse]

# ==========================================
# MAINTENANCE & VEHICLE SCHEMAS
# ==========================================
class UpcomingMaintenance(BaseModel):
    id: str
    title: str
    date: str
    category: str

class VehicleCreate(BaseModel):
    make: str
    model: str
    year: int
    vin: Optional[str] = None
    license_plate: Optional[str] = None
    color: Optional[str] = None
    fuel_type: Optional[str] = None
    service_interval: int = 10000
    image_url: Optional[str] = None
    mileage: float = 0.0

class VehicleUpdate(BaseModel):
    make: Optional[str] = None
    model: Optional[str] = None
    year: Optional[str] = None # Using str to allow partial input or validation, but usually int
    vin: Optional[str] = None
    license_plate: Optional[str] = None
    color: Optional[str] = None
    mileage: Optional[float] = None
    engine_cc: Optional[str] = None
    engine_type: Optional[str] = None
    transmission: Optional[str] = None
    fuel_capacity: Optional[str] = None
    fuel_type: Optional[str] = None
    service_interval: Optional[int] = None
    status: Optional[str] = None
    image_url: Optional[str] = None
    health_score: Optional[int] = None

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

# --- Maintenance Page Data Schema ---
class MaintenancePageData(BaseModel):
    """
    Combines all data needed for the Maintenance page:
    - Stats: Summary numbers
    - Records: Combined list of past services and active alerts
    - Upcoming: Next scheduled or AI-predicted tasks
    - Vehicles: User's vehicles for the 'Add Service' dropdown
    """
    stats: MaintenanceStats
    records: List[MaintenanceRecord]
    upcoming: List[UpcomingMaintenance]
    vehicles: List[VehicleResponse]
