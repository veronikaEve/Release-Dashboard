import { render } from "@testing-library/react";
import ReleaseInfoCard from "./release-info-card";

describe("ReleaseInfoCard", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<ReleaseInfoCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
