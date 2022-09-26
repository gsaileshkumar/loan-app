import { FormEvent } from "react";
import { FormData } from "../pages";

interface ReviewProps {
  formData?: FormData;
  onSubmit: (event: FormEvent) => void;
}

const ReviewLoanApplication: React.FunctionComponent<ReviewProps> = ({
  formData,
  onSubmit,
}) => {
  if (!formData) {
    return (
      <span className="appearance-none block w-full  text-gray-700 border rounded py-3  mb-3 leading-tight focus:outline-none focus:bg-white">
        No form data to review
      </span>
    );
  }

  const { email, name, year, loanAmount, accountingProvider } = formData;
  return (
    <form
      className="w-full max-w-lg bg-gray-100 p-5 rounded h-full"
      onSubmit={onSubmit}
    >
      <h2 className="w-full px-3 font-bold py-3 text-3xl">
        Review Loan Application
      </h2>
      <div className="w-full px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <span
          className="appearance-none block w-full  text-gray-700  rounded py-3  mb-3 leading-tight focus:outline-none focus:bg-white"
          id="email"
        >
          {email}
        </span>
      </div>
      <div className="w-full px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="name"
        >
          Business name
        </label>
        <span
          className="appearance-none block w-full  text-gray-700  rounded py-3  mb-3 leading-tight focus:outline-none focus:bg-white"
          id="name"
        >
          {name}
        </span>
      </div>
      <div className="w-full px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="email"
        >
          Year established
        </label>
        <span
          className="appearance-none block w-full  text-gray-700  rounded py-3  mb-3 leading-tight focus:outline-none focus:bg-white"
          id="year"
        >
          {year}
        </span>
      </div>
      <div className="w-full px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="loanAmount"
        >
          Loan Amount
        </label>
        <span
          className="appearance-none block w-full  text-gray-700 rounded py-3  mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="loanAmount"
        >
          {loanAmount}
        </span>
      </div>
      <div className="w-full px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="accountingProvider"
        >
          Accounting provider
        </label>
        <div className="relative">
          <span
            className="appearance-none block w-full  text-gray-700  rounded py-3  mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="accountingProvider"
          >
            {accountingProvider}
          </span>
        </div>
      </div>
      <div className="w-full px-3 mb-6 md:mb-0 flex justify-evenly">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold mt-4 py-2 px-4 rounded inline-flex items-center"
          type="submit"
        >
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default ReviewLoanApplication;
