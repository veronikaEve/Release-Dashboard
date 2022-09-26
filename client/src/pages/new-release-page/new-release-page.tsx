import React from "react";
import { Col } from "react-bootstrap";

import ReleaseInfoCard from "../../components/release-info-card/release-info-card";
import InfoGroup from "../../components/info-group/info-group";
import InfoInputGroup from "../../components/info-input-group/info-input-group";

const transformedReleaseInfo = {
  branchName: "string",
  currentVersion: "string",
  commitHash: "string",
  openedBy: "string",
  lastUpdatedBy: "string",
};

const NewReleasePage: React.FC = () => {
  return (
    <Col md={4}>
      <ReleaseInfoCard>
        <InfoInputGroup label="Branch name" inputOptions={""} />
        <InfoGroup
          label="Current version"
          data={transformedReleaseInfo?.currentVersion}
        />
        <InfoGroup
          label="Commit hash"
          data={transformedReleaseInfo?.commitHash}
        />
        <InfoGroup
          label="Last Update"
          data={transformedReleaseInfo?.openedBy}
        />
        <InfoGroup
          label="Opened By"
          data={transformedReleaseInfo?.lastUpdatedBy}
        />
      </ReleaseInfoCard>
    </Col>
  );
};

export default NewReleasePage;
