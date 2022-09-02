import { render } from "@testing-library/react";

import VersionTable from "./version-table";

describe("VersionTable", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<VersionTable />);
    expect(asFragment()).toMatchSnapshot();
  });
});
