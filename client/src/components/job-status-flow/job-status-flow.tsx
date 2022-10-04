import { Container } from "react-bootstrap";
import LoadingEllipses from "../loading-ellipses/loading-ellipses";

const JobStatusFlow = () => {
  return (
    <Container className="job-status-flow-container">
      <div className="left-stick" />
      <Container fluid className="job-statuses">
        <div className="job_statuses__status">Started.</div>
        <div className="job_statuses__status">Doing...</div>
        <LoadingEllipses />
      </Container>
    </Container>
  );
};

export default JobStatusFlow;
