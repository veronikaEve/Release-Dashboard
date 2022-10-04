import { Button, Card } from "react-bootstrap";
import JobStatusFlow from "../job-status-flow/job-status-flow";

const ActionCard = () => {
  return (
    <Card className="text-center">
      <Card.Header>Full rollout</Card.Header>
      <Card.Body className="">
        <Button className="release-button">Release</Button>
        <JobStatusFlow />
      </Card.Body>
    </Card>
  );
};

export default ActionCard;
