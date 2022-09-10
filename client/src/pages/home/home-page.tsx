import { Col } from "react-bootstrap";

import VersionTable from "../../components/version-table/version-table";
import { VersionData } from "../../@types";

type PropTypes = {
  versionData: VersionData[];
};

const HomePage = ({ versionData }: PropTypes) => {
  return (
    <Col md={5}>
      <VersionTable versionData={versionData} />
    </Col>
  );
};

export default HomePage;
