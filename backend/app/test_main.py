import json
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_get_approval_incorrect_method():
    response = client.get("/api/submit")
    assert response.status_code == 405


def test_get_approval_without_params():
    response = client.post("/api/submit")
    assert response.status_code == 422


def test_get_approval_with_params():
    response = client.post(
        "/api/submit",
        json={
            "email": "asd@asd.com",
            "name": "b1",
            "year": 2020,
            "loanAmount": 123,
            "accountingProvider": "xero",
        },
    )
    assert response.status_code == 200
    assert response.json() == {"data": {"amount": 98, "approved": True}}
