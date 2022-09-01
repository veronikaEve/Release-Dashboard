import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../utils/test-utils/test-utils";

import SecondaryHeader from "./secondary-header";

describe("SecondaryHeader", () => {
  test("should match snapshot", () => {
    const { asFragment } = renderWithRouter(<SecondaryHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("should display the app version", () => {
    renderWithRouter(<SecondaryHeader />);
    const appVersion = screen.getByTestId("app-version-number");
    expect(appVersion).toBeInTheDocument();
  });
  test("should have the view info button", () => {
    renderWithRouter(<SecondaryHeader />);
    const viewInfoButton = screen.getByTestId("view-info");
    expect(viewInfoButton).toBeInTheDocument();
  });
  test("should have the roll back button", () => {
    renderWithRouter(<SecondaryHeader />);
    const rollBackButton = screen.getByTestId("roll-back");
    expect(rollBackButton).toBeInTheDocument();
  });
  test("should have the new release button", () => {
    renderWithRouter(<SecondaryHeader />);
    const newReleaseButton = screen.getByTestId("new-release");
    expect(newReleaseButton).toBeInTheDocument();
  });
});
