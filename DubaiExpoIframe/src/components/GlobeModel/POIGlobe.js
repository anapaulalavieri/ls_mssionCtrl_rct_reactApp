import {
  Atmosphere,
   Background,
  CalloutDefinition,
  CalloutManager,
  GKUtils,
  GlobeKitView,
  PointGlobe
} from "./globekit.esm.js";

import { POIPinCallout } from "./POIPinCallout.js";
import { POIDetailCallout } from "./POIDetailCallout.js";

import { sendMessage } from "../../utils/sendMessage";

import countriesData from "./data/countries.json";
import officesData from "./data/offices.json";

import cloudsImg from "./assets/clouds.png";
import diskImg from "./assets/New_Globe.png";
import backgroundImg from "./assets/back.jpg";

import worldMapImgGlobal from "./assets/worldmap_countries_global.png";
import worldMapImgAmericas from "./assets/worldmap_countries_americas.png";
import worldMapImgApj from "./assets/worldmap_countries_apj.png";
import worldMapImgEmea from "./assets/worldmap_countries_emea.png";
import worldMapImgIds from "./assets/worldmap_countries_ids.png";

// Api Key from your GlobeKit account
const apiKey = "{YOUR_GLOBEKIT_API_KEY}";

const TOUR_STEP_TIMEOUT = 10000;

const COORDINATES_BY_REGION_MAP = {
  EMEA: [38.3, 30.5],
  APJ: [-0.3, 115.1],
  AMERICAS: [19.8, -75.4]
};

const globeParams = {
  activeColor: GKUtils.hexToRGB("#4C02A7"),
  activeCircleDiameter: 0.005,
  dangerRippleColor: GKUtils.hexToRGB("#f7363e"),
  warningRippleColor: GKUtils.hexToRGB("#ff9900"),
  rippleColor: GKUtils.hexToRGB("#6700e7"),
  rippleDuration: 4000,
  rippleWidth: 0.1,
  rippleHeight: 0.1
};

