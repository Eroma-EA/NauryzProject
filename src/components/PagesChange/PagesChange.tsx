import React from "react";
import { Home } from "../Home/Home";
import { Gallery } from "../Gallery/Gallery";

function PagesChange() {
  const url: string = window.location.href;
  if (url.includes("Home")) {
    return (
      <>
        <Home />
      </>
    );
  } else if (url.includes("Gallery")) {
    return (
      <>
        <Gallery />
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

// export const PagesChange = () => {
//   const Pages: string[] = [`Home`, `Gallery`];
//   const importPage = [Home, Gallery];
//   const url: string = window.location.href;
//   return (
//     <>
//       {Pages.map((Page) => {
//         if (url.includes(Page)) {
//           const i: number = Pages.indexOf(Page);
//           return `<${importPage[i]} />`;
//         } else {
//           return `<${importPage[0]} />`;
//         }
//       })}
//     </>
//   );

// return (
//   <>

//     {/* {Pages.map((Page) => {
//       if (url.includes(Page)) {
//         const i: number = Pages.indexOf(Page);
//         return `<${importPage[i]} />`;
//       } else {
//         return `<${importPage[0]} />`;
//       }
//     })} */}
//   </>
// );
// };
