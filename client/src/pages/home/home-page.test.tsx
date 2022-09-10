import { render, screen } from "@testing-library/react";
import React from "react";

import HomePage from "./home-page";
import { mockVersionData } from "../../utils/test-utils/mock-data";

describe("HomePage", () => {
  const props = {
    versionData: mockVersionData,
  };

  test("should match snapshot", () => {
    const { asFragment } = render(<HomePage {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should have the version table", () => {
    render(<HomePage {...props} />);
    const versionTable = screen.getByTestId("version-table");
    expect(versionTable).toBeInTheDocument();
  });
});
