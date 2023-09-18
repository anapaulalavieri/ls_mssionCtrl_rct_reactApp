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

const PINS = [
  // {
  //   position: {
  //     x: -128,
  //     y: 16,
  //     z: 73,
  //   },
  //   props: {
  //     hasTransfer: false,
  //     id: "StagingAreaPin",
  //     info: "",
  //     status: "normal",
  //     title: "Staging Area",
  //   },
  // },
  // {
  //   position: {
  //     x: 103,
  //     y: 32,
  //     z: -69,
  //   },
  //   props: {
  //     hasTransfer: false,
  //     id: "ShippingAreaPin",
  //     info: "",
  //     status: "normal",
  //     title: "Shipping Area",
  //   },
  // },
  // {
  //   position: {
  //     x: 103,
  //     y: 20,
  //     z: 115,
  //   },
  //   props: {
  //     hasTransfer: false,
  //     id: "OutboundDocksPin",
  //     info: "",
  //     status: "normal",
  //     title: "Outbound Docks",
  //   },
  // },
  // {
  //   position: {
  //     x: 34,
  //     y: 23,
  //     z: -26,
  //   },
  //   props: {
  //     hasTransfer: false,
  //     id: "PackagingAreaPin",
  //     info: "",
  //     status: "normal",
  //     title: "Packaging Area",
  //   },
  // },
  // {
  //   position: {
  //     x: -131,
  //     y: 54,
  //     z: -70,
  //   },
  //   props: {
  //     hasTransfer: false,
  //     id: "StorageAreaPin",
  //     info: "",
  //     status: "normal",
  //     title: "Storage Area",
  //   },
  // },
  {
    position: {
      x: 130,
      y: 28,
      z: 19,
    },
    props: {
      hasTransfer: false,
      id: "RoboticArmPin",
      // @ts-ignore
      info: (
        <>
          Failure Probability - 40  %
          <Link
            href="https://sapinnovation-accenture-com.iam-pr.cfapps.eu10.hana.ondemand.com/cp.portal/site#ainequipment-display?sap-ui-app-id-hint=sap.iot.ain.manageequipments&/659E500FCE494494B9684BA71518D936"
            title="Intelligent Asset Management"
          />
        </>
      ),
      status: "danger",
      title: "Robotic Arm",
    },
  },
];

const AREAS_BY_NAME: {[key: string]: {
    height: number,
    originalAreaNames: {[key: string]: string}
    pinsIds: Array<string>,
    width: number,
    x: number,
    z: number,
  }} = {
  // "Shipping Area": {
  //   height: 84,
  //   originalAreaNames: {
  //     "Plant Frankfurt": "Shipping Area",
  //     "Plant Beijing": "Shipping Area",
  //     "Plant Atlanta": "Shipping Area",
  //   },
  //   pinsIds: ["ShippingAreaPin"],
  //   width: 136,
  //   x: 106,
  //   z: -70,
  // },
  // "Storage Area": {
  //   height: 74,
  //   originalAreaNames: {
  //     "Plant Frankfurt": "Storage Area",
  //     "Plant Beijing": "Storage Area",
  //     "Plant Atlanta": "Storage Area",
  //   },
  //   pinsIds: ["StorageAreaPin"],
  //   width: 136,
  //   x: -130,
  //   z: -70,
  // },
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
  [obj, ...obj.children].forEach((el) => {
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

const onClick =
  (place: string) =>
  (
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
      areaConfig.pinsIds.forEach((pinId) => {
        document.querySelector(`#${pinId}`)?.classList.remove("active");
      });

      activeAreas[areaName] = false;
    });

    let wasAreaClicked = false;
    const areasNames = Object.keys(AREAS_BY_NAME);
    areasNames.forEach((areaName) => {
      if (!names.includes(areaName)) {
        return;
      }

      wasAreaClicked = true;

      if (!disableMessageSending && !isPinClicked) {
        sendMessage(
          `AreaDetails ${JSON.stringify({
            // @ts-ignore
            EXPLINE: AREAS_BY_NAME?.[areaName].originalAreaNames?.[place],
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
      areaConfig.pinsIds.forEach((pinId) => {
        setTimeout(() => {
          document.querySelector(`#${pinId}`)?.classList.add("active");
        }, 100);
      });
    });

    if (wasAreaClicked) {
      if (!isPinClicked) {
        document.querySelectorAll(".poi-pin-wrapper.active").forEach((el) => el.classList.remove("active"));
        onZoneClickCb && onZoneClickCb();
      }
    } else {
      onNoZoneClickCb && onNoZoneClickCb();
    }
  };

