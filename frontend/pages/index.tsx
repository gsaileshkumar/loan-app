import fileDownload from "js-file-download";
import type { NextPage } from "next";
import Head from "next/head";
import { FormEvent, useState } from "react";
import LoanApplicationForm from "../components/LoanApplicationForm";
import ReviewLoanApplication from "../components/ReviewLoanApplication";
import SuccessPage from "../components/SuccessPage";
import api from "../utils/api";

type AppStateType = "EDIT" | "REVIEW" | "SUBMITTED";
export type AccountingProviderType = "xero" | "myob";
export type FormData = {
  email: string;
  name: string;
  year: number;
  loanAmount: number;
  accountingProvider: AccountingProviderType;
};
type ApprovalData = {
  approved: boolean;
  amount: number;
};

const LoanApp: NextPage = () => {
  const [state, setState] = useState<AppStateType>("EDIT");
  const [data, setData] = useState<FormData>();
  const [approvalData, setApprovalData] = useState<ApprovalData>();

  const getBalanceSheet = async (formData: FormData) => {
    const { accountingProvider, email } = formData;
    return await api()
      .get(`balanceSheet`, {
        accountingProvider,
        email,
      })
      .then((res) => fileDownload(res.data, "balance_sheet.csv"));
  };

  const onReviewHandler = (formData: FormData) => {
    setData(formData);
    setState("REVIEW");
  };

  const onSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    return await api()
      .post(`submit`, data)
      .then((res) => res.data.data)
      .then((data) => {
        setState("SUBMITTED");
        setApprovalData(data);
      });
  };

  const onReset = () => {
    setState("EDIT");
  };

  return (
    <div className="bg-gray-200 h-screen">
      <Head>
        <title>Loan App</title>
        <meta name="description" content="Loan application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center h-full">
        {state === "EDIT" ? (
          <LoanApplicationForm
            getBalanceSheet={getBalanceSheet}
            onReview={onReviewHandler}
          />
        ) : null}
        {state === "REVIEW" ? (
          <ReviewLoanApplication formData={data} onSubmit={onSubmitHandler} />
        ) : null}
        {state === "SUBMITTED" ? (
          <SuccessPage
            approved={approvalData?.approved}
            amount={approvalData?.amount}
            onReset={onReset}
          />
        ) : null}
      </main>
    </div>
  );
};

export default LoanApp;
