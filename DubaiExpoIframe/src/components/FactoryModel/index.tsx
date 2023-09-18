import React from "react";
import * as THREE from "three";
// import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

import { sendMessage } from "../../utils/sendMessage";
import { setLoaded } from "../../utils/setLoaded";

import { Model } from "../Model";
import { animateLightIntensity } from "../Model/utils";
import { OrbitControls } from "../Model/OrbitControls";

interface IFactoryModelProps {
  className?: string;
  data: { [key: string]: string };
  place: string;
  isOuterNavigation?: boolean;
}

const activeAreas: { [key: string]: boolean } = {};

const onClick = (
  areasByName: any,
  names: Array<string>,
  scene: THREE.Scene,
  isPinClicked?: boolean,
  onNoZoneClickCb?: () => void,
  onZoneClickCb?: () => void
) => {
  // Deselect all active zones
  Object.entries(activeAreas).forEach(([areaName, isActive]) => {
    if (!isActive || names.includes(areaName)) {
      return;
    }

    // @ts-ignore
    areasByName?.[areaName].lights.forEach(
      // @ts-ignore
      //areaLight => {
        (areaLight) => {
        const areaLightObj = scene.getObjectByName(areaLight.name);

        if (!areaLightObj) {
          console.log(`${areaLight.name} light was not found`);
          return;
        }

        requestAnimationFrame(animateLightIntensity(areaLightObj, false));
      }
    );

    // @ts-ignore
    const areaConfig: any = areasByName[areaName];
    // @ts-ignore
    //areaConfig.pinsIds.forEach(pinId => {
      areaConfig.pinsIds.forEach((pinId) => {
      document.querySelector(`#${pinId}`)?.classList.remove("active");
    });

    activeAreas[areaName] = false;
  });

  let wasAreaClicked = false;
  const areasNames = Object.keys(areasByName);
  //areasNames.forEach(areaName => {
    areasNames.forEach((areaName) => {
    if (!names.includes(areaName)) {
      return;
    }

    wasAreaClicked = true;

    // @ts-ignore
    areasByName?.[areaName].lights.forEach(
      // @ts-ignore
      //areaLight => {
        (areaLight) => {
        const areaLightObj = scene.getObjectByName(areaLight.name);

        if (!areaLightObj) {
          console.log(`${areaLight.name} light was not found`);
          return;
        }

        requestAnimationFrame(animateLightIntensity(areaLightObj, true));
      }
    );
    activeAreas[areaName] = true;

    // @ts-ignore
    const areaConfig: any = areasByName[areaName];
    // @ts-ignore
    //areaConfig.pinsIds.forEach(pinId => {
      areaConfig.pinsIds.forEach((pinId) => {
      setTimeout(() => {
        document.querySelector(`#${pinId}`)?.classList.add("active");
      }, 100);
    });
  });

  if (wasAreaClicked) {
    if (!isPinClicked) {
      //document.querySelectorAll(".poi-pin-wrapper.active").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".poi-pin-wrapper.active").forEach((el) => el.classList.remove("active"));
      onZoneClickCb && onZoneClickCb();
    }
  } else {
    onNoZoneClickCb && onNoZoneClickCb();
  }
};

