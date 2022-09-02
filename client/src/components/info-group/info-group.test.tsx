import { render } from "@testing-library/react";

import InfoGroup from "./info-group";

describe("InfoGroup", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<InfoGroup />);
    expect(asFragment()).toMatchSnapshot();
  });
});
