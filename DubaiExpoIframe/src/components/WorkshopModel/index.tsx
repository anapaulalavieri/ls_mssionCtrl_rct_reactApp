import React, { useEffect } from "react";
import * as THREE from "three";

import { sendMessage } from "../../utils/sendMessage";
import { setLoaded } from "../../utils/setLoaded";

import { Model } from "../Model";
import { animateLightIntensity } from "../Model/utils";

import { MACHINE_NAME_BY_RESID_MAP } from "../../App";

interface IWorkshopModelProps {
  className?: string;
  data: { [key: string]: [string, string] };
  place: string;
  line?: string;
}

const POSITION_BY_AREA_NAME = {
  "Machine Area 1_1": { x: 92, y: 26, z: 6 },
  "Machine Area 1_2": { x: 92, y: 26, z: -90 },
  "Machine Area 1_3": { x: 92, y: 26, z: -195 },
  "Machine Area 2_1": { x: -109, y: 26, z: -167 },
  "Machine Area 2_2": { x: -109, y: 26, z: -71 },
  "Machine Area 2_3": { x: -109, y: 26, z: 31 },
  Assembly: { x: 96, y: 26, z: 223 },
  Packaging: { x: -33, y: 26, z: 223 }
};

const AREAS_BY_NAME = {
  "Machine Area 1": {
    height: 50,
    originalAreaNames: {
      "Plant Frankfurt": "Machining Area 1",
      "Plant Beijing": "Machining Area 3",
      "Plant Atlanta": "Machining Area 5"
    },
    pinsIds: ["MachineArea1_1", "MachineArea1_2", "MachineArea1_3"],
    width: 280,
    x: 92,
    z: -81
  },
  "Machine Area 2": {
    height: 50,
    originalAreaNames: {
      "Plant Frankfurt": "Machining Area 2",
      "Plant Beijing": "Machining Area 4",
      "Plant Atlanta": "Machining Area 6"
    },
    pinsIds: ["MachineArea2_1", "MachineArea2_2", "MachineArea2_3"],
    width: 280,
    x: -108,
    z: -81
  },
  Assembly: {
    height: 80,
    originalAreaNames: {
      "Plant Frankfurt": "Assembly Line 1",
      "Plant Beijing": "Assembly Line 2",
      "Plant Atlanta": "Assembly Line 3"
    },
    pinsIds: ["Assembly"],
    width: 220,
    x: 79,
    z: 229
  },
  Packaging: {
    height: 90,
    originalAreaNames: {
      "Plant Frankfurt": "Packaging Line 1",
      "Plant Beijing": "Packaging Line 2",
      "Plant Atlanta": "Packaging Line 3"
    },
    pinsIds: ["Packaging"],
    width: 220,
    x: -10,
    z: 229
  }
};

const Link = ({ href, title }: { href: string; title: string }) => (
  <a
    href={href}
    target="_blank"
    ref="noreferrer"
    style={{ display: "block", fontSize: "13px", paddingTop: "6px", whiteSpace: "nowrap" }}
  >
    {title}
    <svg
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginLeft: "4px" }}
    >
      <path
        d="M1 4.50009H7.30096M7.30096 4.50009L4.1503 1.47363M7.30096 4.50009L4.1503 7.52626"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>
);

const Machine_Text={
"Machine 23":(
<h4 style={{color:"red", marginBottom:"0px", marginTop:"5px", fontWeight:"normal" }}>Failure Probability — 40%</h4>
),
"Machine 24":(
<h4 style={{color:"red", marginBottom:"0px", marginTop:"5px", fontWeight:"normal" }}>Failure Probability — 45%</h4>
),
"Machine 25":(
<h4 style={{color:"red", marginBottom:"0px", marginTop:"5px", fontWeight:"normal" }}>Failure Probability — 45%</h4>
)
};

