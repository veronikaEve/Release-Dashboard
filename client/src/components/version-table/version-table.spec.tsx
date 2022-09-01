import { render } from "@testing-library/react";

import VersionTable from "./version-table";

describe("VersionTable", () => {
  test("should have the navbar", () => {
    const { asFragment } = render(<VersionTable />);
    expect(asFragment()).toMatchSnapshot();
  });
});
