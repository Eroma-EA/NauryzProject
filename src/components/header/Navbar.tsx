import React, { useState, UIEvent } from "react";
import "../../style/css/navbar.css";

export const Navbar = () => {
  const CLR = "white";
  const navH = "70px";
  const navclass: string = "";
  const [activenav, navclassnew] = useState(navclass);
  const spanClick = (e: UIEvent) => {
    let click = e.currentTarget;
    click.classList.toggle("active");
    if (activenav === "") {
      navclassnew("activenav");
    } else {
      navclassnew("");
    }
  };
  const [navHeight, height] = useState(navH);
  const [BGcolor, Color] = useState(CLR);
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 80) {
      Color("#ffffff93");
      height("50px");
    } else {
      Color("#fff");
      height("70px");
    }
  };
  return (
    <>
      <nav style={{ backgroundColor: BGcolor, height: navHeight }}>
        <div className="nav_one">
          <h1>Nauryz Qutty Bolsyn</h1>
        </div>
        <div className={`nav_two ${activenav}`}>
          <ul className="nav_menu">
            <li>
              <a href="Home">
                <i className="fa-solid fa-house nav_icon"></i>
                Negizgi bet
              </a>
            </li>
            <li>
              <a href="Gallery">
                <i className="fa-solid fa-photo-film nav_icon"></i>Gallereya
              </a>
            </li>
            <li>
              <a href="Contacts">
                <i className="fa-solid fa-phone nav_icon"></i>
                Baylanys
              </a>
            </li>
          </ul>
        </div>
        <span onClick={spanClick} className="burger">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </nav>
    </>
  );
};
