import React from "react";
import { Home } from "../Home/Home";
import { Gallery } from "../Gallery/Gallery";
import { Contacts } from "../Contacts/Contacts";
function PagesChange() {
  const url: string = window.location.href;
  if (url.includes("Home")) {
    return (
      <>
        <Home />
      </>
    );
  } else if (
    url.includes("Gallery") ||
    url.includes("Photo") ||
    url.includes("Tagam") ||
    url.includes("Oyin")
  ) {
    return (
      <>
        <Gallery />
      </>
    );
  } else if (url.includes("Contacts")) {
    return (
      <>
        <Contacts />
      </>
    );
  } else {
    return (
      <>
        <Home />
      </>
    );
  }
}

export default PagesChange;