class POIGlobe {
  constructor(canvas, calloutContainer, lightingImg, isOuterNavigation, data, cb) {
    this.gkOptions = {
      apiKey,
      wasmPath: "./models/gk/gkweb_bg.wasm",
      attributes: {
        alpha: true
      },
      clearColor: [0, 0, 0, 0]
    };

    // Create the GlobeKitView object
    this.gkview = new GlobeKitView(canvas, this.gkOptions);
    this.gkview.addDrawable(new Background(backgroundImg));

    this.lightingImg = lightingImg;
    this.isOuterNavigation = isOuterNavigation;

    // **********************************************************************
    //                   CALLOUTMANAGER
    // **********************************************************************
    // Callout manager moves callouts to keep them attached to their points
    this.calloutContainer = calloutContainer;
    this.calloutManager = new CalloutManager(calloutContainer);
    this.gkview.registerCalloutManager(this.calloutManager);

    // This gets called when the calloutManager removes a callout, i.e. when it rotates behind the globe.
    this.calloutManager.shouldAutoRemoveCallout = def => {
      if (def.calloutClass === POIPinCallout) {
        return false;
      }
      return true;
    };

    // DOM onClick callback
    this.onPinClick = this.onPinClick.bind(this);
    this.calloutContainer.addEventListener("pinclick", this.onPinClick);

    this.onPinContainerClick = this.onPinContainerClick.bind(this);
    this.calloutContainer.addEventListener("pinContainerClick", this.onPinContainerClick);

    window.addEventListener("message", this.onMessage);

    // **********************************************************************
    //                   PINS
    // **********************************************************************
    const [bestOfficeName] = Object.entries(data).reduce(([bestName, bestRawValue], [name, rawValue]) => {
      const bestValue = parseFloat(bestRawValue);
      const value = parseFloat(rawValue);
      return value > bestValue ? [name, rawValue] : [bestName, bestRawValue];
    });
    this.pinDefs = officesData.features.map(el => {
      const lat = el.geometry.coordinates[1];
      const lon = el.geometry.coordinates[0];

      const pinRawValue = parseFloat(data[el.properties.name]);
      const isBest = el.properties.name === bestOfficeName;
      return new CalloutDefinition(lat, lon, POIPinCallout, {
        ...el.properties,
        ...(Number.isFinite(pinRawValue)
          ? {
              hasTransfer: true,
              isBest,
              status: pinRawValue < 0.8 ? "danger" : pinRawValue < 0.9 ? "warning" : "normal",
              statusInfo: isBest
                ? "High Availability Plant"
                : pinRawValue >= 0.9
                ? ""
                : `Deviation of the plant availability — ${((0.9 - pinRawValue) * 100).toFixed(2)}%`,
              value: `${(pinRawValue * 100).toFixed(2)}%`
            }
          : {})
      });
    });
    this.calloutManager.replaceCallouts(this.pinDefs);

    // If clicking on the globe surface, deselect current
    // this.gkview.onTap = () => {
    //   this.selectedDetailDef = null;
    //   this.calloutManager.replaceCallouts(this.pinDefs);
    // };

    // **********************************************************************
    //                   ONSELECTION
    // **********************************************************************
    // onSelection gets called when the globe reports a selection event
    this.gkview.onSelection = list => {
      // console.log(list);

      list.drawables.forEach(el => {
        if (el?.obj.id !== this?.pointglobe?.id) {
          return;
        }

        const name = el?.selection?.name?.name;

        // Process click out of globe
        if (!name) {
          return;
        }

        sendMessage(name);
        this.selectRegionByName(name, el.selection.lat, el.selection.lon);
      });
    };

    // **********************************************************************
    //                   ATMOSPHERES
    // **********************************************************************
    this.atmosphere = new Atmosphere({
      texture: diskImg
    });
    this.gkview.addDrawable(this.atmosphere);

    // **********************************************************************
    //                   POINTGLOBE
    // **********************************************************************
    // Load the binary from static server
    fetch("./models/gk/pointglobe.bin")
      .then(res => res.arrayBuffer())
      .then(data => {
        // Texture object for PointGlobe sparkle/shimmer
        const textures = {
          // Clouds.png is availible in assets folder
          noise: cloudsImg,
          id: worldMapImgIds,
          bgTexture: worldMapImgGlobal,
          americas: worldMapImgAmericas,
          apj: worldMapImgApj,
          emea: worldMapImgEmea
        };

        // Some pointglobe settings
        const pointglobeParams = {
          activeColor: "#A100FF",
          activeColorOffset: 0.0008,
          pointSize: 0.006,
          pointAlpha: 1.0,
          randomPointSizeVariance: 0.005,
          randomPointSizeRatio: 0.6,
          minPointAlpha: 0.0,
          color: "#FFFFFF"
        };
        this.pointglobe = new PointGlobe(textures, data, pointglobeParams);
        this.pointglobe.setInteractive(true, true, true);
        this.pointglobe.addDataset(countriesData.countries);
      })
      .then(() => {
        // Add the drawable, start drawing when it finishes
        if (!this.pointglobe || !this.gkview) {
          return;
        }

        this.gkview.addDrawable(this.pointglobe, () => {
          this.gkview.startDrawing();
          cb();
        });
        //console.log(this.pointglobe);
      });

    this.addTourListeners();
  }

  // Pin click callback
  onPinClick(e) {
    const lat = e.detail.latitude;
    const lon = e.detail.longitude;
    const data = e.detail.data;
    sendMessage(e.detail.data.name);
    const color =
      e.detail.data.status === "warning"
        ? globeParams.warningRippleColor
        : e.detail.data.status === "danger"
        ? globeParams.dangerRippleColor
        : globeParams.rippleColor;

    this.pointglobe.rippleAtLocation(lat, lon, {
      activeColor: color,
      activeCircleDiameter: globeParams.activeCircleDiameter,
      duration: 7000,
      height: 0.02,
      rippleColor: color,
      width: 0.02
    });

    this.gkview.ambientController.isEnabled = false;
    this.setRegionTextureByRegionName("default");

    this.selectedDetailDef = new CalloutDefinition(lat, lon, POIDetailCallout, data);
    this.calloutManager.replaceCallouts([...this.pinDefs, this.selectedDetailDef]);
  }

