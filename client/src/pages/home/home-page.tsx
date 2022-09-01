import React from "react";
import { Col } from "react-bootstrap";

import VersionTable from "../../components/version-table/version-table";

const HomePage: React.FC = () => {
  return (
    <Col md={5}>
      <VersionTable />
    </Col>
  );
};

export default HomePage;
