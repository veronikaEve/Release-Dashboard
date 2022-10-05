import { render, screen } from "@testing-library/react";
import { mockActionStatusData } from "../../utils/test-utils/mock-data";
import JobStatusFlow from "./job-status-flow";

describe("JobStatusFlow", () => {
  let props = {
    statuses: mockActionStatusData,
  };

  test("should match snapshot", () => {
    const { asFragment } = render(<JobStatusFlow {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("status should have 'success' className if statusCode is success", () => {
    render(<JobStatusFlow {...props} />);

    const successStatus = screen.getByTestId("success-status");
    expect(successStatus).toHaveClass("success");
  });

  test("status should have 'error' className if statusCode is error", () => {
    render(<JobStatusFlow {...props} />);

    const errorStatus = screen.getByTestId("error-status");
    expect(errorStatus).toHaveClass("error");
  });

  test("should not display a default message if there is no status", () => {
    render(<JobStatusFlow {...props} />);

    const defaultMessage = screen.queryByText("Waiting for action ...");
    expect(defaultMessage).toBeNull();
  });

  test("should display a default message if there is no status", () => {
    props = {
      statuses: [],
    };
    render(<JobStatusFlow {...props} />);

    const defaultMessage = screen.getByText("Waiting for action ...");
    expect(defaultMessage).toBeInTheDocument();
  });
});