  // Pin container callback
  onPinContainerClick(e) {
    if (!e.detail.data.hasTransfer) {
      return;
    }

    // TODO Rework lighting img hiding?
    this.lightingImg.style.opacity = 0;
    document.querySelectorAll(".poi-pin-wrapper").forEach(el => el.classList.remove("active"));
    setTimeout(() => {
      document.querySelectorAll(".poi-pin-wrapper").forEach(el => el.classList.add("hide"));
    }, 1300);
    this.gkview.animationController.animateLatLonAlt(e.detail.data.coordinates[1], e.detail.data.coordinates[0], -1, {
      duration: 2000,
      onComplete: () => {
        sendMessage(`DETAILS ${e.detail.data.name}`);

        if (this.isOuterNavigation) {
          window.location.hash = `#factory/${e.detail.data.name}`;
        } else {
          // window.location.hash = `#model-factory/${e.detail.data.name}`;

          // Restart model state
          setTimeout(() => {
            this.lightingImg.style.opacity = 1;
            document.querySelectorAll(".poi-pin-wrapper").forEach(el => {
              el.classList.remove("hide");
              el.classList.remove("active");
            });
            this.pointglobe.material.uniforms.uActiveCircleDiameter = 0;
            this.selectedDetailDef = null;
            this.calloutManager.replaceCallouts(this.pinDefs);
            this.gkview.animationController.animateLatLonAlt(
              e.detail.data.coordinates[1],
              e.detail.data.coordinates[0],
              4,
              {
                duration: 0
              }
            );
            this.gkview.ambientController.isEnabled = true;
            // Fix no rotating after stopping
            this.gkview.ambientController._ambientStrength = 1;
          }, 7000);
        }
      }
    });
  }

  onMessage = e => {
    let data;
    try {
      data = JSON.parse(e.data);
    } catch (err) {
      data = e.data;
    }

    const keys = [...(data ? Object.keys(data) : []), ...(data.value ? Object.keys(data.value) : [])];
    if (!keys.includes("Country") || !keys.includes("Region")) {
      return;
    }

    const REGION_BY_COUNTRY_MAP = {
      US: "AMERICAS",
      CN: "APJ",
      IN: "APJ",
      SG: "APJ",
      DE: "EMEA",
      FR: "EMEA",
      GB: "EMEA",
      NL: "EMEA"
    };

    const country = data?.Country || data?.value?.Country;
    const region = data?.Region || data?.value?.Region || REGION_BY_COUNTRY_MAP[country];

    const coordinates = COORDINATES_BY_REGION_MAP[region];

    if (coordinates) {
      this.gkview.animationController.animateLatLonAlt(coordinates[0], coordinates[1], 4, {
        duration: 1500,
        onComplete: () => {
          this.selectRegionByName(region, coordinates[0], coordinates[1]);
        }
      });
    } else {
      if (this.pointglobe) {
        this.selectRegionByName("NOCLICK");
      }
    }
  };

  setRegionTextureByRegionName = name => {
    const TEXTURE_BY_NAME_MAP = {
      AMERICAS: this.pointglobe.material.textures.americas,
      APJ: this.pointglobe.material.textures.apj,
      EMEA: this.pointglobe.material.textures.emea,
      default: this.pointglobe.material.textures.bgTexture
    };

    this.pointglobe.material.uniforms.uBgTexture = TEXTURE_BY_NAME_MAP[name] || TEXTURE_BY_NAME_MAP.default;
  };

