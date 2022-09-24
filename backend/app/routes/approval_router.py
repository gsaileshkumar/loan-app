from typing import Literal
from app.schemas.approval import ApprovalRequest
from fastapi import APIRouter

from app.services import approval_service

router = APIRouter(
    prefix="/api",
    tags=["approval"],
    responses={404: {"description": "Not found"}},
)


@router.post("/submit")
async def get_approval(
    approval_req: ApprovalRequest,
):
    return await approval_service.get_approval(
        approval_req.email,
        approval_req.name,
        approval_req.year,
        approval_req.loanAmount,
        approval_req.accountingProvider,
    )
