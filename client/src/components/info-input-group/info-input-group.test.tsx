import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import InfoInputGroup from "../info-input-group/info-input-group";

describe("InfoInputGroup", () => {
  const props = {
    label: "test label",
    inputOptions: ["test_branch_1", "test_branch_2", "test_branch_3"],
    setReleaseInfo: jest.fn,
  };

  test("should match snapshot", () => {
    const { asFragment } = render(<InfoInputGroup {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should display 'Choose a branch' by default", () => {
    render(<InfoInputGroup {...props} />);
    const combobox = screen.getByRole("combobox");
    expect(combobox).toHaveDisplayValue("Choose a branch");
  });

  test("should display selected value", async () => {
    render(<InfoInputGroup {...props} />);

    const combobox = screen.getByRole("combobox");
    const option2 = screen.getByRole("option", {
      name: "test_branch_2",
    });

    await userEvent.selectOptions(combobox, option2);

    expect(combobox).toHaveDisplayValue("test_branch_2");
  });
});
