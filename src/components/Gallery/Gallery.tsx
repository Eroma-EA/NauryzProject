import React from "react";
import "../../style/css/gallery.css";
import { Main } from "./Main";
import { Galleries } from "./Galleries";
export const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="container">
          <div className="gllr_inner">
            <div className="gllr_cards">
              <Galleries />
            </div>
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};
