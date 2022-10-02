import { Button, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import { triggerRollback } from "../../services/concourse";

const RollbackPage = () => {
  let { branch } = useParams();

  const onRollbackClick = () => {
    // triggerRollback("tv_release_1.5")
    //   .then(
    //     (result: { status: number; }) =>
    //       result.status === 200 &&
    //       window.alert(`successfully rolled back ${branch}`)
    //   )
    //   .catch((err: any) => console.error(err));
  };

  return (
    <Col md={5} style={{ display: "grid", gap: "40px" }}>
      <Button onClick={onRollbackClick}>Rollback {branch}</Button>
    </Col>
  );
};

export default RollbackPage;
