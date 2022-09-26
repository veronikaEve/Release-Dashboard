import { ReactNode } from "react";
import { Card } from "react-bootstrap";

type PropTypes = {
  children: ReactNode;
};

const ReleaseInfoCard = ({ children }: PropTypes) => {
  return (
    <Card className="release-info-card text-center">
      <Card.Header>Release Info</Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export default ReleaseInfoCard;
