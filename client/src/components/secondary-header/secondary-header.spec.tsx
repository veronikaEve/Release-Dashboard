import { render, screen } from "@testing-library/react";
import SecondaryHeader from "./secondary-header";

describe("SecondaryHeader", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<SecondaryHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("should display the app version", () => {
    render(<SecondaryHeader />);
    const appVersion = screen.getByTestId("app-version-number");
    expect(appVersion).toBeInTheDocument();
  });
  test("should have the view info button", () => {
    render(<SecondaryHeader />);
    const viewInfoButton = screen.getByTestId("view-info");
    expect(viewInfoButton).toBeInTheDocument();
  });
  test("should have the roll back button", () => {
    render(<SecondaryHeader />);
    const rollBackButton = screen.getByTestId("roll-back");
    expect(rollBackButton).toBeInTheDocument();
  });
  test("should have the new release button", () => {
    render(<SecondaryHeader />);
    const newReleaseButton = screen.getByTestId("new-release");
    expect(newReleaseButton).toBeInTheDocument();
  });
});
