import { Col } from "react-bootstrap";

import VersionTable from "../../components/version-table/version-table";
import ReleaseInfoCard from "../../components/release-info-card/release-info-card";

import { VersionData } from "../../@types";

type PropTypes = {
  versionData: VersionData[];
};

const HomePage = ({ versionData }: PropTypes) => {
  return (
    <Col md={5} style={{ display: "grid", gap: "40px" }}>
      <VersionTable versionData={versionData} />
      <ReleaseInfoCard />
    </Col>
  );
};

export default HomePage;
