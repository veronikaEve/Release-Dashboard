import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";

import { getReleaseBranches } from "../../services/github";
import ReleaseInfoCard from "../../components/release-info-card/release-info-card";
import InfoGroup from "../../components/info-group/info-group";
import InfoInputGroup from "../../components/info-input-group/info-input-group";

import TestStatuses from "../../components/test-statuses/test-statuses";
import ActionCard from "../../components/action-card/action-card";
import { ReleaseInfoType } from "../../@types";
import { releaseInfoInitialValue } from "../../entry-points/default-values/release-info";

const NewReleasePage: React.FC = () => {
  const [releaseBranches, setReleaseBranches] = useState<string[]>([]);
  const [releaseInfo, setReleaseInfo] = useState<ReleaseInfoType>(
    releaseInfoInitialValue
  );
  const [testBadge, setTestBadge] = useState<string>("");

  useEffect(() => {
    getReleaseBranches()
      .then((result) => {
        setReleaseBranches(result);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (releaseInfo?.branchName) {
      setTestBadge(
        `http://localhost:8080/api/v1/teams/main/pipelines/release-pipeline-${releaseInfo?.branchName}/jobs/unit-test/badge` // concourse needs to be running for this to be authorized and return the badge
      );
    }
  }, [releaseInfo?.branchName]); // why does this re-render on every "change" if this value just stays empty?? then

  return (
    <Container fluid className="new-release-page-container">
      <Col md={4}>
        <ReleaseInfoCard>
          <InfoInputGroup
            label="Branch name"
            inputOptions={releaseBranches}
            setReleaseInfo={setReleaseInfo}
          />
          <InfoGroup label="Current version" data={releaseInfo?.appVersion} />
          <InfoGroup label="Commit hash" data={releaseInfo?.latestCommitHash} />
          <InfoGroup label="Last Update" data={releaseInfo?.openedBy} />
          <InfoGroup label="Opened By" data={releaseInfo?.lastUpdatedBy} />
        </ReleaseInfoCard>
      </Col>
      <Col md={4}>
        <TestStatuses badge={testBadge} />
      </Col>
      <Col md={4}>{/* <ActionCard /> */}</Col>
    </Container>
  );
};

export default NewReleasePage;
