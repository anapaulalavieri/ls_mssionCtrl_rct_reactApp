import { Callout } from "./globekit.esm.js";

/**
 * This is the definition of the callout that appears over the selected airport
 */
class POIDetailCallout extends Callout {
  createElement() {
    // Uncomment this line then click on an airport to see the data object;
    // console.log(this.definition.data);

    // Here is the html element that will be attached to the coord
    const div = document.createElement("div");
    div.className = "poi-callout-container-wrapper";
    div.innerHTML = `<div class="poi-callout-container">
      <div class="poi-callout-container__title">${this.definition.data.name}</div>
    </div>`;
    return document.createElement("span");
  }

  // This function sets offsets for the htmlElement from the lat/lon coord
  setPosition(position) {
    // const nx = position.screen.x;
    // const ny = position.screen.y;
    // this.element.style.transform = `translate(${nx.toFixed(1)}px, ${ny.toFixed(0)}px)`;
    // this.element.style.zIndex = Math.round(10000 * position.screen.y);
    //
    // if (position.world.similarityToCameraVector < 0.3) {
    //   this.element.classList.add("hidden");
    // } else {
    //   this.element.classList.remove("hidden");
    // }
  }
}

export { POIDetailCallout };
