import React, { createRef, useEffect } from "react";
import classNames from "classnames";

import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "./OrbitControls.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
// @ts-ignore
import { GUI } from "three/examples/jsm/libs/dat.gui.module.js";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";

import { Loader } from "../Loader";

import { getHTMLElementFromReactComponent } from "../../utils/getHTMLElementFromReactComponent";

import { PinWithPopup } from "../PinWithPopup";

import { BLOOM_SCENE_LAYER, BLOOM_SCENE_LAYER_2, MaterialsProcessor } from "./utils";

import styles from "./styles.module.css";

interface IModelComponentProps {
  className?: string;
  config: IModelConfig;
  afterLoadProcess?: (
    scene: THREE.Scene,
    cb: () => void,
    camera: THREE.PerspectiveCamera,
    cameraCb: () => void,
    onNoZoneClickCb: () => void,
    onZoneClickCb: () => void
  ) => void;
}

interface IModelConfig {
  cameraFar: number;
  cameraNear: number;
  cameraPositionX: number;
  cameraPositionY: number;
  cameraPositionZ: number;
  controlsMaxDistance: number;
  controlsMinDistance: number;
  controlsTargetX: number;
  controlsTargetY: number;
  controlsTargetZ: number;
  isBloomEnabled: boolean;
  isGuiEnabled?: boolean;
  isDoubleBloomEnabled?: boolean;
  isLabelsEnabled: boolean;
  isStatsEnabled?: boolean;
  isOuterNavigation?: boolean;
  isShadowsEnabled: boolean;
  modelPath: string;
  pins?: Array<{
    position: {
      x: number;
      y: number;
      z: number;
    };
    props: {
      hasTransfer: boolean;
      hasValueBg?: boolean;
      id: string;
      info: string;
      status: string;
      title: string;
      value?: string;
    };
    onPopupClick?: (
      camera: THREE.PerspectiveCamera,
      controls: OrbitControls,
      scene: THREE.Scene,
      onNoZoneClickCb: () => void
    ) => void;
    onPinClick?: (scene: THREE.Scene) => void;
  }>;
  onPinDeselectClick?: () => void;
  onClick?: (names: Array<string>, scene: THREE.Scene, onNoZoneClickCb: () => void, onZoneClickCb: () => void) => void;
}

interface IModelProps extends IModelConfig {
  containerWrapper: HTMLDivElement;
  canvas: HTMLCanvasElement;
  afterLoadProcess?: (
    scene: THREE.Scene,
    cb: () => void,
    camera: THREE.PerspectiveCamera,
    cameraCb: () => void,
    onNoZoneClickCb: () => void,
    onZoneClickCb: () => void
  ) => void;
}

let modelsCache: any = {};

class ModelClass {
  camera!: THREE.PerspectiveCamera;
  clock!: THREE.Clock;
  controls!: OrbitControls;
  mixer!: THREE.AnimationMixer;
  renderer!: THREE.WebGLRenderer;
  scene!: THREE.Scene;
  stats!: Stats;
  labelsRenderer!: CSS2DRenderer;
  gui!: GUI;
  mouse!: THREE.Vector2;
  raycaster!: THREE.Raycaster;

  config: IModelConfig;
  canvas: HTMLCanvasElement;
  containerWrapper: HTMLDivElement;
  afterLoadProcess?: (
    scene: THREE.Scene,
    cb: () => void,
    camera: THREE.PerspectiveCamera,
    cameraCb: () => void,
    onNoZoneClickCb: () => void,
    onZoneClickCb: () => void
  ) => void;

  bloomLayer!: THREE.Layers;
  bloomLayer2!: THREE.Layers;
  bloomComposer!: EffectComposer;
  bloomComposer2!: EffectComposer;
  finalComposer!: EffectComposer;
  sceneBackgroundColor!: THREE.Color | any;
  sceneBackgroundDarkColor!: THREE.Color;
  requestAnimationId?: number;