const getConfigByPlace = (place: string) => {
  const modelFolderPath = place === "Plant Atlanta" ? "./models/factory2" : "./models/factory";

  return {
    areasByName:
      place === "Plant Atlanta"
        ? {
            "Workshop area": {
              height: 430,
              originalAreaNames: {
                "Plant Frankfurt": "Machining Area 1",
                "Plant Beijing": "Machining Area 3",
                "Plant Atlanta": "Machining Area 5"
              },
              lights: [
                {
                  width: 310,
                  height: 50,
                  name: "Workshop area light 1",
                  x: -480,
                  y: 50,
                  z: 365,
                  rX: -90,
                  rY: -45,
                  rZ: -90
                },
                {
                  width: 310,
                  height: 50,
                  name: "Workshop area light 2",
                  x: -15,
                  y: 50,
                  z: 365,
                  rX: -90,
                  rY: 45,
                  rZ: -90
                },
                {
                  width: 330,
                  height: 50,
                  name: "Workshop area light 3",
                  x: -300,
                  y: 50,
                  z: 560,
                  rX: -45,
                  rY: 0,
                  rZ: 0
                },
                {
                  width: 400,
                  height: 50,
                  name: "Workshop area light 4",
                  x: -255,
                  y: 50,
                  z: 190,
                  rX: 225,
                  rY: 0,
                  rZ: 0
                }
              ],
              pinsIds: ["WorkshopAreaPin"],
              width: 355,
              x: -233,
              z: 377
            }
          }
        : {
            "Workshop area": {
              height: 450,
              originalAreaNames: {
                "Plant Frankfurt": "Machining Area 1",
                "Plant Beijing": "Machining Area 3",
                "Plant Atlanta": "Machining Area 5"
              },
              lights: [
                {
                  width: 480,
                  height: 50,
                  name: "Workshop area light 1",
                  x: -480,
                  y: 50,
                  z: 450,
                  rX: -90,
                  rY: -45,
                  rZ: -90
                },
                {
                  width: 480,
                  height: 50,
                  name: "Workshop area light 2",
                  x: -15,
                  y: 50,
                  z: 450,
                  rX: -90,
                  rY: 45,
                  rZ: -90
                },
                {
                  width: 330,
                  height: 50,
                  name: "Workshop area light 3",
                  x: -300,
                  y: 50,
                  z: 730,
                  rX: -45,
                  rY: 0,
                  rZ: 0
                },
                {
                  width: 400,
                  height: 50,
                  name: "Workshop area light 4",
                  x: -255,
                  y: 50,
                  z: 190,
                  rX: 225,
                  rY: 0,
                  rZ: 0
                }
              ],
              pinsIds: ["WorkshopAreaPin"],
              width: 525,
              x: -238,
              z: 452
            }
          },

    cameraFar: 25000,
    cameraNear: 4000,
    cameraPositionX: -13852,
    cameraPositionY: 4324,
    cameraPositionZ: 5534,
    controlsMaxDistance: 16000,
    controlsMinDistance: 5000,
    controlsTargetX: -117,
    controlsTargetY: 0,
    controlsTargetZ: 170,
    isBloomEnabled: false,
    isDoubleBloomEnabled: false,
    isLabelsEnabled: true,
    isShadowsEnabled: true,
    modelFolderPath,
    modelPath: `${modelFolderPath}/factory.gltf`,
    pinPosition:
      place === "Plant Atlanta"
        ? {
            x: -220,
            y: 100,
            z: 380
          }
        : {
            x: -230,
            y: 110,
            z: 590
          },
    cameraFinalTarget: place === "Plant Atlanta" ? [-140, 0, 305] : [-150, 0, 515]
  };
};