const MACHINE_INFO_BY_NAME = {
  "Machine 2": (
    <Link
      href="https://my304266.scmibp1.ondemand.com/ui#IBPDashboard-manage&/dashboard/FA163E2C70811EDBBE98F9303B2660BE/1628598831736"
      title="Alternate optimizer evaluation"
    />
  ),
  "Machine 23": (
    <Link
      href="https://sapinnovation-accenture-com.iam-pr.cfapps.eu10.hana.ondemand.com/cp.portal/site#ainequipment-display?sap-ui-app-id-hint=sap.iot.ain.manageequipments&/0D83A82A73474E0E9039CB692F81058F"
      title="Intelligent Asset Management"
    />
  ),
  "Machine 24": (
    <Link
      href="https://sapinnovation-accenture-com.iam-pr.cfapps.eu10.hana.ondemand.com/cp.portal/site#ainequipment-display?sap-ui-app-id-hint=sap.iot.ain.manageequipments&/CCFF7093549B45FB81C8D59E8681748F"
      title="Intelligent Asset Management"
    />
  ),
  "Machine 25": (
    <Link
      href="https://sapinnovation-accenture-com.iam-pr.cfapps.eu10.hana.ondemand.com/cp.portal/site#ainequipment-display?sap-ui-app-id-=&/1E647BC96688406DB63B10F9E9E0CE3D"
      title="Intelligent Asset Management"
    />
  ),
 "Machine 28": (
    <Link
      href="https://sapinnovation-accenture-com.iam-pr.cfapps.eu10.hana.ondemand.com/cp.portal/site#ainequipment-display?sap-ui-app-id-hint=sap.iot.ain.manageequipments&/380E573E74EF4681A5727D56240A8E94"
      title="Intelligent Asset Management"
    />
  ),
"Machine 29": (
    <Link
      href="https://sapinnovation-accenture-com.iam-pr.cfapps.eu10.hana.ondemand.com/cp.portal/site#ainequipment-display?sap-ui-app-id-hint=sap.iot.ain.manageequipments&/7B7CAC23E7D543A99C5FF4F59B6D4773"
      title="Intelligent Asset Management"
    />
  )


};

const activeAreas: { [key: string]: boolean } = {};
const animationFramesIds: { [key: string]: number } = {};

const ENABLED_INTENSITY = 1;
const DISABLED_INTENSITY = 0;
const DURATION = 1000;
const PROGRESS_STEP = DURATION / ENABLED_INTENSITY;
const ENABLED_SHADOW_INTENSITY = 0.1;
const SHADOW_PROGRESS_STEP = DURATION / ENABLED_SHADOW_INTENSITY;
const animateObjVisibility = (obj: any, shadowObj: any, enable: boolean, startParam?: number) => (time: number) => {
  const start = startParam || time;
  const progress = time - start;
  const opacity = enable
    ? Math.min(progress / PROGRESS_STEP, ENABLED_INTENSITY)
    : Math.max(ENABLED_INTENSITY - progress / PROGRESS_STEP, DISABLED_INTENSITY);

  // @ts-ignore
  [obj, ...obj.children].forEach(el => {
    // @ts-ignore
    el.material.opacity = opacity;
  });

  // @ts-ignore
  shadowObj.material.opacity = enable
    ? Math.min(progress / SHADOW_PROGRESS_STEP, ENABLED_SHADOW_INTENSITY)
    : Math.max(ENABLED_SHADOW_INTENSITY - progress / SHADOW_PROGRESS_STEP, DISABLED_INTENSITY);

  if (progress < DURATION) {
    requestAnimationFrame(animateObjVisibility(obj, shadowObj, enable, start));
  }
};

