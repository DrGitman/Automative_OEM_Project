import database
import models
from sqlalchemy import inspect, text

def update_schema():
    engine = database.engine
    inspector = inspect(engine)
    
    with engine.begin() as conn: # Uses a transaction block
        # Check users table
        columns = [c['name'] for c in inspector.get_columns("users")]
        if "profile_image" not in columns:
            print("Adding profile_image to users table...")
            conn.execute(text("ALTER TABLE users ADD COLUMN profile_image VARCHAR(255)"))
        if "role" not in columns:
            print("Adding role to users table...")
            conn.execute(text("ALTER TABLE users ADD COLUMN role VARCHAR(20) DEFAULT 'Owner'"))
        
        # Check vehicles table
        columns = [c['name'] for c in inspector.get_columns("vehicles")]
        
        vehicle_updates = [
            ("engine_cc", "VARCHAR(20)"),
            ("engine_type", "VARCHAR(50)"),
            ("transmission", "VARCHAR(50)"),
            ("fuel_capacity", "VARCHAR(20)"),
            ("fuel_type", "VARCHAR(50)"),
            ("last_service_date", "TIMESTAMP"),
            ("service_interval", "INTEGER DEFAULT 10000"),
            ("status", "VARCHAR(20) DEFAULT 'In Operation'"),
            ("health_score", "INTEGER DEFAULT 100"),
            ("risk_level", "VARCHAR(20) DEFAULT 'Low'")
        ]
        
        for col_name, col_type in vehicle_updates:
            if col_name not in columns:
                print(f"Adding {col_name} to vehicles table...")
                conn.execute(text(f"ALTER TABLE vehicles ADD COLUMN {col_name} {col_type}"))
        
        # Check maintenance_alerts table
        if "maintenance_alerts" in inspector.get_table_names():
            columns = [c['name'] for c in inspector.get_columns("maintenance_alerts")]
            if "description" not in columns:
                print("Adding description to maintenance_alerts table...")
                conn.execute(text("ALTER TABLE maintenance_alerts ADD COLUMN description VARCHAR(255)"))
            if "risk_level" not in columns:
                print("Adding risk_level to maintenance_alerts table...")
                conn.execute(text("ALTER TABLE maintenance_alerts ADD COLUMN risk_level VARCHAR(20) DEFAULT 'Low'"))

        # Check service_history table
        if "service_history" in inspector.get_table_names():
            columns = [c['name'] for c in inspector.get_columns("service_history")]
            if "technician_location" not in columns:
                print("Adding technician_location to service_history table...")
                conn.execute(text("ALTER TABLE service_history ADD COLUMN technician_location VARCHAR(255)"))
            
            print("Ensuring service_history.description is TEXT...")
            conn.execute(text("ALTER TABLE service_history ALTER COLUMN description TYPE TEXT"))
        
    print("Schema update complete and committed.")

if __name__ == "__main__":
    update_schema()
