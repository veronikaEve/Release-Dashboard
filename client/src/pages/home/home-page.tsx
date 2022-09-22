import { useState } from "react";
import { Col } from "react-bootstrap";

import VersionTable from "../../components/version-table/version-table";
import ReleaseInfoCard from "../../components/release-info-card/release-info-card";

import { VersionData } from "../../@types";
import { releaseInfoTransformer } from "../../utils/transformers/release-info-transformer";

type PropTypes = {
  versionData: VersionData[];
};

const HomePage = ({ versionData }: PropTypes) => {
  const [releaseInfo, setReleaseInfo] = useState<unknown>();

  const transformedReleaseInfo = releaseInfoTransformer(releaseInfo);

  return (
    <Col md={5} style={{ display: "grid", gap: "40px" }}>
      <VersionTable versionData={versionData} setReleaseInfo={setReleaseInfo} />
      <ReleaseInfoCard releaseInfo={transformedReleaseInfo} />
    </Col>
  );
};

export default HomePage;
