import { Button, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { onRollBackClick } from "./rollback-page-actions";

const RollbackPage = () => {
  const { branch } = useParams();

  return (
    <Container data-testid="rollback-page">
      <Col md={5} style={{ display: "grid", gap: "40px" }}>
        <Button onClick={() => onRollBackClick(branch)}>
          Roll back {branch}
        </Button>
      </Col>
    </Container>
  );
};

export default RollbackPage;
