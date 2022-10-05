import { useState } from "react";
import { Col } from "react-bootstrap";

import VersionTable from "../../components/version-table/version-table";
import ReleaseInfoCard from "../../components/release-info-card/release-info-card";
import InfoGroup from "../../components/info-group/info-group";

import { ReleaseInfoType, VersionData } from "../../@types";
import { releaseInfoInitialValue } from "../../entry-points/default-values/release-info";

type PropTypes = {
  versionData: VersionData[];
};

const HomePage = ({ versionData }: PropTypes) => {
  const [releaseInfo, setReleaseInfo] = useState<ReleaseInfoType>(
    releaseInfoInitialValue
  );

  return (
    <Col md={5} style={{ display: "grid", gap: "40px" }}>
      <VersionTable versionData={versionData} setReleaseInfo={setReleaseInfo} />
      <ReleaseInfoCard>
        <InfoGroup label="Branch name" data={releaseInfo?.branchName} />
        <InfoGroup label="Current version" data={releaseInfo?.appVersion} />
        <InfoGroup label="Commit hash" data={releaseInfo?.latestCommitHash} />
        <InfoGroup label="Last Update" data={releaseInfo?.openedBy} />
        <InfoGroup label="Opened By" data={releaseInfo?.lastUpdatedBy} />
      </ReleaseInfoCard>
    </Col>
  );
};

export default HomePage;
