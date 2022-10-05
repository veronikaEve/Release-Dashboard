import { useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ActionStatus } from "../../@types";
import ActionCard from "../../components/action-card/action-card";
import { onRollBackClick } from "./rollback-page-actions";

const RollbackPage = () => {
  const [rollBackStatus, setRollBackStatus] = useState<ActionStatus[]>([]);
  const { branch } = useParams();

  const rollBackButton = (
    <Button
      className="action-button"
      onClick={() => onRollBackClick(branch, setRollBackStatus)}
    >
      Roll back {branch}
    </Button>
  );

  console.log(rollBackStatus);
  return (
    <Container data-testid="rollback-page">
      <Col md={5} style={{ display: "grid", gap: "40px" }}>
        <ActionCard button={rollBackButton} statuses={rollBackStatus} />
      </Col>
    </Container>
  );
};

export default RollbackPage;
