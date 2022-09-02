import { render, screen } from "@testing-library/react";

import HomePage from "./home-page";

describe("HomePage", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<HomePage />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should have the version table", () => {
    render(<HomePage />);
    const versionTable = screen.getByTestId("version-table");
    expect(versionTable).toBeInTheDocument();
  });
});
