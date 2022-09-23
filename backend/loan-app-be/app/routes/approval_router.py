from typing import Literal
from fastapi import APIRouter

from app.services import approval_service

router = APIRouter(
    prefix="/api",
    tags=["approval"],
    responses={404: {"description": "Not found"}},
)


@router.get("/submit")
async def get_approval(
    email: str,
    name: str,
    year: int,
    loanAmount: int,
    accountingProvider: Literal["xero", "myob"],
):
    return await approval_service.get_approval(
        email, name, year, loanAmount, accountingProvider
    )
