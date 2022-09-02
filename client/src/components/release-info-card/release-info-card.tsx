import React from "react";
import { Card } from "react-bootstrap";
import InfoGroup from "../info-group/info-group";

const ReleaseInfoCard: React.FC = () => {
  return (
    <Card className="release-info-card text-center">
      <Card.Header>Release Info</Card.Header>
      <Card.Body>
        <InfoGroup />
        <InfoGroup />
        <InfoGroup />
        <InfoGroup />
      </Card.Body>
    </Card>
  );
};

export default ReleaseInfoCard;
