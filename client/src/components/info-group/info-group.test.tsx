import { render } from "@testing-library/react";

import InfoGroup from "./info-group";

describe("InfoGroup", () => {
  const props = {
    label: "test label",
    data: "data data",
  };

  test("should match snapshot", () => {
    const { asFragment } = render(<InfoGroup {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
