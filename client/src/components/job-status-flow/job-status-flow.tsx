import { Container } from "react-bootstrap";
import { ActionStatus } from "../../@types";

type PropTypes = {
  statuses: ActionStatus[];
};

const JobStatusFlow = ({ statuses }: PropTypes) => {
  return (
    <Container className="job-status-flow-container">
      <div className="left-stick" />
      <Container fluid className="job-statuses">
        <>
          {statuses.length ? (
            statuses.map((status, index) => (
              <div
                key={index}
                className={`job_statuses__status ${status.statusCode}`}
                data-testid={`${status.statusCode}-status`}
              >
                {status.message}
              </div>
            ))
          ) : (
            <div className="job_statuses__status">Waiting for action ...</div>
          )}
        </>
      </Container>
    </Container>
  );
};

export default JobStatusFlow;

// TODO:
// alter and finalise logic once webhooks are implemented so that the client can listen and receive status updates
// LoadingEllipses to only appear until client still listens. It should not render once the job has failed or succeeded
