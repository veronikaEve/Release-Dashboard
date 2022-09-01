import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SideNav: React.FC = () => {
  return (
    <Nav
      className="flex-column side-navbar bg-white"
      defaultActiveKey="home"
      variant="pills"
      data-testid="side-navbar"
    >
      <Nav.Link as={NavLink} to="home" data-testid="home-nav">
        Home
      </Nav.Link>
      <Nav.Link as={NavLink} to="new-release" data-testid="new-release-nav">
        New Release
      </Nav.Link>
      <Nav.Link as={NavLink} to="about" data-testid="about-nav">
        About
      </Nav.Link>
    </Nav>
  );
};

export default SideNav;