const onClick = (place: string) => (
  names: Array<string>,
  scene: THREE.Scene,
  isPinClicked?: boolean,
  onNoZoneClickCb?: () => void,
  onZoneClickCb?: () => void,
  disableMessageSending?: boolean
) => {
  // Deselect all active zones
  Object.entries(activeAreas).forEach(([areaName, isActive]) => {
    if (!isActive || names.includes(areaName)) {
      return;
    }

    const areaLightObj = scene.getObjectByName(`${areaName} light`);
    requestAnimationFrame(animateLightIntensity(areaLightObj, false));

    // @ts-ignore
    const areaConfig: any = AREAS_BY_NAME[areaName];
    // @ts-ignore
    areaConfig.pinsIds.forEach(pinId => {
      document.querySelector(`#${pinId}`)?.classList.remove("preselected");
    });

    activeAreas[areaName] = false;
  });

  let wasAreaClicked = false;
  const areasNames = Object.keys(AREAS_BY_NAME);
  areasNames.forEach(areaName => {
    if (!names.includes(areaName)) {
      return;
    }

    wasAreaClicked = true;

    if (!disableMessageSending && !isPinClicked) {
      sendMessage(
        `AreaDetails ${JSON.stringify({
          // @ts-ignore
          EXPLINE: AREAS_BY_NAME?.[areaName].originalAreaNames?.[place]
        })}`
      );
    }

    const areaLightObj = scene.getObjectByName(`${areaName} light`);

    if (!areaLightObj) {
      console.log(`${areaName} light was not found`);
      return;
    }

    requestAnimationFrame(animateLightIntensity(areaLightObj, true));
    activeAreas[areaName] = true;

    // @ts-ignore
    const areaConfig: any = AREAS_BY_NAME[areaName];
    // @ts-ignore
    areaConfig.pinsIds.forEach(pinId => {
      document.querySelector(`#${pinId}`)?.classList.add("preselected");
    });
  });

  if (wasAreaClicked) {
    if (!isPinClicked) {
      document.querySelectorAll(".poi-pin-wrapper.active").forEach(el => el.classList.remove("active"));
      onZoneClickCb && onZoneClickCb();
    }
  } else {
    onNoZoneClickCb && onNoZoneClickCb();
  }
};

const messageListener = (
  place: string,
  scene: THREE.Scene,
  onNoZoneClickCb?: () => void,
  onZoneClickCb?: () => void
) => (e: MessageEvent) => {
  if (!e.data || !e?.data?.includes) {
    return;
  }

  if (e?.data?.includes("AreaDetails ")) {
    const raw = e.data.replace("AreaDetails ", "");
    const json = JSON.parse(raw);
    // console.log(json);

    const { EXPLINE: zone } = json;

    if (zone === undefined) {
      return;
    }

    // @ts-ignore
    const [areaName] =
      Object.entries(AREAS_BY_NAME).find(([areaName, areaParams]) => {
        // @ts-ignore
        return areaParams.originalAreaNames[place] === zone;
      }) || [];

    // console.log(areaName);

    onClick(place)(areaName ? [areaName] : [], scene, false, onNoZoneClickCb, onZoneClickCb, true);
  } else if (e?.data?.includes("MachineDetails ")) {
    const raw = e.data.replace("MachineDetails ", "");
    const json = JSON.parse(raw);
    // console.log(json);

    const { RESDESCR: machine } = json;

    if (machine === undefined) {
      return;
    }

    // @ts-ignore
    const pinId = MACHINE_NAME_BY_RESID_MAP[machine]?.replace(/ /g, "");

    if (!pinId) {
      onClick(place)([], scene, false, onNoZoneClickCb, onZoneClickCb, true);
      return;
    }

    const pin = document.querySelector(`#${pinId} .poi-pin`);
    if (!pin) {
      return;
    }

    pin.dispatchEvent(new Event("pointerup"));
  }
};

let messList: any;

