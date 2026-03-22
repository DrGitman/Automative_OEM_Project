import psycopg2
from database import SQLALCHEMY_DATABASE_URL

def check_columns():
    try:
        conn = psycopg2.connect(SQLALCHEMY_DATABASE_URL)
        cur = conn.cursor()
        
        tables = ['users', 'vehicles', 'notifications', 'service_history']
        for table in tables:
            print(f"\nColumns in '{table}':")
            cur.execute(f"SELECT column_name FROM information_schema.columns WHERE table_name = '{table}';")
            cols = cur.fetchall()
            for col in cols:
                print(f"  - {col[0]}")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error checking columns: {e}")

if __name__ == "__main__":
    check_columns()
