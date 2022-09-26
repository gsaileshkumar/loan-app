from fastapi import FastAPI

app = FastAPI()

from app.routes import approval_router, balance_sheet_router


@app.on_event("startup")
async def startup():
    pass


@app.on_event("shutdown")
async def shutdown():
    pass


app.include_router(balance_sheet_router.router)
app.include_router(approval_router.router)
