import { Card } from "react-bootstrap";
import InfoGroup from "../info-group/info-group";

const ReleaseInfoCard = () => {
  return (
    <Card className="release-info-card text-center">
      <Card.Header>Release Info</Card.Header>
      <Card.Body>
        <InfoGroup label="Branch name" data="wha" />
        <InfoGroup label="Current version" data="ehhh" />
        <InfoGroup label="Commit hash" data="grsfe" />
        <InfoGroup label="Last Update" data="fvr" />
        <InfoGroup label="Opened By" data="cswwww" />
      </Card.Body>
    </Card>
  );
};

export default ReleaseInfoCard;
