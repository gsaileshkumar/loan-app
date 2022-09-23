from typing import List, Literal
from pydantic import BaseModel


class BalanceSheetRequest(BaseModel):
    accountingProvider: Literal["xero", "myob"]
    email: str


class BalanceSheetEntry(BaseModel):
    year: int
    month: int
    profitOrLoss: int
    assetsValue: int


class BalanceSheet(BaseModel):
    data: List[BalanceSheetEntry]
