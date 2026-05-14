import requests
import sys

def test_chat_api():
    base_url = "http://localhost:8000"
    user_id = 1

    # Check if backend is up
    try:
        resp = requests.get(f"{base_url}/")
        print(f"Backend status: {resp.status_code}")
    except Exception as e:
        print(f"Error: Backend is not running at {base_url}. Please start it with 'python main.py' in backend/ directory.")
        return

    # Test /ai/chat
    payload = {
        "message": "Hello, how are my vehicles doing?",
        "language": "English"
    }

    print(f"Testing /ai/chat for user_id={user_id}...")
    try:
        resp = requests.post(f"{base_url}/ai/chat?user_id={user_id}", json=payload)
        print(f"Response Status: {resp.status_code}")
        if resp.status_code == 200:
            data = resp.json()
            print("Response Data:")
            print(f"  Response: {data.get('response')[:100]}...")
            print(f"  Action: {data.get('action')}")
        else:
            print(f"Error Response: {resp.text}")
    except Exception as e:
        print(f"Request failed: {e}")

if __name__ == "__main__":
    test_chat_api()
