import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoanApplicationForm from "../components/LoanApplicationForm";

describe("LoanApplicationForm", () => {
  it("renders loan application form", () => {
    const getBalanceSheetHandler = jest.fn();
    const onReviewHandler = jest.fn();
    render(
      <LoanApplicationForm
        getBalanceSheet={getBalanceSheetHandler}
        onReview={onReviewHandler}
      />
    );

    const email = screen.getByLabelText("Email");
    const name = screen.getByLabelText("Business name");
    const year = screen.getByLabelText("Year established");
    const loanAmount = screen.getByLabelText("Loan Amount");
    const accountingProvider = screen.getByLabelText("Accounting provider");

    expect(email).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(loanAmount).toBeInTheDocument();
    expect(accountingProvider).toBeInTheDocument();
  });

  it("renders filled application form", async () => {
    const user = userEvent.setup();
    const getBalanceSheetHandler = jest.fn();
    const onReviewHandler = jest.fn();
    render(
      <LoanApplicationForm
        getBalanceSheet={getBalanceSheetHandler}
        onReview={onReviewHandler}
      />
    );

    const email = screen.getByLabelText("Email");
    const name = screen.getByLabelText("Business name");
    const year = screen.getByLabelText("Year established");
    const loanAmount = screen.getByLabelText("Loan Amount");
    const accountingProvider = screen.getByLabelText("Accounting provider");
    const xeroOption: HTMLOptionElement = screen.getByRole("option", {
      name: "Xero",
    });

    await user.type(email, "foo@foo.com");
    await user.type(name, "foo");
    await user.type(year, "1231");
    await user.type(loanAmount, "12311");
    await user.selectOptions(accountingProvider, xeroOption);

    expect(screen.getByDisplayValue("foo@foo.com")).toBeInTheDocument();
    expect(screen.getByDisplayValue("foo")).toBeInTheDocument();
    expect(screen.getByDisplayValue("1231")).toBeInTheDocument();
    expect(screen.getByDisplayValue("12311")).toBeInTheDocument();
    expect(xeroOption.selected).toBe(true);
  });
});
