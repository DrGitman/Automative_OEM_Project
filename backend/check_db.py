
import models, database
from sqlalchemy.orm import Session

def verify():
    db = next(database.get_db())
    try:
        # Check if we can reach the DB
        db.execute("SELECT 1")
        print("Database connection: SUCCESS")
        
        # Check tables
        from sqlalchemy import inspect
        inspector = inspect(database.engine)
        tables = inspector.get_table_names()
        print(f"Tables found: {tables}")
        
    except Exception as e:
        print(f"Database connection: FAILED - {e}")
    finally:
        db.close()

if __name__ == "__main__":
    verify()
