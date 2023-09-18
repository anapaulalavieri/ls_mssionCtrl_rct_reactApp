import { Callout } from "./globekit.esm.js";

import { getHTMLElementFromReactComponent } from "../../utils/getHTMLElementFromReactComponent";

import { PinWithPopup } from "../PinWithPopup";

/**
 * This is the definition of the callout that appears over the selected airport
 */
class POIPinCallout extends Callout {
  createElement() {
    // Uncomment this line then click on an airport to see the data object;
    // console.log(this.definition.data);

    const { status, style, isBest, statusInfo, hasTransfer, name, value } = this.definition.data;

    const pin = getHTMLElementFromReactComponent(PinWithPopup, {
      hasTransfer,
      hasValueBg: true,
      id: `pin-${this.definition.data?.name?.replace(/ /g, "")}`,
      isBest,
      info: statusInfo,
      status,
      style,
      title: name,
      value
    });

    this.onClick = this.onClick.bind(this);
    pin.querySelector(".poi-pin").addEventListener("click", this.onClick);

    this.onContainerClick = this.onContainerClick.bind(this);
    pin.querySelector(".poi-callout-container").addEventListener("click", this.onContainerClick);

    return pin;
  }

  // This function sets offsets for the htmlElement from the lat/lon coord
  setPosition(position) {
    const nx = position.screen.x;
    const ny = position.screen.y;
    this.element.style.transform = `translate(${nx.toFixed(2)}px, ${ny.toFixed(2)}px)`;
    this.element.style.zIndex = Math.round(10000 * position.screen.y);

    if (position.world.similarityToCameraVector < 0.3) {
      this.element.classList.add("hidden");
    } else {
      this.element.classList.remove("hidden");
    }
  }

  onClick() {
    document.querySelectorAll(".poi-pin-wrapper").forEach(el => el.classList.remove("active"));
    this.element.classList.add("active");
    this.element.dispatchEvent(new CustomEvent("pinclick", { bubbles: true, detail: this.definition }));
  }

  onContainerClick() {
    this.element.dispatchEvent(new CustomEvent("pinContainerClick", { bubbles: true, detail: this.definition }));
  }
}

export { POIPinCallout };
