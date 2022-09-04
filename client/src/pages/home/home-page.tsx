import React from "react";
import { Col } from "react-bootstrap";

import VersionTable from "../../components/version-table/version-table";
import { VersionData } from "../../@types";

import { getAllReleaseData } from "../../server-comms/database";

let versionData: VersionData[];

getAllReleaseData().then((result) => (versionData = result));

const HomePage: React.FC = () => {
  return (
    <Col md={5}>
      <VersionTable versionData={versionData} />
    </Col>
  );
};

export default HomePage;
