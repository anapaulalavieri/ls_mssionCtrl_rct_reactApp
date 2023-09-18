import { isInIframe } from "./isInIframe";

export const sendMessage = (event: any) => {
  // if (!isInIframe()) {
  //   return;
  // }

  // console.log("Send event", event);
  window.parent.postMessage(event, "*");
};