  constructor({ canvas, containerWrapper, afterLoadProcess, ...config }: IModelProps) {
    this.config = config;

    this.canvas = canvas;
    this.containerWrapper = containerWrapper;
    this.afterLoadProcess = afterLoadProcess;

    this.addClock();
    this.addStats();
    this.addHelpers();
    this.addScene();
    this.addCamera();
    this.addRenderer();
    this.addMouseListeners();
    this.addControls();
    this.addLights();
    this.addComposers();
    this.addLabelsLayer();

    RectAreaLightUniformsLib.init();
    window.addEventListener("resize", this.onWindowResize);

    this.loadModel();

    this.addGui();

    this.render();
  }

  addGui = () => {
    if (!this.config.isGuiEnabled) {
      return;
    }

    this.gui = new GUI();
    this.gui.close();

    const ambLightFolder = this.gui.addFolder("Ambient light");
    // @ts-ignore
    ambLightFolder.add(window.ambLight, "intensity", 0, 1);

    const light1Folder = this.gui.addFolder("Directional light 1 (shadow)");
    // @ts-ignore
    light1Folder.add(window.dirLight.position, "x", -3000, 3000);
    // @ts-ignore
    light1Folder.add(window.dirLight.position, "y", 0, 3000);
    // @ts-ignore
    light1Folder.add(window.dirLight.position, "z", -3000, 3000);
    // @ts-ignore
    // light1Folder.open();

    const light2Folder = this.gui.addFolder("Directional light 2");
    // @ts-ignore
    light2Folder.add(window.dirLight2.position, "x", -3000, 3000);
    // @ts-ignore
    light2Folder.add(window.dirLight2.position, "y", 0, 3000);
    // @ts-ignore
    light2Folder.add(window.dirLight2.position, "z", -3000, 3000);
    // @ts-ignore
    light2Folder.add(window.dirLight2, "intensity", 0, 1);

    const light3Folder = this.gui.addFolder("Directional light 3");
    // @ts-ignore
    light3Folder.add(window.dirLight3.position, "x", -3000, 3000);
    // @ts-ignore
    light3Folder.add(window.dirLight3.position, "y", 0, 3000);
    // @ts-ignore
    light3Folder.add(window.dirLight3.position, "z", -3000, 3000);
    // @ts-ignore
    light3Folder.add(window.dirLight3, "intensity", 0, 1);

    // @ts-ignore
    if (window.bloom) {
      const bloom1Folder = this.gui.addFolder("Bloom 1");
      // @ts-ignore
      bloom1Folder.add(window.bloom, "strength", 0, 5);
      // @ts-ignore
      bloom1Folder.add(window.bloom, "radius", -3, 5);
    }

    // @ts-ignore
    if (window.bloom2) {
      const bloom2Folder = this.gui.addFolder("Bloom 2");
      // @ts-ignore
      bloom2Folder.add(window.bloom2, "strength", 0, 5);
      // @ts-ignore
      bloom2Folder.add(window.bloom2, "radius", -3, 5);
    }

    // const controllerFolder = this.gui.addFolder("Controls");
    // controllerFolder.add(this.controls.autoRotate, "enable", true, false);
    // controllerFolder.open();

    // const cameraFolder = this.gui.addFolder("Camera");
    // cameraFolder.add(camera.position, "z", 0, 10);
    // cameraFolder.open();
  };

  render = () => {
    if (this.stats) {
      this.stats.update();
    }

    if (this.controls) {
      this.controls.update();
    }

    if (this.labelsRenderer) {
      this.labelsRenderer.render(this.scene, this.camera);
    }

    const delta = this.clock.getDelta();
    if (this.mixer) {
      this.mixer.update(delta);
    }

    if (this.config.isBloomEnabled) {
      this.renderBloom(this.bloomComposer, this.bloomLayer);
      if (this.config.isDoubleBloomEnabled) {
        this.renderBloom(this.bloomComposer2, this.bloomLayer2);
      }
      this.finalComposer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }

    this.requestAnimationId = requestAnimationFrame(this.render);
  };

