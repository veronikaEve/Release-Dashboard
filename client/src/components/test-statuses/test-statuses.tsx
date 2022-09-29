import { Card } from "react-bootstrap";
import InfoGroup from "../info-group/info-group";

type PropTypes = {
  badge: string;
};

const TestStatuses = ({ badge }: PropTypes) => {
  const badgeImage = badge ? <img src={badge} alt="status badge" /> : "";

  return (
    <Card className="test-status-card text-center">
      <Card.Header>Test Status</Card.Header>
      <Card.Body>
        <InfoGroup label="Unit test" data={badgeImage} />
      </Card.Body>
    </Card>
  );
};

export default TestStatuses;
