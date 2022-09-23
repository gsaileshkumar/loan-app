from typing import Literal
from pydantic import BaseModel


class ApprovalRequest(BaseModel):
    email: str
    name: str
    year: int
    loanAmount: int
    accountingProvider: Literal["xero", "myob"]


class Approval(BaseModel):
    approved: bool
    amount: int


class DecisionEngineResponse(BaseModel):
    data: Approval
