import React from "react";
import { Nav } from "react-bootstrap";

const SideNav: React.FC = () => {
  return (
    <Nav
      defaultActiveKey="/home"
      className="flex-column side-navbar bg-light"
      variant="pills"
    >
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/new-release">New Release</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
  );
};

export default SideNav;
