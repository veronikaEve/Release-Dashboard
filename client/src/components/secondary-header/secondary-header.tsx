import React from "react";
import { Button, Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SecondaryHeader: React.FC = () => {
  return (
    <Container fluid className="secondary-header">
      <p className="no-p-margin">
        Current Live XTV App version is:{" "}
        <b data-testid="app-version-number">7.8.8</b> rolled out to 100% of
        users
      </p>
      <Button size="sm" data-testid="view-info">
        View Info
      </Button>
      <Button size="sm" data-testid="roll-back">
        Roll Back
      </Button>
      <Button size="sm" data-testid="new-release">
        <Nav.Link as={NavLink} to="new-release">
          Start New Release
        </Nav.Link>
      </Button>
    </Container>
  );
};

export default SecondaryHeader;
