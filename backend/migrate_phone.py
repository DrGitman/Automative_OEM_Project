import psycopg2
from database import SQLALCHEMY_DATABASE_URL

def migrate():
    print(f"Connecting to {SQLALCHEMY_DATABASE_URL}...")
    # SQLALCHEMY_DATABASE_URL = "postgresql://oem_user:oem_pass@localhost:5432/oem_project"
    # Parse URL
    try:
        conn = psycopg2.connect(SQLALCHEMY_DATABASE_URL)
        cur = conn.cursor()
        
        print("Adding 'phone' column to 'users' table...")
        cur.execute("ALTER TABLE users ADD COLUMN IF NOT EXISTS phone VARCHAR(20);")
        
        conn.commit()
        cur.close()
        conn.close()
        print("Migration successful: 'phone' column added.")
    except Exception as e:
        print(f"Migration failed: {e}")

if __name__ == "__main__":
    migrate()
