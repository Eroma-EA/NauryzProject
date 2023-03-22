import React from "react";
import { Navbar } from "../Header/Navbar";
import PagesChange from "../PagesChange/PagesChange";
import { Footer } from "../Footer/Footer";
import "../../style/global.css";
import "../../style/css/mobile.css";
export const Pages = () => {
  return (
    <>
      <img
        src={require("../../img/16359095_v904-nunny-012.jpg")}
        alt=""
        className="backgroundIMG"
      />
      <Navbar />
      <PagesChange />
      <Footer />
    </>
  );
};