  selectRegionByName = (name, lat, lon) => {
    // Deselect all pins
    document.querySelectorAll(".poi-pin-wrapper").forEach(el => el.classList.remove("active"));
    this.pointglobe.material.uniforms.uActiveCircleDiameter = 0;
    this.selectedDetailDef = null;
    this.calloutManager.replaceCallouts(this.pinDefs);

    this.gkview.ambientController.isEnabled = name === "NOCLICK";
    // Fix no rotating after stopping
    this.gkview.ambientController._ambientStrength = 1;

    setTimeout(() => {
      this.setRegionTextureByRegionName(name);
    }, 100);

    if (name !== "NOCLICK") {
      this.pointglobe.rippleAtLocation(lat, lon, {
        activeColor: globeParams.activeColor,
        duration: globeParams.rippleDuration,
        width: globeParams.rippleWidth,
        height: globeParams.rippleHeight,
        rippleColor: globeParams.rippleColor
      });
    }
  };

  tourTimeoutId;

  checkAndStartTour = e => {
    if (e.code === "KeyT") {
      this.goTour();
    } else if (e.code === "KeyA") {
      this.clickPin("Plant Atlanta");
    } else if (e.code === "KeyB") {
      this.clickPin("Plant Beijing");
    } else if (e.code === "KeyF") {
      this.clickPin("Plant Frankfurt");
    }
  };

  stopTour = () => {
    clearTimeout(this.tourTimeoutId);
  };

  addTourListeners = () => {
    window.addEventListener("keyup", this.stopTour);
    window.addEventListener("keyup", this.checkAndStartTour);
    window.addEventListener("pointerdown", this.stopTour);

    if (!this.isOuterNavigation) {
      window.addEventListener("message", this.stopTour);
    }
  };

  removeTourListeners = () => {
    this.stopTour();
    window.removeEventListener("keyup", this.stopTour);
    window.removeEventListener("keyup", this.checkAndStartTour);
    window.removeEventListener("pointerdown", this.stopTour);

    if (!this.isOuterNavigation) {
      window.removeEventListener("message", this.stopTour);
    }
  };

  clickRegion = regionName => {
    const coordinates = COORDINATES_BY_REGION_MAP[regionName];
    if (!coordinates) {
      return;
    }

    this.gkview.animationController.animateLatLonAlt(coordinates[0], coordinates[1], 4, {
      duration: 2000,
      onComplete: () => {
        sendMessage(regionName);
        this.selectRegionByName(regionName, coordinates[0], coordinates[1]);
      }
    });
  };

  clickPin = pinName => {
    const pinData = officesData.features.find(i => i.properties.name === pinName)?.properties;
    if (!pinData) {
      return;
    }
    const pin = document.querySelector(`#pin-${pinData.name.replace(/ /g, "")} .poi-pin`);
    this.gkview.animationController.animateLatLonAlt(pinData.coordinates[1], pinData.coordinates[0], 4, {
      duration: 2000,
      onComplete: () => {
        pin?.click();
      }
    });
  };

  goTour = (currentTourIndex = 0) => {
    const tourSteps = [
      ["AMERICAS", "region"],
      ["DC Seattle", "pin"],
      ["Plant Atlanta", "pin"],
      ["EMEA", "region"],
      ["DC Rotterdam", "pin"],
      ["Plant Frankfurt", "pin"],
      ["APJ", "region"],
      ["Plant Beijing", "pin"],
      ["DC Hong Kong", "pin"]
    ];

    const [name, type] = tourSteps[currentTourIndex];
    if (type === "region") {
      this.clickRegion(name);
    } else {
      this.clickPin(name);
    }

    this.tourTimeoutId = setTimeout(() => {
      this.goTour(currentTourIndex + 1 === tourSteps.length ? 0 : currentTourIndex + 1);
    }, TOUR_STEP_TIMEOUT);
  };

  destroy = () => {
    this.removeTourListeners();
    this.calloutContainer.removeEventListener("pinclick", this.onPinClick);
    this.calloutContainer.removeEventListener("pinContainerClick", this.onPinContainerClick);
    window.removeEventListener("message", this.onMessage);
    this.atmosphere = null;
    this.calloutManager.removeAllCallouts();
    this.calloutManager = null;
    this.pointglobe = null;
    this.gkview = null;
  };
}

export { POIGlobe };
