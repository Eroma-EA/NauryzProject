import React, { useState } from "react";
import "../../style/css/home.css";

export const Home = () => {
  const CLR = "white";
  const [BGcolor, Color] = useState(CLR);
  const nav = document.querySelector("nav") as HTMLElement;

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 80) {
      nav.style.backgroundColor = "#ffffff93";
      Color("");
    } else {
      Color("#fff");
      nav.style.backgroundColor = "#fff";
    }
  };

  return (
    <>
      <div className="home">
        <div className="home_inner">
          {/* Welcome Page */}
          <div className="home_welcome" style={{ backgroundColor: BGcolor }}>
            <h1>
              <img src={require("../../img/home/butterfly.png")} alt="" />
              Nauryz qutty bolsyn!!!
            </h1>
            <img src={require("../../img/home/butterflies.png")} alt="" />
          </div>

          {/* Contaoner Page */}
          <div className="container">
            <div className="home_des">
              <img src={require("../../img/Nauryz2.jpg")} alt="" />
              <div className="des_text">
                <p>
                  Наурыз мейрамы — ежелгі заманнан қалыптасқан жыл бастау
                  мейрамы. Қазіргі күнтізбе бойынша (наурыздың 22) күн мен
                  түннің теңесуі кезіне келеді. Көне парсы тілінде нава=жаңа +
                  рәзаңһ=күн, «жаңа күн» мағынасында, қазіргі парсы тілінде де
                  сол мағынамен қалған (но=жаңа + роуз=күн; мағынасы «жаңа
                  күн»), яғни «жаңа жылды» (күн өсуін белгілеуі) білдіреді.
                </p>
              </div>

              <img src={require("../../img/Nauryz1.jpg")} alt="" />
              <div className="des_text">
                <p>
                  Наурыз мейрамы — ежелгі заманнан қалыптасқан жыл бастау
                  мейрамы. Қазіргі күнтізбе бойынша (наурыздың 22) күн мен
                  түннің теңесуі кезіне келеді. Көне парсы тілінде нава=жаңа +
                  рәзаңһ=күн, «жаңа күн» мағынасында, қазіргі парсы тілінде де
                  сол мағынамен қалған (но=жаңа + роуз=күн; мағынасы «жаңа
                  күн»), яғни «жаңа жылды» (күн өсуін белгілеуі) білдіреді.
                </p>
              </div>

              <img src={require("../../img/Nauryz3.jpg")} alt="" />
              <div className="des_text">
                <p>
                  Наурыз мейрамы — ежелгі заманнан қалыптасқан жыл бастау
                  мейрамы. Қазіргі күнтізбе бойынша (наурыздың 22) күн мен
                  түннің теңесуі кезіне келеді. Көне парсы тілінде нава=жаңа +
                  рәзаңһ=күн, «жаңа күн» мағынасында, қазіргі парсы тілінде де
                  сол мағынамен қалған (но=жаңа + роуз=күн; мағынасы «жаңа
                  күн»), яғни «жаңа жылды» (күн өсуін белгілеуі) білдіреді.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
