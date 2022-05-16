import React from "react";
import Tilt from "react-parallax-tilt";
import logo from "../assets/logo.png";

export default function Nav() {
  return (
    <nav>
      <Tilt>
        <div className="logo">
          <img src={logo} alt="img" />
        </div>
      </Tilt>
      <Tilt>
        <button> Sign in </button>
      </Tilt>
    </nav>
  );
}
