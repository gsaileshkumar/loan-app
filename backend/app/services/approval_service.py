from typing import Literal
from app.remote import decision_engine_client
from app.services import balance_sheet_service
from app.schemas.approval import Approval, DecisionEngineResponse

import pandas as pd

from app.utils.exception import handle_data_processing_exception
from app.utils.logs import logging as log


async def get_approval(
    email: str,
    name: str,
    year: int,
    loanAmount: int,
    accountingProvider: Literal["xero", "myob"],
) -> DecisionEngineResponse:
    pre_assessment_value, summary_pl_by_year = await get_pre_assessment_value(
        accountingProvider, email, loanAmount
    )
    resp = await decision_engine_client.get_approval(
        name, year, summary_pl_by_year, loanAmount, pre_assessment_value
    )
    data = Approval(approved=resp["approved"], amount=resp["amount"])
    return DecisionEngineResponse(data=data)


@handle_data_processing_exception
async def get_pre_assessment_value(
    accountingProvider: Literal["xero", "myob"], email: str, loanAmount: int
):
    balance_sheet_path = await balance_sheet_service.get_balance_sheet(
        accountingProvider, email
    )
    df = pd.read_csv(balance_sheet_path)
    pre_assessment_value = 20
    summary_pl_by_year = None

    # Check at least the company is established for 12 months
    if len(df.index) > 12:
        df["date"] = "01/" + df["month"].astype(str) + "/" + df["year"].astype(str)
        df["datetime"] = pd.to_datetime(df["date"])
        last_year_df = df.sort_values("datetime", ascending=False).head(12)

        # Check business has made profit in the last 12 months
        if last_year_df["profitOrLoss"].sum() > 0:
            pre_assessment_value = 60

        # Check if the average asset value across 12 months is greater than the loan amount
        if last_year_df["assetsValue"].mean() > loanAmount:
            pre_assessment_value = 100

    df_by_year = df.groupby("year")["profitOrLoss"].sum()
    summary_pl_by_year = df_by_year.to_dict()

    log.info(f"Pre assessment for loan application calculated: {pre_assessment_value}%")

    return pre_assessment_value, summary_pl_by_year
