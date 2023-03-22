import React, { useState } from "react";

export const Main = () => {
  const li: string = "main_li";
  const [main_li, newclass] = useState(li);
  setTimeout(() => {
    newclass("");
  }, 3000);

  return (
    <>
      <ul className="main_ul">
        <h1 className="main_h1">Categories</h1>
        <li className={`active_li ${main_li}`}>
          <a href="Photosuretter" className="main_a">
            Photosuretter
          </a>
        </li>
        <li className={`active_li ${main_li}`}>
          <a href="Tagamdar" className="main_a">
            Ulttyq-Tagamdar
          </a>
        </li>
        <li className={`active_li ${main_li}`}>
          <a href="Oyindar" className="main_a">
            Oyin-Sauyq
          </a>
        </li>
      </ul>
    </>
  );
};
