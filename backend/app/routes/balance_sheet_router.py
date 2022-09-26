from typing import Literal
from fastapi import APIRouter
from fastapi.responses import FileResponse

from app.services import balance_sheet_service

router = APIRouter(
    prefix="/api", tags=["balance_sheet"], responses={404: {"description": "Not found"}}
)


@router.get("/balanceSheet")
async def get_balance_sheet(accountingProvider: Literal["xero", "myob"], email: str):
    csv_file_path = await balance_sheet_service.get_balance_sheet(
        accountingProvider, email
    )
    return FileResponse(path=csv_file_path, filename="balance_sheet.csv")
