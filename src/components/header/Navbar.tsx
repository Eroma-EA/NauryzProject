import React from "react";
import "../../style/css/navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="navigationBar">
        <nav>
          <div className="nav_one">
            <h1>Nauryz Qutty Bolsyn</h1>
          </div>
          <div className="nav_two">
            <ul className="nav_menu">
              <li>
                <span></span>
                <a href="Home">Negizgi bet</a>
              </li>
              <li>
                <span></span>
                <a href="Gallery">Gallereya</a>
              </li>
              <li>
                <span></span>
                <a href="Contacts">Baylanys</a>
              </li>
              <li>
                <a href="SignIn">Kiru</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
