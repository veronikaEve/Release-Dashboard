import { ReactNode } from "react";
import { Card } from "react-bootstrap";
import { ActionStatus } from "../../@types";
import JobStatusFlow from "../job-status-flow/job-status-flow";

type PropTypes = {
  button: ReactNode;
  statuses: ActionStatus[];
};

const ActionCard = ({ button, statuses }: PropTypes) => {
  return (
    <Card className="text-center">
      <Card.Header>Full rollout</Card.Header>
      <Card.Body>
        {button}
        <JobStatusFlow statuses={statuses} />
      </Card.Body>
    </Card>
  );
};

export default ActionCard;
