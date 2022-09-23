# Simulation to get_approval call to decision engine
async def get_approval(
    name: str,
    year: int,
    summary_pl__by_year: dict,
    loanAmount: int,
    preAssessmentValue: int,
):
    if preAssessmentValue > 50:
        return dict(approved=True, amount=loanAmount * 0.80)

    return dict(approved=False, amount=0)
