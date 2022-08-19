import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import nowLogo from "./Now_Logo.png";
import SignedIn from "./signed-in";

const Header: React.FC = () => {
  return (
    <Navbar sticky="top" bg="light" className="top-navbar" data-testid="header">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="home" data-testid="navbar-brand">
          <img
            src={nowLogo}
            width="130px"
            className="d-inline-block brand-logo"
            alt="now logo"
          />
          XTV Release Dashboard
        </Navbar.Brand>
        <div className="login-info" data-testid="login-info">
          <SignedIn />
          <Button variant="primary" data-testid="sign-in-out-button">
            Sign out
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
