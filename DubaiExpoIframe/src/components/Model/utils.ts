import * as THREE from "three";

export const BLOOM_SCENE_LAYER = 1;
export const BLOOM_SCENE_LAYER_2 = 2;

export const COLORS = {
  BG: "#E9E9EE",
  DARK: "#595959",
  LIGHT: "#ebebeb",
  NEON: "#ffffff",
  PRIMARY: "#9728d3",
  SECONDARY: "#01aed6",
  PAPERBOARD: "#e6c18a",
  WINDOW: "#ffffff"
};

export class MaterialsProcessor {
  materialBG: THREE.Material;
  materialDark: THREE.Material;
  materialLight: THREE.Material;
  materialNeon: THREE.Material;
  materialPaperboard: THREE.Material;
  materialPrimary: THREE.Material;
  materialSecondary: THREE.Material;
  materialWindow: THREE.Material;

  constructor() {
    this.materialBG = new THREE.MeshLambertMaterial({ color: COLORS.LIGHT });
    this.materialDark = this.createCommonMaterial(COLORS.DARK);
    this.materialLight = this.createCommonMaterial(COLORS.LIGHT);
    this.materialNeon = new THREE.MeshBasicMaterial({ color: COLORS.NEON });
    this.materialPaperboard = this.createCommonMaterial(COLORS.PAPERBOARD);
    this.materialPrimary = this.createCommonMaterial(COLORS.PRIMARY);
    this.materialSecondary = this.createCommonMaterial(COLORS.SECONDARY);
    this.materialWindow = new THREE.MeshBasicMaterial({ color: COLORS.WINDOW });
  }

  createCommonMaterial = (color: string) => {
    return new THREE.MeshStandardMaterial({ color });
  };

  processMaterial = (obj: any) => {
    const NAMES_TO_MATERIAL_MAP = [
      {
        filter: (name: string) => name === "floor" || name === "plane" || name === "scene" || name === "conveer",
        process: (obj: THREE.Mesh) => {
          // obj.scale.set(1.5, 1, 1.5);
          // obj.material = this.materialBG;
          // obj.receiveShadow = true;
        }
      },
      {
        filter: (name: string) => name.includes("yellow"),
        process: (obj: THREE.Mesh) => {
          obj.material = this.materialPaperboard;
          obj.castShadow = true;
          obj.receiveShadow = true;
        }
      },
      {
        filter: (name: string) => name.includes("grey"),
        process: (obj: THREE.Mesh) => {
          obj.material = this.materialDark;
          obj.castShadow = true;
          obj.receiveShadow = true;
        }
      },
      {
        filter: (name: string) =>
          name.includes("blue") || name.includes("house_details_09") || name.includes("tube_details"),
        process: (obj: THREE.Mesh) => {
          obj.material = this.materialSecondary;
          obj.castShadow = true;
          obj.receiveShadow = true;
        }
      },
      {
        filter: (name: string) => name.includes("purple") || name.includes("sweep"),
        process: (obj: THREE.Mesh) => {
          obj.material = this.materialPrimary;
          obj.castShadow = true;
          obj.receiveShadow = true;
        }
      },
      {
        filter: (name: string) => name.includes("light"),
        process: (obj: THREE.Mesh) => {
          obj.material = this.materialNeon;
          obj.layers.enable(BLOOM_SCENE_LAYER);
        }
      },
      {
        filter: (name: string) => name.includes("window") || name.includes("door"),
        process: (obj: THREE.Mesh) => {
          obj.material = this.materialWindow;
          obj.layers.enable(BLOOM_SCENE_LAYER_2);
        }
      },
      // Default
      {
        filter: (name: string) => name,
        process: (obj: THREE.Mesh) => {
          obj.material = this.materialLight;
          obj.castShadow = true;
          obj.receiveShadow = true;
        }
      }
    ];

    if (!obj.isMesh) {
      return;
    }

    const { process } = NAMES_TO_MATERIAL_MAP.find(({ filter }) => filter(obj.name.toLowerCase())) || {};
    if (process) {
      process(obj);
    } else {
      console.log("No material process found for", obj.name, obj);
    }
    // console.log(obj.name);

    // obj.material.side = THREE.DoubleSide;
    // obj.castShadow = true;
    // obj.receiveShadow = true;
    if (obj.name.toLowerCase().includes("loader__area")) {
      obj.material.side = THREE.DoubleSide;
    }
  };
}

export const animateLightIntensity = (lightObj: any, enable: boolean, startParam?: number) => (time: number) => {
  const ENABLED_INTENSITY = 0.3;
  const DISABLED_INTENSITY = 0;
  const DURATION = 500;
  const PROGRESS_STEP = DURATION / ENABLED_INTENSITY;
  if (
    !startParam &&
    ((enable && lightObj.intensity === ENABLED_INTENSITY) || (!enable && lightObj.intensity === DISABLED_INTENSITY))
  ) {
    return;
  }

  if (!startParam) {
    lightObj.visible = true;
  }

  const start = startParam || time;
  const progress = time - start;
  if (enable) {
    lightObj.intensity = Math.min(progress / PROGRESS_STEP, ENABLED_INTENSITY);
  } else {
    lightObj.intensity = Math.max(ENABLED_INTENSITY - progress / PROGRESS_STEP, DISABLED_INTENSITY);

    if (lightObj.intensity === DISABLED_INTENSITY) {
      lightObj.visible = false;
    }
  }

  if (progress < DURATION) {
    requestAnimationFrame(animateLightIntensity(lightObj, enable, start));
  }
};
