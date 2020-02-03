import React from "react";
import logo from "../codestone logo.png";
import { Link } from "react-router-dom";
import "../bootstrap.min.css";
import { Button } from "react";
import NavBar from "../PageDetails/Headers/NavBarUsers";

function HeaderWithNavBar() {
  return (
    <div>
      <Header />
    </div>
  );
}

function Header() {
  return (
    <div className="jumbotron">
      <div className="User-Menu"></div>
      <img
        className="profile-image"
        alt="icon"
        src={logo}
        width="340"
        height="60"
      />{" "}
      <NavBar />
    </div>
  );
}

export default HeaderWithNavBar;