  onZoneClick = () => {
    this.disableControlsRotating();
  };

  onNoZoneClick = () => {
    this.enableControlsRotating();
    document.querySelectorAll(".poi-pin-wrapper.active").forEach(el => el.classList.remove("active"));
    if (this?.config?.onPinDeselectClick) {
      this.config.onPinDeselectClick();
    }
  };

  addLabelsLayer = () => {
    if (!this.config.isLabelsEnabled) {
      return;
    }

    this.config.pins?.forEach(pinConfig => {
      // @ts-ignore
      const pin = getHTMLElementFromReactComponent(PinWithPopup, { hasNoMargin: true, ...pinConfig.props });
      pin.querySelector(".poi-pin")?.addEventListener("pointerup", e => {
        e.stopPropagation();
        // @ts-ignore
        const wrapper = e.target.classList.contains("poi-pin") ? e.target.parentNode : e.target.parentNode.parentNode;

        wrapper.classList.add("active");

        this.disableControlsRotating();

        if (pinConfig.onPinClick && e.isTrusted) {
          pinConfig.onPinClick(this.scene);
        }

        document.querySelectorAll(".poi-pin-wrapper.active").forEach(el => {
          if (el === wrapper) {
            return;
          }

          el.classList.remove("active");
        });
      });

      pin.querySelector(".poi-callout-container")?.addEventListener("pointerup", e => {
        e.stopPropagation();
        if (pinConfig.onPopupClick) {
          pinConfig.onPopupClick(this.camera, this.controls, this.scene, this.onNoZoneClick);
        }
      });

      const pin2DObject = new CSS2DObject(pin);
      pin2DObject.position.set(pinConfig.position.x, pinConfig.position.y, pinConfig.position.z);
      this.scene.add(pin2DObject);
    });

    this.labelsRenderer = new CSS2DRenderer();
    this.labelsRenderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.labelsRenderer.domElement.classList.add(styles.labelsWrapper);
    this.containerWrapper.appendChild(this.labelsRenderer.domElement);
  };

  removeLabelsLayer = () => {
    if (!this.config.isLabelsEnabled) {
      return;
    }

    if (this?.labelsRenderer?.domElement) {
      this.labelsRenderer.domElement.remove();
    }
  };

