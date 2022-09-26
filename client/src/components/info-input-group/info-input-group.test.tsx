import { render } from "@testing-library/react";

import InfoInputGroup from "../info-input-group/info-input-group";

describe("InfoInputGroup", () => {
  const props = {
    label: "test label",
    inputOptions: "data data",
  };

  test("should match snapshot", () => {
    const { asFragment } = render(<InfoInputGroup {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
