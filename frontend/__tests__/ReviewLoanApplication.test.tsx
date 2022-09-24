import React from "react";
import renderer from "react-test-renderer";
import ReviewLoanApplication from "../components/ReviewLoanApplication";
import { FormData } from "../pages";

const TEST_DATA: FormData = {
  email: "abc@cdf.com",
  name: "qwerty",
  year: 2021,
  loanAmount: 20000,
  accountingProvider: "myob",
};

it("renders correctly", () => {
  const onSubmitHandler = jest.fn();
  const tree = renderer
    .create(
      <ReviewLoanApplication formData={TEST_DATA} onSubmit={onSubmitHandler} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