  addCamera = () => {
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.containerWrapper.clientWidth / this.containerWrapper.clientHeight,
      this.config.cameraNear,
      this.config.cameraFar
    );
    this.camera.setFocalLength(300);
    this.camera.position.x = this.config.cameraPositionX;
    this.camera.position.y = this.config.cameraPositionY;
    this.camera.position.z = this.config.cameraPositionZ;
  };

  addScene = () => {
    this.scene = new THREE.Scene();
    // @ts-ignore
    window.scene = this.scene;
    this.sceneBackgroundColor = new THREE.Color("#E9E9EE");
    this.sceneBackgroundDarkColor = new THREE.Color("#000");
    this.scene.background = this.sceneBackgroundColor;
  };

  addClock = () => {
    this.clock = new THREE.Clock();
  };

  destroyGui = () => {
    if (this.gui) {
      this.gui.destroy();
    }
  };

  addStats = () => {
    if (!this.config.isStatsEnabled) {
      return;
    }

    // @ts-ignore
    this.stats = new Stats();
    this.containerWrapper.appendChild(this.stats.dom);
  };

  removeStats = () => {
    if (this.stats) {
      this.stats.dom.remove();
    }
  };

  addRenderer = () => {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas
      // logarithmicDepthBuffer: true,
      // antialias: true
    });
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    // this.renderer.outputEncoding = THREE.LinearEncoding;
    this.renderer.shadowMap.enabled = this.config.isShadowsEnabled;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  };

  controlsRestartTimeout!: NodeJS.Timeout;

  suspendControlsRotating = () => {
    if (!this.controls) {
      return;
    }

    this.controls.autoRotate = false;

    clearTimeout(this.controlsRestartTimeout);

    this.controlsRestartTimeout = setTimeout(() => {
      if (this.controls) {
        this.controls.autoRotate = true;
      }
    }, 1000 * 10);
  };

  enableControlsRotating = () => {
    if (!this.controls) {
      return;
    }

    this.controls.autoRotate = true;

    clearTimeout(this.controlsRestartTimeout);
  };

  disableControlsRotating = () => {
    if (!this.controls) {
      return;
    }

    this.controls.autoRotate = false;

    clearTimeout(this.controlsRestartTimeout);
  };

  addControls = () => {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(this.config.controlsTargetX, this.config.controlsTargetY, this.config.controlsTargetZ);

    this.controls.addEventListener("wasMovement", this.suspendControlsRotating);
  };

  setControlsParams = () => {
    if (!this.controls) {
      return;
    }

    this.controls.maxDistance = this.config.controlsMaxDistance;
    this.controls.minDistance = this.config.controlsMinDistance;
    this.controls.minPolarAngle = Math.PI / 4;
    this.controls.maxPolarAngle = Math.PI / 2.4;
    this.controls.rotateSpeed = 0.2;
    this.controls.autoRotate = true;
    this.controls.enableDamping = true;
    this.controls.autoRotateSpeed = 0.5;
    this.controls.update();
  };

  removeControls = () => {
    if (!this.controls) {
      return;
    }

    this.controls.dispose();
    clearTimeout(this.controlsRestartTimeout);
    this.controls.removeEventListener("wasMovement", this.suspendControlsRotating);
    // @ts-ignore
    this.controls = null;
  };

  addHelpers = () => {
    // @ts-ignore
    window.color = THREE.Color;
  };

  addLights = () => {
    {
      const ambLight = new THREE.AmbientLight("#fff", 0.6);
      this.scene.add(ambLight);
      // @ts-ignore
      window.ambLight = ambLight;
    }

    // {
    //   const hemiLight = new THREE.HemisphereLight("#c8daff", "#e5e5e5", 0.6);
    //   hemiLight.position.set(0, 50, 0);
    //   this.scene.add(hemiLight);
    //   // const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10);
    //   // this.scene.add(hemiLightHelper);
    // }
    //
    // dirLight1
    {
      // Intensity 0 because of ShadowMaterial floor
      const dirLight = new THREE.DirectionalLight("#ffffff", 0);
      dirLight.position.set(-250, 1100, -500);
      dirLight.position.multiplyScalar(2);
      this.scene.add(dirLight);
      // @ts-ignore
      window.dirLight = dirLight;

      dirLight.castShadow = true;

      dirLight.shadow.mapSize.width = 4096;
      dirLight.shadow.mapSize.height = 4096;

      const d = 1000;

      dirLight.shadow.camera.left = -d;
      dirLight.shadow.camera.right = d;
      dirLight.shadow.camera.top = d;
      dirLight.shadow.camera.bottom = -d;

      dirLight.shadow.camera.far = 10000;
      dirLight.shadow.bias = -0.0001;
      dirLight.shadow.normalBias = 0;

      // const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);
      // this.scene.add(dirLightHelper);
    }

    // dirLight2
    {
      const dirLight2 = new THREE.DirectionalLight("#ffffff", 0.48);
      dirLight2.position.set(-550, 300, -550);
      dirLight2.position.multiplyScalar(2);
      this.scene.add(dirLight2);
      // @ts-ignore
      window.dirLight2 = dirLight2;

      // const dirLightHelper = new THREE.DirectionalLightHelper(dirLight2, 10);
      // this.scene.add(dirLightHelper);
    }

    // dirLight3
    {
      const dirLight = new THREE.DirectionalLight("#ffffff", 0.48);
      dirLight.position.set(550, 300, 550);
      dirLight.position.multiplyScalar(2);
      this.scene.add(dirLight);
      // @ts-ignore
      window.dirLight3 = dirLight;

      // const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);
      // this.scene.add(dirLightHelper);
    }
  };

  addComposers = () => {
    if (!this.config.isBloomEnabled) {
      return;
    }

    this.bloomLayer = new THREE.Layers();
    this.bloomLayer.set(BLOOM_SCENE_LAYER);

    this.bloomLayer2 = new THREE.Layers();
    this.bloomLayer2.set(BLOOM_SCENE_LAYER_2);

    const renderPass = new RenderPass(this.scene, this.camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.2, 0, 0);
    // @ts-ignore
    window.bloom = bloomPass;

    this.bloomComposer = new EffectComposer(this.renderer);
    this.bloomComposer.renderToScreen = false;
    this.bloomComposer.addPass(renderPass);
    this.bloomComposer.addPass(bloomPass);

    const bloomPass2 = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.2, 0.2, 0);
    // @ts-ignore
    window.bloom2 = bloomPass2;

    this.bloomComposer2 = new EffectComposer(this.renderer);
    this.bloomComposer2.renderToScreen = false;
    this.bloomComposer2.addPass(renderPass);
    this.bloomComposer2.addPass(bloomPass2);

    const finalPass = new ShaderPass(
      new THREE.ShaderMaterial({
        uniforms: {
          baseTexture: { value: null },
          bloomTexture: { value: this.bloomComposer.renderTarget2.texture },
          bloomTexture2: { value: this.bloomComposer2.renderTarget2.texture }
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
          vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }
        `,
        fragmentShader: `
          uniform sampler2D baseTexture;
          uniform sampler2D bloomTexture;
          uniform sampler2D bloomTexture2;
          varying vec2 vUv;
          void main() {
            gl_FragColor = texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture2, vUv );
          }
        `,
        defines: {}
      }),
      "baseTexture"
    );
    finalPass.needsSwap = true;

    this.finalComposer = new EffectComposer(this.renderer);
    this.finalComposer.addPass(renderPass);
    this.finalComposer.addPass(finalPass);
  };

  darkMaterial = new THREE.MeshBasicMaterial({ color: "black" });
  materials: any = {};

  darkenNonBloomed = (bloomLayer: any) => (obj: any) => {
    if (obj.isMesh && !bloomLayer.test(obj.layers)) {
      this.materials[obj.uuid] = obj.material;
      obj.material = this.darkMaterial;
    }
  };

  restoreMaterial = (obj: any) => {
    if (this.materials[obj.uuid]) {
      obj.material = this.materials[obj.uuid];
      delete this.materials[obj.uuid];
    }
  };

  renderBloom = (effectComposer: any, bloomLayer: any) => {
    this.scene.background = this.sceneBackgroundDarkColor;
    this.scene.traverse(this.darkenNonBloomed(bloomLayer));
    effectComposer.render();
    this.scene.background = this.sceneBackgroundColor;
    this.scene.traverse(this.restoreMaterial);
  };

  loadModel = () => {
    const loader = new GLTFLoader();
    // loader.load("/models/factory/scene.gltf", gltf => {
    const processGltf = (gltf: any) => {
      // console.log("gltf", gltf);
      const model = gltf.scene;

      const runAnimations = () => {
        const animations = gltf.animations;
        if (animations.length) {
          this.mixer = new THREE.AnimationMixer(model);
          this.mixer.clipAction(animations[0]).play();
        }
      };

      const materialsProcessor = new MaterialsProcessor();
      this.scene.add(model);
      this.scene.traverse(materialsProcessor.processMaterial);

      if (this.afterLoadProcess) {
        this.afterLoadProcess(
          this.scene,
          () => {
            runAnimations();
            this.hideLoader();
          },
          this.camera,
          this.setControlsParams,
          this.onNoZoneClick,
          this.onZoneClick
        );
      } else {
        this.setControlsParams();
        runAnimations();
        this.hideLoader();
      }
    };

    if (modelsCache[this.config.modelPath]) {
      processGltf(modelsCache[this.config.modelPath]);
    } else {
      loader.load(this.config.modelPath, gltf => {
        if (!this?.config?.modelPath) {
          return;
        }

        modelsCache[this.config.modelPath] = gltf;
        processGltf(gltf);
      });
    }
  };

  hideLoader = () => {
    this.containerWrapper?.classList.add(styles.wrapper_loaded);
  };

  showLoader = () => {
    this.containerWrapper?.classList.remove(styles.wrapper_loaded);
  };

  onMouseMove = (event: any) => {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  onMouseClick = (e: PointerEvent) => {
    if (e.target !== this.canvas) {
      return;
    }

    if (!this.config.onClick) {
      this.onNoZoneClick();
      return;
    }
    // update the picking ray with the camera and mouse position
    this.raycaster.setFromCamera(this.mouse, this.camera);

    // calculate objects intersecting the picking ray
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    const names = intersects.map(intersect => intersect.object.name);
    this.config.onClick(names, this.scene, this.onNoZoneClick, this.onZoneClick);
  };

  onTouchStart = (event: any) => {
    this.onMouseMove(event.touches[0]);
  };

  addMouseListeners = () => {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    window.addEventListener("touchstart", this.onTouchStart);
    window.addEventListener("pointermove", this.onMouseMove);
    window.addEventListener("pointerup", this.onMouseClick);
  };

  removeMouseListeners = () => {
    // @ts-ignore
    this.raycaster = null;
    // @ts-ignore
    this.mouse = null;

    window.removeEventListener("touchstart", this.onTouchStart);
    window.removeEventListener("pointermove", this.onMouseMove);
    window.removeEventListener("pointerup", this.onMouseClick);
  };

  onWindowResize = () => {
    const height = this.containerWrapper.clientHeight;
    const width = this.containerWrapper.clientWidth;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    if (this.labelsRenderer) {
      this.labelsRenderer.setSize(width, height);
    }
  };

  destroy = () => {
    if (this.requestAnimationId) {
      cancelAnimationFrame(this.requestAnimationId);
    }

    this.removeStats();
    this.removeLabelsLayer();

    this.destroyGui();

    // @ts-ignore
    this.camera = null;
    // @ts-ignore
    this.clock = null;
    this.removeControls();
    // @ts-ignore
    this.mixer = null;
    // @ts-ignore
    this.renderer = null;
    // @ts-ignore
    this.scene = null;
    // @ts-ignore
    this.stats = null;
    // @ts-ignore
    this.labelsRenderer = null;
    // @ts-ignore
    this.config = null;
    // @ts-ignore
    this.canvas = null;
    this.showLoader();
    // @ts-ignore
    this.containerWrapper = null;
    // @ts-ignore
    this.bloomLayer = null;
    // @ts-ignore
    this.bloomLayer2 = null;
    // @ts-ignore
    this.bloomComposer = null;
    // @ts-ignore
    this.bloomComposer2 = null;
    // @ts-ignore
    this.finalComposer = null;

    this.removeMouseListeners();

    window.removeEventListener("resize", this.onWindowResize);
  };
}

export const Model = ({ className, config, afterLoadProcess }: IModelComponentProps) => {
  const ref = createRef<HTMLCanvasElement>();
  const refLoader = createRef<HTMLDivElement>();
  const refWrapper = createRef<HTMLDivElement>();

  useEffect(() => {
    if (!ref?.current || !refWrapper?.current) {
      return;
    }

    let model: any;
    // Fix strange bug with sap rerender page
    setTimeout(() => {
      if (!ref?.current || !refWrapper?.current) {
        return;
      }

      model = new ModelClass({
        canvas: ref.current,
        containerWrapper: refWrapper.current,
        afterLoadProcess,
        ...config
      });
    }, 100);

    return () => {
      if (model) {
        model.destroy();
      }
    };
  }, [config, ref, refLoader, refWrapper]);

  return (
    <div className={classNames(styles.wrapper, className)} ref={refWrapper}>
      <canvas className={styles.canvas} ref={ref} />
      <div className={styles.loader}>
        <Loader isAbsolute />
      </div>
    </div>
  );
};