export const FactoryModel = ({ className, data, place, isOuterNavigation }: IFactoryModelProps) => {
  // @ts-ignore
  const [areaName, areaValue]: [string, number] = Object.entries(data).reduce((acc, [name, value]) => {
    if (!acc.length) {
      // @ts-ignore
      return [name, parseFloat(value)];
    }

    // @ts-ignore
    return parseFloat(value) < acc[1] ? [name, value] : acc;
  }, []);

  const config = getConfigByPlace(place);

  return (
    <Model
      className={className}
      config={{
        ...config,
        isOuterNavigation,
        pins: place
          ? [
              {
                position: config.pinPosition,
                props: {
                  hasTransfer: true,
                  id: "WorkshopAreaPin",
                  info: areaValue < 0.9 ? `Line Availability in ${areaName} — ${(areaValue * 100).toFixed(2)}%` : "",
                  status: areaValue < 0.8 ? "danger" : areaValue < 0.9 ? "warning" : "normal",
                  title: areaValue >= 0.9 ? "More Details" : "Low performance"
                },
                //onPinClick: scene => {
                  onPinClick: (scene) => {
                  onClick(config.areasByName, ["Workshop area"], scene, true);
                },
                onPopupClick: (camera, controls, scene, onNoZoneClick) => {
                  const { x: startX, y: startY, z: startZ } = camera.position;

                  const MAX_DISTANCE = 3000;

                  const getRelativeFinishPoint = (startPoint: number, finishPoint: number) => {
                    const relativeCoord = startPoint - finishPoint;
                    const diffX = Math.abs(relativeCoord) - MAX_DISTANCE;
                    return relativeCoord > 0 ? startPoint - diffX : startPoint + diffX;
                  };

                  const finishX = getRelativeFinishPoint(startX, -150);
                  const finishY = getRelativeFinishPoint(startY, -110);
                  const finishZ = getRelativeFinishPoint(startZ, 515);

                  const { x: startTargetX, y: startTargetY, z: startTargetZ } = controls.target;
                  const [finishTargetX, finishTargetY, finishTargetZ] = config.cameraFinalTarget;

                  const animateCameraPosition = (startTimeParam?: number) => (time: number) => {
                    const DURATION = 2000;

                    const startTime = startTimeParam || time;
                    const progressTime = time - startTime;
                    const progress = progressTime / DURATION;

                    if (camera) {
                      camera.position.set(
                        startX - (startX - finishX) * progress,
                        startY - (startY - finishY) * progress,
                        startZ - (startZ - finishZ) * progress
                      );
                    }

                    if (controls) {
                      controls.target.set(
                        startTargetX - (startTargetX - finishTargetX) * progress,
                        startTargetY - (startTargetY - finishTargetY) * progress,
                        startTargetZ - (startTargetZ - finishTargetZ) * progress
                      );
                    }

                    if (progressTime < DURATION) {
                      requestAnimationFrame(animateCameraPosition(startTime));
                    } else {
                      sendMessage(`WORKSHOP DETAILS ${place}`);
                      if (isOuterNavigation) {
                        window.location.hash = `#workshop/${place}`;
                      } else {
                        // window.location.hash = `#model-workshop/${place}`;

                        // Reset camera
                        setTimeout(() => {
                          if (camera) {
                            camera.position.set(config.cameraPositionX, config.cameraPositionY, config.cameraPositionZ);
                          }

                          if (controls) {
                            controls.target.set(config.controlsTargetX, config.controlsTargetY, config.controlsTargetZ);
                          }

                          onClick(config.areasByName, [], scene, false, onNoZoneClick);
                        }, 7000);
                      }
                    }
                  };
                  requestAnimationFrame(animateCameraPosition());
                },
              },
              ...(place === 'Plant Frankfurt'
                ? [
                    {
                      position: {
                        x: -17,
                        y: 62,
                        z: -347,
                      },
                      props: {
                        hasTransfer: true,
                        id: "WarehouseAreaPin",
                        info: "",
                        status: "normal",
                        title: "Warehouse Details",
                      },
                      onPopupClick: (
                        camera: THREE.PerspectiveCamera,
                        controls: OrbitControls,
                        scene: THREE.Scene,
                        onNoZoneClick: () => void
                      ) => {
                        const { x: startX, y: startY, z: startZ } = camera.position;

                        const MAX_DISTANCE = 3000;

                        const getRelativeFinishPoint = (startPoint: number, finishPoint: number) => {
                          const relativeCoord = startPoint - finishPoint;
                          const diffX = Math.abs(relativeCoord) - MAX_DISTANCE;
                          return relativeCoord > 0 ? startPoint - diffX : startPoint + diffX;
                        };

                        const finishX = getRelativeFinishPoint(startX, -150);
                        const finishY = getRelativeFinishPoint(startY, -110);
                        const finishZ = getRelativeFinishPoint(startZ, 515);

                        const { x: startTargetX, y: startTargetY, z: startTargetZ } = controls.target;
                        const [finishTargetX, finishTargetY, finishTargetZ] = [-17, 0, -347];

                        const animateCameraPosition = (startTimeParam?: number) => (time: number) => {
                          const DURATION = 2000;

                          const startTime = startTimeParam || time;
                          const progressTime = time - startTime;
                          const progress = progressTime / DURATION;

                          if (camera) {
                            camera.position.set(
                              startX - (startX - finishX) * progress,
                              startY - (startY - finishY) * progress,
                              startZ - (startZ - finishZ) * progress
                            );
                          }

                          if (controls) {
                            controls.target.set(
                              startTargetX - (startTargetX - finishTargetX) * progress,
                              startTargetY - (startTargetY - finishTargetY) * progress,
                              startTargetZ - (startTargetZ - finishTargetZ) * progress
                            );
                          }

                          if (progressTime < DURATION) {
                            requestAnimationFrame(animateCameraPosition(startTime));
                          } else {
                            sendMessage(`WAREHOUSE DETAILS ${place}`);
                            if (isOuterNavigation) {
                              window.location.hash = `#warehouse/${place}`;
                            } else {
                              // window.location.hash = `#model-workshop/${place}`;

                              // Reset camera
                              setTimeout(() => {
                                if (camera) {
                                  camera.position.set(
                                    config.cameraPositionX,
                                    config.cameraPositionY,
                                    config.cameraPositionZ
                                  );
                                }

                                if (controls) {
                                  controls.target.set(
                                    config.controlsTargetX,
                                    config.controlsTargetY,
                                    config.controlsTargetZ
                                  );
                                }

                                onClick(config.areasByName, [], scene, false, onNoZoneClick);
                              }, 7000);
                            }
                          }
                        };
                        requestAnimationFrame(animateCameraPosition());
                      },
                    },
                  ]
                : [])
            ]
          : [],
        onClick: (names: Array<string>, scene: THREE.Scene, onNoZoneClickCb: () => void, onZoneClickCb: () => void) => {
          onClick(config.areasByName, names, scene, false, onNoZoneClickCb, onZoneClickCb);
        }
      }}
      afterLoadProcess={(scene: THREE.Scene, cb: () => void, camera: THREE.PerspectiveCamera, cameraCb: () => void) => {
        Object.entries(config.areasByName).forEach(([areaName, areaParams]) => {
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

          //areaParams.lights.forEach(light => {
            areaParams.lights.forEach((light) => {
            const areaLight = new THREE.RectAreaLight("#9728d3", 0, light.width, light.height);
            areaLight.name = light.name;
            areaLight.position.set(light.x, light.y, light.z);
            areaLight.rotation.set(
              THREE.MathUtils.degToRad(light.rX),
              THREE.MathUtils.degToRad(light.rY),
              THREE.MathUtils.degToRad(light.rZ)
            );
            areaLight.visible = false;
            scene.add(areaLight);

            // const rectLightHelper = new RectAreaLightHelper(areaLight);
            // areaLight.add(rectLightHelper);
          });
        });

        const textureLoader = new THREE.TextureLoader();

        // TODO Add error handling
        Promise.all([
          // new Promise<void>(resolve => {
          //   textureLoader.load(`${config.modelFolderPath}/scene.jpg`, sceneTexture => {
            new Promise<void>((resolve) => {
              textureLoader.load(`${config.modelFolderPath}/scene.jpg`, (sceneTexture) => {
              sceneTexture.flipY = false;
              const sceneObj = (scene.getObjectByName("Scene") || scene.getObjectByName("Scene1")) as THREE.Mesh;
              if (!sceneObj) {
                console.log('Object "sceneObj" not found');
                resolve();
                return;
              }
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
          // new Promise<void>(resolve => {
          //   textureLoader.load(`${config.modelFolderPath}/containers.jpg`, containersTexture => {
            new Promise<void>((resolve) => {
              textureLoader.load(`${config.modelFolderPath}/containers.jpg`, (containersTexture) => {
              containersTexture.flipY = false;
              const containersObject = (scene.getObjectByName("Box001") ||
                scene.getObjectByName("Container")) as THREE.Mesh;
              if (!containersObject) {
                console.log('Object "Box001" not found');
                resolve();
                return;
              }
              containersObject.material = new THREE.MeshBasicMaterial({
                color: "#fff",
                map: containersTexture
              });
              containersObject.castShadow = false;
              containersObject.receiveShadow = false;
              if (place !== "Plant Atlanta") {
                containersObject.position.z = -123.54830169677734;
              }
              resolve();
            });
          }),
          ...[
            ["loader__1", "loader-1.jpg"],
            ["loader__2", "loader-2.jpg"],
            ["loader__3", "loader-3.jpg"],
            ["loader__4", "loader-4.jpg"],
            ["loader_01_grey", "loader-1-grey.jpg"],
            ["loader_02_grey", "loader-2-grey.jpg"],
            ["loader_03_grey", "loader-3-grey.jpg"],
            ["loader_04_grey", "loader-4-grey.jpg"],
            ["loader__1_purple", "loader-1-purple.jpg"],
            ["loader__2_purple", "loader-2-purple.jpg"],
            ["loader__3_purple", "loader-3-purple.jpg"],
            ["loader__4_purple", "loader-4-purple.jpg"]
          ].map(([objName, textureName]) => {
            //return new Promise<void>(resolve => {
              return new Promise<void>((resolve) => {
              textureLoader.load(
                `${config.modelFolderPath}/${textureName}`,
                //texture => {
                  (texture) => {
                  texture.flipY = false;
                  const obj = scene.getObjectByName(objName) as THREE.Mesh;
                  if (!obj) {
                    console.log(`Object "${objName}" not found`);
                    resolve();
                  }
                  obj.material = new THREE.MeshBasicMaterial({
                    color: "#fff",
                    map: texture
                  });
                  obj.castShadow = true;
                  obj.receiveShadow = false;
                  resolve();
                },
                () => {},
                () => {
                  resolve();
                }
              );
            });
          }),
          // new Promise<void>(resolve => {
          //   textureLoader.load(`${config.modelFolderPath}/floor.jpg`, floorTexture => {
            new Promise<void>((resolve) => {
              textureLoader.load(`${config.modelFolderPath}/floor.jpg`, (floorTexture) => {
              floorTexture.flipY = false;
              const floorObj = scene.getObjectByName("Floor") as THREE.Mesh;
              if (!floorObj) {
                console.log('Object "floorObj" not found');
                resolve();
                return;
              }
              // floorObj.material = new THREE.MeshBasicMaterial({
              floorObj.material = new THREE.MeshStandardMaterial({
                color: "#fff",
                map: floorTexture
              });
              floorObj.castShadow = false;
              floorObj.receiveShadow = false;

              // Floor shadow-receiver
              {
                const shadowFloorGeometry = new THREE.PlaneGeometry(1000, 2000);
                // const shadowFloorMaterial = new THREE.MeshBasicMaterial();
                const shadowFloorMaterial = new THREE.ShadowMaterial();
                shadowFloorMaterial.opacity = 0.1;
                // shadowFloorMaterial.opacity = 1;
                const shadowFloorMesh = new THREE.Mesh(shadowFloorGeometry, shadowFloorMaterial);
                shadowFloorMesh.rotation.x = THREE.MathUtils.degToRad(-90);
                shadowFloorMesh.position.y = 0.01;
                shadowFloorMesh.receiveShadow = true;
                scene.add(shadowFloorMesh);
              }

              // Floor-background
              {
                const planeGeometry = new THREE.PlaneGeometry(8000, 8000);
                const planeMaterial = new THREE.MeshStandardMaterial({ color: "#e3e5ea" });
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
                cameraAnimation.position.x * 7,
                cameraAnimation.position.y * 5,
                cameraAnimation.position.z
              );
              camera.rotation.set(cameraAnimation.rotation.x, cameraAnimation.rotation.y, cameraAnimation.rotation.z);
            };

            const animateCamera = () => {
              syncCameraWithAnimation();

              if (stillAnimated) {
                requestAnimationFrame(animateCamera);
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

export const FactoryModelMemo = React.memo(FactoryModel);
