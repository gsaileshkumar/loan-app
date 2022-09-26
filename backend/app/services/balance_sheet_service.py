from typing import Literal
from app.remote.balance_sheet_providers.xero_client import XeroBSP
from app.remote.balance_sheet_providers.myob_client import MyobBSP


async def get_balance_sheet(accountingProvider: Literal["xero", "myob"], email: str):
    balance_sheet_client = None
    if accountingProvider is "xero":
        balance_sheet_client = XeroBSP(email=email)
    if accountingProvider is "myob":
        balance_sheet_client = MyobBSP(email=email)

    return await balance_sheet_client.get_balance_sheet()
