import { render } from "@testing-library/react";

import NewReleasePage from "./new-release-page";

describe("NewReleasePage", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<NewReleasePage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
