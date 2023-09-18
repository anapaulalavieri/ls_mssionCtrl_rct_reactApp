import React from "react";
import ReactDOMServer from "react-dom/server";

export const getHTMLElementFromReactComponent = (Component: any, props: any): HTMLElement => {
  const div = document.createElement("div");
  div.innerHTML = ReactDOMServer.renderToString(React.createElement(Component, props, null));
  return div.firstChild as HTMLElement;
};
