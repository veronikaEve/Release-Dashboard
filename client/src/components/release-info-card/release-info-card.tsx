import { Card } from "react-bootstrap";
import InfoGroup from "../info-group/info-group";

type PropTypes = {
  releaseInfo: any;
};

const ReleaseInfoCard = ({ releaseInfo }: PropTypes) => {
  return (
    <Card className="release-info-card text-center">
      <Card.Header>Release Info</Card.Header>
      <Card.Body>
        <InfoGroup label="Branch name" data={releaseInfo?.branchName || ""} />
        <InfoGroup
          label="Current version"
          data={releaseInfo?.currentVersion || ""}
        />
        <InfoGroup label="Commit hash" data={releaseInfo?.commitHash || ""} />
        <InfoGroup label="Last Update" data={releaseInfo?.openedBy || ""} />
        <InfoGroup label="Opened By" data={releaseInfo?.lastUpdatedBy || ""} />
      </Card.Body>
    </Card>
  );
};

export default ReleaseInfoCard;
