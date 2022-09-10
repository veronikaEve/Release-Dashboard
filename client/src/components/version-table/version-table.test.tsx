import { render, screen } from "@testing-library/react";

import VersionTable from "./version-table";
import { mockVersionData } from "../../utils/test-utils/mock-data";

describe("VersionTable", () => {
  let props = {
    versionData: mockVersionData,
  };

  test("should match snapshot", () => {
    const { asFragment } = render(<VersionTable {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should not render table body rows if there is no versionData", () => {
    props.versionData = [];
    render(<VersionTable {...props} />);
    expect(screen.getByTestId("version-table-tbody")).toBeEmptyDOMElement();
  });
});
