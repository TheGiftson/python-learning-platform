"""
Quick test script to verify backend API is working
"""
import requests
import json
import sys

# Fix Windows console encoding
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "http://localhost:5000/api"

print("Testing Learn Python with Giftson Backend API")
print("=" * 50)

# Test 1: Register a test user
print("\n1. Testing Registration...")
try:
    response = requests.post(f"{BASE_URL}/register", json={
        "name": "Test User",
        "email": "test@example.com",
        "password": "testpass123"
    })
    print(f"   Status: {response.status_code}")
    if response.status_code in [200, 201]:
        print("   ✓ Registration successful!")
        data = response.json()
        token = data.get('access_token')  # Backend returns 'access_token'
        print(f"   Token received: {token[:20]}...")
    elif response.status_code == 400:
        print("   Note: User already exists (this is OK)")
        # Try login instead
        print("\n2. Testing Login...")
        response = requests.post(f"{BASE_URL}/login", json={
            "email": "test@example.com",
            "password": "testpass123"
        })
        print(f"   Status: {response.status_code}")
        if response.status_code == 200:
            print("   ✓ Login successful!")
            data = response.json()
            token = data.get('access_token')  # Backend returns 'access_token'
            if token:
                print(f"   Token received: {token[:20]}...")
            else:
                print(f"   Response: {data}")
                exit(1)
        else:
            print(f"   ✗ Login failed: {response.text}")
            exit(1)
    else:
        print(f"   ✗ Registration failed: {response.text}")
        exit(1)
except Exception as e:
    print(f"   ✗ Error: {e}")
    exit(1)

# Test 2: Execute code with token
print("\n3. Testing Code Execution...")
try:
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.post(f"{BASE_URL}/execute", 
        json={"code": "print('Hello from backend!')"},
        headers=headers
    )
    print(f"   Status: {response.status_code}")
    if response.status_code == 200:
        print("   ✓ Code execution successful!")
        data = response.json()
        print(f"   Output: {data.get('output')}")
    else:
        print(f"   ✗ Execution failed: {response.text}")
except Exception as e:
    print(f"   ✗ Error: {e}")

print("\n" + "=" * 50)
print("Backend API test complete!")
