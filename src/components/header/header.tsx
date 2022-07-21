import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";

import nowLogo from "../header/Now_Logo.png";

const Header: React.FC = () => {
  return (
    <Navbar sticky="top" bg="light" className="top-navbar">
      <Container fluid>
        <Navbar.Brand>
          <img
            src={nowLogo}
            width="130px"
            className="d-inline-block brand-logo"
            alt="now logo"
          />
          XTV Release Dashboard
        </Navbar.Brand>
        <Button variant="primary">Sign in</Button>
      </Container>
    </Navbar>
  );
};

export default Header;
