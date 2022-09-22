import { render } from "@testing-library/react";
import ReleaseInfoCard from "./release-info-card";

describe("ReleaseInfoCard", () => {
  const props = {
    releaseInfo: {
      branchName: "test_branch_name",
      currentVersion: "1.1.1",
      commitHash: "1ab2c3",
      openedBy: "testName",
      lastUpdatedBy: "anotherTestName",
    },
  };

  test("should match snapshot", () => {
    const { asFragment } = render(<ReleaseInfoCard {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
