import { render } from "@testing-library/react";

import RollbackPage from "./rollback-page";

describe("RollbackPage", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<RollbackPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
