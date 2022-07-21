import React from "react";
import { Navbar } from "react-bootstrap";

import nowLogo from "../header/Now_Logo.png";

const SignedIn: React.FC = () => {
  return (
    <div className="profile-info">
      <img
        alt="user profile picture"
        src="https://i.natgeofe.com/n/95140430-92fc-49df-a453-c91743348f93/87132_square.jpg"
        className="user-profile-picture"
      />
      <Navbar.Text>
        Hi <a href="#login">John Smithy</a>
      </Navbar.Text>
    </div>
  );
};

export default SignedIn;
