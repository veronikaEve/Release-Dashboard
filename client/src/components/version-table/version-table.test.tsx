import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import VersionTable from "./version-table";
import { mockVersionData } from "../../utils/test-utils/mock-data";

describe("VersionTable", () => {
  let props = {
    versionData: mockVersionData,
    setReleaseInfo: jest.fn,
  };

  test("should match snapshot", () => {
    const { asFragment } = render(<VersionTable {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe("table body", () => {
    test("row should have the 'selected' class if selected", async () => {
      const user = userEvent.setup();
      render(<VersionTable {...props} />);

      const table = screen.getByRole("table");
      const tableRow1 = within(table).getByTestId("table-row-1");

      expect(tableRow1).not.toHaveClass("selected");

      await user.click(tableRow1);

      expect(tableRow1).toHaveClass("selected");
    });

    test("should only allow one row to be selected", async () => {
      const user = userEvent.setup();
      render(<VersionTable {...props} />);

      const table = screen.getByRole("table");
      const tableRows = within(table).queryAllByRole("row");

      const tableRow0 = within(table).getByTestId("table-row-0");
      const tableRow1 = within(table).getByTestId("table-row-1");

      await user.click(tableRow0); // click once
      await user.click(tableRow1); // click again on a different element

      const selectedRows = tableRows.filter(
        (row) => row.className.includes("selected") // filter down rows to only those that have the "selected" className
      );

      expect(selectedRows).toHaveLength(1);
    });

    test("should not render rows if there is no versionData", () => {
      props.versionData = [];
      render(<VersionTable {...props} />);

      expect(screen.queryByTestId("version-table__body")).toBeNull();
    });
  });
});

// Do i need to mock and write tests for the api fetch?
