interface LoanApprovalStatusProps {
  approved?: boolean;
  amount?: number;
  onReset: () => void;
}

const SuccessPage: React.FunctionComponent<LoanApprovalStatusProps> = ({
  approved,
  amount,
  onReset,
}) => {
  return (
    <div className="w-full max-w-lg bg-gray-100 p-5 rounded h-full">
      <h2 className="w-full px-3 font-bold py-3 text-3xl">
        Application outcome
      </h2>
      {approved ? (
        <h5 className="w-full px-3 font-bold py-3 text-1xl">
          Congrats, Your loan application has been approved. Amount sanctioned
          is {amount}
        </h5>
      ) : (
        <h5 className="w-full px-3 font-bold py-3 text-1xl">
          Sorry, Your loan application is not approved.
        </h5>
      )}
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold mt-4 py-2 px-4 rounded inline-flex items-center"
        type="button"
        onClick={onReset}
      >
        <span>New Application</span>
      </button>
    </div>
  );
};

export default SuccessPage;
