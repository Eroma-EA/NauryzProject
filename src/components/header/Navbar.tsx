import React, { useState } from "react";
import "../../style/css/navbar.css";

export const Navbar = () => {
  const CLR = "white";
  const [BGcolor, Color] = useState(CLR);
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 80) {
      Color("#ffffff93");
    } else {
      Color("#fff");
    }
  };
  return (
    <>
      <nav style={{ backgroundColor: BGcolor, transition: "0.5s" }}>
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
    </>
  );
};
