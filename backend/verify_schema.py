import database
import models
from sqlalchemy import inspect

def verify_full_schema():
    engine = database.engine
    inspector = inspect(engine)
    
    tables_to_check = ["users", "vehicles", "service_history", "maintenance_alerts"]
    
    print("--- Database Schema Verification ---")
    for table_name in tables_to_check:
        if table_name not in inspector.get_table_names():
            print(f"[MISSING] Table '{table_name}' does not exist!")
            continue
            
        columns = {c['name']: c['type'] for c in inspector.get_columns(table_name)}
        print(f"\nChecking table: {table_name}")
        
        # Define expected columns for each table
        expected = []
        if table_name == "users":
            expected = ["id", "firstname", "lastname", "email", "password_hash", "profile_image", "role", "created_at"]
        elif table_name == "vehicles":
            expected = ["id", "user_id", "make", "model", "year", "vin", "license_plate", "color", "mileage", 
                        "engine_cc", "engine_type", "transmission", "fuel_capacity", "fuel_type", 
                        "last_service_date", "service_interval", "status", "image_url", "risk_level", "health_score"]
        elif table_name == "maintenance_alerts":
            expected = ["id", "vehicle_id", "alert_type", "description", "status", "severity", "date_created", "risk_level"]
        elif table_name == "service_history":
            expected = ["id", "vehicle_id", "service_date", "mileage", "cost", "description", "service_type", "technician_location"]

        for col in expected:
            if col in columns:
                print(f"  [OK] {col}")
            else:
                print(f"  [MISSING] {col} <--- THIS IS THE PROBLEM")

    print("\n-------------------------------------")

if __name__ == "__main__":
    verify_full_schema()
