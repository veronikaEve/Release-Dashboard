import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Router from "react-router-dom";

import { onRollBackClick } from "./rollback-page-actions";
import RollbackPage from "./rollback-page";
import React, { useState as useStateMock } from "react";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

jest.mock("./rollback-page-actions", () => ({
  onRollBackClick: jest.fn(),
}));

describe("RollbackPage", () => {
  const branchName = "spinach";
  const setState = jest.fn();
  const useStateMock: any = (initState: any) => [initState, setState];

  beforeEach(() => {
    jest.spyOn(Router, "useParams").mockReturnValue({ branch: branchName });
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<RollbackPage />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("rollback button text should contain the to-be-rolled-back version branch name", () => {
    render(<RollbackPage />);
    const rollBackButton = screen.getByRole("button", {
      name: `Roll back ${branchName}`,
    });

    expect(rollBackButton).toBeInTheDocument();
  });

  test("roll back button should call onRollBackClick on click", async () => {
    jest.spyOn(React, "useState").mockImplementation(useStateMock);

    render(<RollbackPage />);

    const rollBackButton = screen.getByRole("button", {
      name: `Roll back ${branchName}`,
    });

    const user = userEvent.setup();
    await user.click(rollBackButton);

    expect(onRollBackClick).toHaveBeenCalledTimes(1);
    expect(onRollBackClick).toHaveBeenCalledWith(branchName, setState);
  });
});
