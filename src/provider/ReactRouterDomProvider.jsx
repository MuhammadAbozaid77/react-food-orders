import React from "react";
import { BrowserRouter } from "react-router-dom";

export default function ReactRouterDomProvider({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

// import { HashRouter } from "react-router-dom";

// export default function RoutesProvider({ children }) {
//   return <HashRouter hashType="hashbang">{children}</HashRouter>;
// }
