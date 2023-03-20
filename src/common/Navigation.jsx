import React from "react";
import "./nav.css";

function Navigation() {
  return (
    <>
      <div className="navigation">
        <a href="/" className="brandname">
          Azubishop
        </a>
        <ul>
          <li>
            <a href="/Home">Home</a>{" "}
          </li>
          <li>
            <a href="/Cart">Cart</a>{" "}
          </li>
        </ul>
        <button className="login">Login</button>
      </div>
    </>
  );
}

export default Navigation;
