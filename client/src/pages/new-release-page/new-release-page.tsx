import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

import { getReleaseBranches } from "../../services/github";
import ReleaseInfoCard from "../../components/release-info-card/release-info-card";
import InfoGroup from "../../components/info-group/info-group";
import InfoInputGroup from "../../components/info-input-group/info-input-group";

import { releaseInfoTransformer } from "../../utils/transformers/release-info-transformer";

const NewReleasePage: React.FC = () => {
  const [releaseBranches, setReleaseBranches] = useState<any[]>([]); // any[] not very good, but stops typescript from complaining about branch.name
  const [releaseInfo, setReleaseInfo] = useState<unknown>();

  const transformedReleaseInfo = releaseInfoTransformer(releaseInfo);

  useEffect(() => {
    getReleaseBranches()
      .then((result) => {
        setReleaseBranches(result);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Col md={4}>
      <ReleaseInfoCard>
        <InfoInputGroup
          label="Branch name"
          inputOptions={releaseBranches}
          setReleaseInfo={setReleaseInfo}
        />
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
