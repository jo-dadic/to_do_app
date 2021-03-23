import React from "react";

import { Button } from "../Button/Button";

import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="heading">
        <h1>
          To Do <span>Application</span>
        </h1>
      </div>
      <div className="sign-up">
        <Button buttonStyle="btn--primary">SIGN UP</Button>
      </div>
    </div>
  );
}

export default NavBar;