const messageListener =
  (place: string, scene: THREE.Scene, onNoZoneClickCb?: () => void, onZoneClickCb?: () => void) =>
  (e: MessageEvent) => {
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

export const WarehouseModel = ({ className, data, place, line }: IWorkshopModelProps) => {
  useEffect(() => {
    return () => {
      Object.values(animationFramesIds).forEach((animationFramesId) => {
        cancelAnimationFrame(animationFramesId);
      });
      // @ts-ignore
      if (messList) {
        // @ts-ignore
        window.removeEventListener("message", messList);
      }
    };
  }, []);

  const modelFolderPath = "/models/warehouse";
  const modelPath = `${modelFolderPath}/warehouse.gltf`;

  return (
    <Model
      className={className}
      config={{
        cameraFar: 15000,
        cameraNear: 1000,
        cameraPositionY: 1631,
        cameraPositionX: -6595,
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
        pins: PINS.map((pin) => ({
          ...pin,
          onPinClick: (scene: THREE.Scene) => {
            sendMessage(`PinDetails ${pin.props.id}`);
            onClick(place)([pin.props.title], scene, true);
          },
        })),
        onPinDeselectClick: () => {
          sendMessage(`MACHINE NOCLICK`);
        },
        onClick: (names: Array<string>, scene: THREE.Scene, onNoZoneClickCb: () => void, onZoneClickCb: () => void) => {
          onClick(place)(names, scene, false, onNoZoneClickCb, onZoneClickCb);
        },
      }}
      afterLoadProcess={(scene: THREE.Scene, cb: () => void, camera, cameraCb, onNoZoneClickCb, onZoneClickCb) => {
        if (Object.keys(AREAS_BY_NAME).length) {
          Object.entries(AREAS_BY_NAME).forEach(([areaName, areaParams]) => {
            {
              const areaGeometry = new THREE.PlaneGeometry(areaParams.width, areaParams.height);
              const areaMaterial = new THREE.MeshBasicMaterial({color: "red"});
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
        }

        const textureLoader = new THREE.TextureLoader();

        // TODO Add error handling
        Promise.all([
          ...[
            ["conveyor", "Conveer"],
            ["box-green", "Box_green"],
            ["box-yellow", "Box_yellow"],
            ["tools-01", "Tools_01"],
            ["tools-02", "Tools_02"],
            ["tools-03", "Tools_03"],
            ["loader-part-01", "Work_in_progress_01"],
            ["loader-part-02", "Work_in_progress_02"],
          ].map(([fileName, objectName]) => {
            new Promise<void>((resolve) => {
              textureLoader.load(`${modelFolderPath}/${fileName}.jpg`, (texture) => {
                const sceneObj = scene.getObjectByName(objectName) as THREE.Mesh;
                if (!sceneObj) {
                  console.log(`Object "${objectName}" not found`);
                  resolve();
                  return;
                }
                texture.flipY = false;
                // sceneObj.material = new THREE.MeshStandardMaterial({
                sceneObj.material = new THREE.MeshBasicMaterial({
                  color: "#fff",
                  map: texture,
                  side: THREE.DoubleSide,
                });
                sceneObj.castShadow = false;
                sceneObj.receiveShadow = false;
                resolve();
              });
            });
          }),
          [
            ["Robotic_arm_base", "Robotic_arm_base"],
            ["Robotic_arm_part_1", "Robotic_arm_part_1"],
            ["Robotic_arm_part_2", "Robotic_arm_part_2"],
            ["Robotic_arm_part_3", "Robotic_arm_part_3"],
            ["Box_Robotic_arm", "Box_Robotic_arm"],
            ["Box_car_1", "Box_car_1"],
            ["Box_car_2", "Box_car_2"],
            ["Box_car_3", "Box_car_3"],
            ["Box_car_4", "Box_car_4"],
            ["Box_car_5", "Box_car_5"],
            ["Box_car_6", "Box_car_6"],
            ["CAR_1", "CAR_1"],
            ["CAR_2", "CAR_2"],
            ["CAR_3", "CAR_3"],
            ["CAR_4", "CAR_4"],
            ["CAR_5", "CAR_5"],
            ["CAR_6", "CAR_6"],
            ["machine-part-1", "machine_part_1"],
            ["machine-part-2", "machine_part_2"],
          ].map(([fileName, objectName]) => {
            new Promise<void>((resolve) => {
              textureLoader.load(`${modelFolderPath}/${fileName}.jpg`, (texture) => {
                const sceneObj = scene.getObjectByName(objectName) as THREE.Mesh;
                if (!sceneObj) {
                  console.log(`Object "${objectName}" not found`);
                  resolve();
                  return;
                }
                texture.flipY = false;
                // sceneObj.material = new THREE.MeshStandardMaterial({
                sceneObj.material = new THREE.MeshBasicMaterial({
                  color: "#fff",
                  map: texture,
                  side: THREE.DoubleSide,
                });
                sceneObj.castShadow = true;
                sceneObj.receiveShadow = false;
                resolve();
              });
            });
          }),
          new Promise<void>((resolve) => {
            textureLoader.load(`${modelFolderPath}/floor.jpg`, (floorTexture) => {
              floorTexture.flipY = false;

              const floorObj = scene.getObjectByName("Floor") as THREE.Mesh;
              if (!floorObj) {
                console.log('Object "Floor" not found');
              } else {
                floorObj.material = new THREE.MeshStandardMaterial({ color: "#fff", map: floorTexture });
              }

              // Floor shadow-receiver
              {
                const shadowFloorGeometry = new THREE.PlaneGeometry(700, 500);
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
          }),
        ])
          .then(() => {
            [
              {
                name: "CAR_1",
                shadow: {
                  x: -100,
                  z: 375,
                  height: 150,
                  width: 150,
                },
                visiblePoint: 320,
                visibleReverse: false,
              },
              {
                name: "CAR_5",
                shadow: {
                  x: 100,
                  z: 375,
                  height: 150,
                  width: 150,
                },
                visiblePoint: 320,
                visibleReverse: false,
              },
            ].forEach((params) => {
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

              [obj, ...obj.children].forEach((el) => {
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
            const cameraAnimation = scene.getObjectByName("Camera1");
            if (!cameraAnimation) {
              setLoaded();
              cb();
              cameraCb();
              return;
            }

            let stillAnimated = true;
            const syncCameraWithAnimation = () => {
              camera.position.set(
                cameraAnimation.position.x * 9,
                cameraAnimation.position.y * 7,
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

export const WarehouseModelMemo = React.memo(WarehouseModel);
