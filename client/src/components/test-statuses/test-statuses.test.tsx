import { render } from "@testing-library/react";
import TestStatuses from "./test-statuses";

describe("TestStatuses", () => {
  const props = {
    badge: "img.url",
  };

  test("should match snapshot", () => {
    const { asFragment } = render(<TestStatuses {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