export const WorkshopModel = ({ className, data, place, line }: IWorkshopModelProps) => {
  useEffect(() => {
    return () => {
      Object.values(animationFramesIds).forEach(animationFramesId => {
        cancelAnimationFrame(animationFramesId);
      });
      // @ts-ignore
      if (messList) {
        // @ts-ignore
        window.removeEventListener("message", messList);
      }
    };
  }, []);

  const modelFolderPath = place === "Plant Atlanta" ? "./models/workshop2" : "./models/workshop";
  const modelPath = `${modelFolderPath}/workshop.gltf`;

  return (
    <Model
      className={className}
      config={{
        cameraFar: 15000,
        cameraNear: 1000,
        cameraPositionX: -6595,
        cameraPositionY: 1631,
        cameraPositionZ: 2088,
        controlsMaxDistance: 12000,
        controlsMinDistance: 2000,
        controlsTargetX: 0,
        controlsTargetY: 0,
        controlsTargetZ: 0,
        isBloomEnabled: false,
        isLabelsEnabled: true,
        isShadowsEnabled: true,
        modelPath,
        // @ts-ignore
        pins: Object.entries(data).reduce((acc, [areaName, [machineName, machineRawValue, machineAreaName]]) => {
          // @ts-ignore
          const position = POSITION_BY_AREA_NAME[areaName];

          if (!position) {
            return acc;
          }

          const machineValue = parseFloat(machineRawValue);
          return [
            ...acc,
            {
              position,
              props: {
                hasTransfer: false,
                hasValueBg: true,
                id: areaName.replace(/ /g, ""),
                info: Number.isFinite(machineValue) ? (
                  <>
                   Machine Availability Rate — {(machineValue * 100).toFixed(2)}%
                    {//@ts-ignore
                    Machine_Text[machineName]}
                    {// @ts-ignore
                    MACHINE_INFO_BY_NAME[machineName] || ""}
                  </>
                ) : (
                  ""
                ),
                status: machineValue < 0.8 ? "danger" : machineValue < 0.9 ? "warning" : "normal",
                title: machineName,
                value: Number.isFinite(machineValue) ? `${(machineValue * 100).toFixed(2)}%` : ""
              },
              onPinClick: (scene: THREE.Scene) => {
                sendMessage(
                  `MachineDetails ${JSON.stringify({
                    RESDESCR: machineName,
                    EXPLINE: machineAreaName
                  })}`
                );
                onClick(place)([areaName.replace(/_\d/, "")], scene, true);
              }
            }
          ];
        }, []),
        onPinDeselectClick: () => {
          sendMessage(`MACHINE NOCLICK`);
        },
        onClick: (names: Array<string>, scene: THREE.Scene, onNoZoneClickCb: () => void, onZoneClickCb: () => void) => {
          onClick(place)(names, scene, false, onNoZoneClickCb, onZoneClickCb);
        }
      }}
      afterLoadProcess={(scene: THREE.Scene, cb: () => void, camera, cameraCb, onNoZoneClickCb, onZoneClickCb) => {
        Object.entries(AREAS_BY_NAME).forEach(([areaName, areaParams]) => {
          {
            const areaGeometry = new THREE.PlaneGeometry(areaParams.width, areaParams.height);
            const areaMaterial = new THREE.MeshBasicMaterial({ color: "red" });
            const areaMesh = new THREE.Mesh(areaGeometry, areaMaterial);
            areaMesh.name = areaName;
            areaMesh.position.set(areaParams.x, 0.1, areaParams.z);
            areaMesh.rotation.x = THREE.MathUtils.degToRad(-90);
            areaMesh.rotation.z = THREE.MathUtils.degToRad(-90);
            areaMesh.visible = false;
            scene.add(areaMesh);
          }

          {
            const areaLight = new THREE.RectAreaLight("#9728d3", 0, areaParams.width + 5, areaParams.height + 5);
            areaLight.name = `${areaName} light`;
            areaLight.position.set(areaParams.x, 21, areaParams.z);
            areaLight.rotation.x = THREE.MathUtils.degToRad(-90);
            areaLight.rotation.z = THREE.MathUtils.degToRad(-90);
            areaLight.visible = false;
            scene.add(areaLight);
          }
        });

        const textureLoader = new THREE.TextureLoader();

        // TODO Add error handling
        Promise.all([
          new Promise<void>(resolve => {
            textureLoader.load(`${modelFolderPath}/scene.jpg`, sceneTexture => {
              const sceneObj = (scene.getObjectByName("Scene1") || scene.getObjectByName("Scene")) as THREE.Mesh;
              sceneTexture.flipY = false;
              sceneObj.material = new THREE.MeshStandardMaterial({
                // sceneObj.material = new THREE.MeshBasicMaterial({
                color: "#fff",
                map: sceneTexture,
                side: THREE.DoubleSide
              });
              sceneObj.castShadow = false;
              sceneObj.receiveShadow = false;
              resolve();
            });
          }),
          new Promise<void>(resolve => {
            textureLoader.load(`${modelFolderPath}/conveyor.jpg`, conveyorTexture => {
              conveyorTexture.flipY = false;
              const conveyorObject = scene.getObjectByName("Conveer") as THREE.Mesh;
              if (!conveyorObject) {
                console.log('Object "Conveer" not found');
                resolve();
                return;
              }

              conveyorObject.material = new THREE.MeshStandardMaterial({ color: "#fff", map: conveyorTexture });
              conveyorObject.castShadow = false;
              conveyorObject.receiveShadow = false;

              // Conveyor shadow-receiver
              {
                const shadowConveyorGeometry = new THREE.PlaneGeometry(156, 187);
                const shadowConveyorMaterial = new THREE.ShadowMaterial();
                shadowConveyorMaterial.opacity = 0.1;
                const shadowConveyorMesh = new THREE.Mesh(shadowConveyorGeometry, shadowConveyorMaterial);
                shadowConveyorMesh.rotation.x = THREE.MathUtils.degToRad(-90);
                shadowConveyorMesh.position.set(34, 7, 232);
                shadowConveyorMesh.receiveShadow = true;
                scene.add(shadowConveyorMesh);
              }

              resolve();
            });
          }),
          new Promise<void>(resolve => {
            textureLoader.load(`${modelFolderPath}/loader.jpg`, loaderTexture => {
              loaderTexture.flipY = false;
              const material = new THREE.MeshBasicMaterial({ color: "#fff", map: loaderTexture });

              ["LOADER_01", "LOADER_02", "LOADER_03", "LOADER_04", "LOADER_05"].forEach(name => {
                const loaderObject = scene.getObjectByName(name) as THREE.Mesh;
                if (!loaderObject) {
                  console.log(`Object "${name}" not found`);
                  return;
                }

                loaderObject.material = material;
                loaderObject.castShadow = true;
                loaderObject.receiveShadow = false;
              });
              resolve();
            });
          }),
          new Promise<void>(resolve => {
            textureLoader.load(`${modelFolderPath}/loader-part-grey-1.jpg`, loaderTexture => {
              loaderTexture.flipY = false;
              const material = new THREE.MeshBasicMaterial({ color: "#fff", map: loaderTexture });

              ["LOADER_01_GREY", "LOADER_02_GREY"].forEach(name => {
                const loaderObject = scene.getObjectByName(name) as THREE.Mesh;
                if (!loaderObject) {
                  console.log(`Object "${name}" not found`);
                  return;
                }

                loaderObject.material = material;
                loaderObject.castShadow = true;
                loaderObject.receiveShadow = false;
              });

              resolve();
            });
          }),
          new Promise<void>(resolve => {
            textureLoader.load(`${modelFolderPath}/loader-part-grey-2.jpg`, loaderTexture => {
              loaderTexture.flipY = false;
              const material = new THREE.MeshBasicMaterial({ color: "#fff", map: loaderTexture });

              ["LOADER_03_GREY", "LOADER_04_GREY", "LOADER_05_GREY"].forEach(name => {
                const loaderObject = scene.getObjectByName(name) as THREE.Mesh;
                if (!loaderObject) {
                  console.log(`Object "${name}" not found`);
                  return;
                }

                loaderObject.material = material;
                loaderObject.castShadow = true;
                loaderObject.receiveShadow = false;
              });

              resolve();
            });
          }),
          new Promise<void>(resolve => {
            textureLoader.load(`${modelFolderPath}/loader-part-purple.jpg`, loaderTexture => {
              loaderTexture.flipY = false;
              const material = new THREE.MeshBasicMaterial({ color: "#fff", map: loaderTexture });

              [
                "LOADER_01_PURPLE",
                "LOADER_02_PURPLE",
                "LOADER_03_PURPLE",
                "LOADER_04_PURPLE",
                "LOADER_05_PURPLE"
              ].forEach(name => {
                const loaderObject = scene.getObjectByName(name) as THREE.Mesh;
                if (!loaderObject) {
                  console.log(`Object "${name}" not found`);
                  return;
                }

                loaderObject.material = material;
                loaderObject.castShadow = true;
                loaderObject.receiveShadow = false;
              });

              resolve();
            });
          }),
          new Promise<void>(resolve => {
            textureLoader.load(`${modelFolderPath}/machine-part-1.jpg`, machinePartTexture => {
              machinePartTexture.flipY = false;
              const machinePartObject = (scene.getObjectByName("Det_01") ||
                scene.getObjectByName("machine-part-1")) as THREE.Mesh;
              if (!machinePartObject) {
                console.log('Object "Det_01" not found');
                resolve();
                return;
              }

              machinePartObject.material = new THREE.MeshBasicMaterial({ color: "#fff", map: machinePartTexture });
              machinePartObject.castShadow = false;
              machinePartObject.receiveShadow = false;
              resolve();
            });
          }),
          new Promise<void>(resolve => {
            textureLoader.load(`${modelFolderPath}/machine-part-2.jpg`, machinePartTexture => {
              machinePartTexture.flipY = false;
              const machinePartObject = (scene.getObjectByName("Det_02") ||
                scene.getObjectByName("machine-part-2")) as THREE.Mesh;
              if (!machinePartObject) {
                console.log('Object "Det_02" not found');
                resolve();
                return;
              }

              machinePartObject.material = new THREE.MeshBasicMaterial({ color: "#fff", map: machinePartTexture });
              machinePartObject.castShadow = false;
              machinePartObject.receiveShadow = false;
              resolve();
            });
          }),
          new Promise<void>(resolve => {
            textureLoader.load(`${modelFolderPath}/floor.jpg`, floorTexture => {
              floorTexture.flipY = false;

              const floorObj = scene.getObjectByName("Floor") as THREE.Mesh;
              if (!floorObj) {
                console.log('Object "Floor" not found');
              } else {
                floorObj.material = new THREE.MeshStandardMaterial({ color: "#fff", map: floorTexture });
              }

              // Floor shadow-receiver
              {
                const shadowFloorGeometry = new THREE.PlaneGeometry(700, 800);
                // const shadowFloorMaterial = new THREE.MeshBasicMaterial({ color: "blue" });
                const shadowFloorMaterial = new THREE.ShadowMaterial();
                shadowFloorMaterial.opacity = 0.1;
                const shadowFloorMesh = new THREE.Mesh(shadowFloorGeometry, shadowFloorMaterial);
                shadowFloorMesh.position.z = 50;
                shadowFloorMesh.rotation.x = THREE.MathUtils.degToRad(-90);
                shadowFloorMesh.position.y = 0.01;
                shadowFloorMesh.receiveShadow = true;
                scene.add(shadowFloorMesh);
              }

              // Floor-background
              {
                const planeGeometry = new THREE.PlaneGeometry(6000, 6000);
                const planeMaterial = new THREE.MeshStandardMaterial({ color: "#e2e5e9" });
                const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
                planeMesh.rotation.x = THREE.MathUtils.degToRad(-90);
                planeMesh.position.y = -0.01;
                scene.add(planeMesh);
              }

              resolve();
            });
          })
        ])
          .then(() => {
            [
              {
                name: "LOADER_01",
                shadow: {
                  x: -200,
                  z: 590,
                  height: 280,
                  width: 200
                },
                visiblePoint: 550,
                visibleReverse: false
              },
              {
                name: "LOADER_03",
                shadow: {
                  x: -200,
                  z: -490,
                  height: 280,
                  width: 200
                },
                visiblePoint: -480,
                visibleReverse: true
              }
            ].forEach(params => {
              const obj = scene.getObjectByName(params.name) as THREE.Mesh;
              if (!obj) {
                console.log(`Object "${params.name}" was not found`);
                return;
              }

              // Floor shadow-receiver
              const shadowFloorGeometry = new THREE.PlaneGeometry(params.shadow.width, params.shadow.height);
              // const shadowFloorMaterial = new THREE.MeshBasicMaterial({ color: "red" });
              const shadowFloorMaterial = new THREE.ShadowMaterial();
              shadowFloorMaterial.opacity = 0;
              const shadowFloorMesh = new THREE.Mesh(shadowFloorGeometry, shadowFloorMaterial);
              shadowFloorMesh.rotation.x = THREE.MathUtils.degToRad(-90);
              shadowFloorMesh.position.x = params.shadow.x;
              shadowFloorMesh.position.y = 0.01;
              shadowFloorMesh.position.z = params.shadow.z;
              shadowFloorMesh.receiveShadow = true;
              scene.add(shadowFloorMesh);

              [obj, ...obj.children].forEach(el => {
                // @ts-ignore
                if (!el.material) {
                  return;
                }
                // @ts-ignore
                el.material = el.material.clone();
                // @ts-ignore
                el.material.transparent = true;
                // @ts-ignore
                el.material.opacity = 0;
              });

              let isVisible = false;
              const checkPosition = (el: any, t: number) => () => {
                const currentPosition = Math.round(el.position.z);

                if (params.visibleReverse) {
                  if (currentPosition > params.visiblePoint && !isVisible) {
                    isVisible = true;
                    requestAnimationFrame(animateObjVisibility(el, shadowFloorMesh, true));
                  } else if (currentPosition < params.visiblePoint && isVisible) {
                    isVisible = false;
                    requestAnimationFrame(animateObjVisibility(el, shadowFloorMesh, false));
                  }
                } else {
                  if (currentPosition < params.visiblePoint && !isVisible) {
                    isVisible = true;
                    requestAnimationFrame(animateObjVisibility(el, shadowFloorMesh, true));
                  } else if (currentPosition > params.visiblePoint && isVisible) {
                    isVisible = false;
                    requestAnimationFrame(animateObjVisibility(el, shadowFloorMesh, false));
                  }
                }

                animationFramesIds[params.name] = requestAnimationFrame(checkPosition(el, t));
              };

              checkPosition(obj, Math.random())();
            });
          })
          .then(() => {
            // TODO Rework message listener
            messList = messageListener(place, scene, onNoZoneClickCb, onZoneClickCb);

            window.addEventListener("message", messList);
          })
          .then(() => {
            const cameraAnimation = scene.getObjectByName("Camera");
            if (!cameraAnimation) {
              setLoaded();
              cb();
              cameraCb();
              return;
            }

            let stillAnimated = true;
            const syncCameraWithAnimation = () => {
              camera.position.set(
                cameraAnimation.position.x * 12,
                cameraAnimation.position.y * 10,
                cameraAnimation.position.z
              );
              camera.rotation.set(cameraAnimation.rotation.x, cameraAnimation.rotation.y, cameraAnimation.rotation.z);
            };

            const animateCamera = () => {
              syncCameraWithAnimation();

              if (stillAnimated) {
                requestAnimationFrame(animateCamera);
              } else {
                if (line) {
                  const [areaName] =
                    Object.entries(AREAS_BY_NAME).find(([areaName, areaParams]) => {
                      // @ts-ignore
                      return areaParams.originalAreaNames[place] === line;
                    }) || [];
                  if (!areaName) {
                    return;
                  }

                  onClick(place)([areaName], scene, false, onNoZoneClickCb, onZoneClickCb, true);
                }
              }
            };

            syncCameraWithAnimation();
            setLoaded();
            cb();
            requestAnimationFrame(animateCamera);

            setTimeout(() => {
              stillAnimated = false;
              cameraCb();
            }, 4000);
          })
          .catch(() => {
            setLoaded();
            cb();
            cameraCb();
          });
      }}
    />
  );
};

export const WorkshopModelMemo = React.memo(WorkshopModel);
