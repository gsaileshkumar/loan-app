from app.remote.balance_sheet_providers.balance_sheet_provider import (
    BalanceSheetProvider,
)
from os.path import dirname, join


class XeroBSP(BalanceSheetProvider):
    def __init__(self, email):
        self.email = email

    # Returning mock file path for simulating a third party system response
    async def get_balance_sheet(self):
        project_root = dirname(dirname(dirname(__file__)))
        csv_file_path = join(project_root, "mocks/balance_sheet.csv")
        return csv_file_path
