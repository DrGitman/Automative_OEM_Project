from passlib.context import CryptContext

def test():
    try:
        ctx = CryptContext(schemes=["bcrypt"], deprecated="auto")
        print("Context created")
        h = ctx.hash("test_password")
        print(f"Hashed: {h}")
        v = ctx.verify("test_password", h)
        print(f"Verified: {v}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test()
