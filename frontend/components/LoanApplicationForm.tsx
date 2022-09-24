import { FormEvent } from "react";
import { AccountingProviderType, FormData } from "../pages";

interface LoanFormProps {
  onReview: (formData: FormData) => void;
  getBalanceSheet: (formData: FormData) => void;
}
type FormDataSubmitType = {
  [key in keyof FormData]: { value: string };
};
const LoanApplicationForm: React.FunctionComponent<LoanFormProps> = ({
  onReview,
  getBalanceSheet,
}) => {
  const onSubmitHandler = (event: FormEvent) => {
    const action = (
      event.nativeEvent as typeof event.nativeEvent & {
        submitter: HTMLButtonElement;
      }
    ).submitter.name;
    event.preventDefault();

    const target = event.target as typeof event.target & FormDataSubmitType;
    const email = target.email.value;
    const name = target.name.value;
    const year = Number(target.year.value);
    const loanAmount = Number(target.loanAmount.value);
    const accountingProvider = target.accountingProvider
      .value as AccountingProviderType;
    if (action === "balanceSheet") {
      return getBalanceSheet({
        email,
        name,
        year,
        loanAmount,
        accountingProvider,
      });
    }
    return onReview({
      email,
      name,
      year,
      loanAmount,
      accountingProvider,
    });
  };
  return (
    <>
      <form
        className="w-full max-w-lg bg-gray-100 p-5 rounded h-full"
        onSubmit={onSubmitHandler}
      >
        <h2 className="w-full px-3 font-bold py-3 text-3xl">
          Loan Application
        </h2>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="email"
            type="email"
            placeholder="abc@xyz.com"
            required
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Business name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            type="text"
            placeholder="Business name"
            required
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Year established
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="year"
            type="number"
            max={9999}
            placeholder="2012"
            required
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="loanAmount"
          >
            Loan Amount
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="loanAmount"
            type="number"
            placeholder="10000"
            required
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="accountingProvider"
          >
            Accounting provider
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="accountingProvider"
              required
            >
              <option value="xero">Xero</option>
              <option value="myob">MYOB</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full px-3 mb-6 md:mb-0 flex justify-evenly">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold mt-4 py-2 px-4 rounded inline-flex items-center"
            type="submit"
            name="balanceSheet"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Get Balance sheet</span>
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold mt-4 py-2 px-4 rounded inline-flex items-center"
            type="submit"
            name="submit"
          >
            <span>Review Application</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default LoanApplicationForm;
