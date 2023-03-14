import React from "react";
import App from "../app/App";
import "../../style/global.css";

export const Pages = () => {
  return (
    <>
      <img
        src={require("../../img/background.png")}
        alt=""
        className="backgroundIMG"
      />
      <App />
    </>
  );
};
