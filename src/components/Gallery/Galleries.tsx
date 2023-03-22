import React from "react";
import Gallery from "./Gallery.json";
export const Galleries = () => {
  const url: string = window.location.href;
  const Galleries = Gallery;
  // const card_info = document.querySelector(".card_info") as HTMLDivElement;

  return (
    <>
      {Galleries.map((gallery) => {
        if (url.includes(gallery.category)) {
          return (
            <div className="gllr_card">
              <div className="card_img">
                <img
                  id={`${gallery.id}`}
                  src={require(`../../img/Tagam/${gallery.url}`)}
                  alt=""
                />
              </div>
              <h1>{gallery.name}</h1>
            </div>
          );
        } else if (url.includes("Gallery")) {
          return (
            <div className="gllr_card">
              <div className="card_img">
                <img
                  id={`${gallery.id}`}
                  src={require(`../../img/Tagam/${gallery.url}`)}
                  alt=""
                />
              </div>
              <h1>{gallery.name}</h1>
            </div>
          );
        }
      })}
    </>
  );
};
