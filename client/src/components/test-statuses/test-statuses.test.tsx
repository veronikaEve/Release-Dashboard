import { render } from "@testing-library/react";
import TestStatuses from "./test-statuses";

describe("TestStatuses", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<TestStatuses />);
    expect(asFragment()).toMatchSnapshot();
  });
});
