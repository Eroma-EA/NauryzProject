import React from "react";
import "../../style/css/contacts.css";
export const Contacts = () => {
  return (
    <>
      <div className="contacts">
        <div className="container">
          <div className="contact_inner">
            <div className="map">
              <h1 className="map_h1">Qaida?</h1>
              <span className="map_span">
                <h3>
                  <i className="fa-solid fa-map-location"></i> Almaty qalasy,
                  Maulenova 92
                </h3>
              </span>
              <h1 className="map_h1">Qashan?</h1>
              <span className="map_span">
                <h3>kuni: 22 nauryz 2023</h3>
                <h3>uaqyty: 12:00</h3>
              </span>
              <h1 className="map_h1">Baylanys</h1>
              <span className="map_span">
                <h3>
                  <i className="fa-regular fa-at"></i> ergazi.avdanov99@mail.ru
                </h3>
                <h3>
                  <i className="fa-solid fa-phone"></i> +7 700 304 0299
                </h3>
              </span>
              <img
                className="instagram map_h1"
                src={require("../../img/ergazi.avdanov.ea_qr.png")}
                alt=""
              />
            </div>
            <div className="message">
              <h1 className="message_animation">Sizding Pikiriniz</h1>
              <h3 className="message_animation">Esimingiz</h3>
              <input className="message_animation" type="text" />
              <h3 className="message_animation">Email</h3>
              <input className="message_animation" type="text" />
              <h3 className="message_animation">Pikiringiz</h3>
              <textarea
                className="message_animation"
                name=""
                id=""
                cols={30}
                rows={10}
              ></textarea>
              <button className="message_animation">Jiberu</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
