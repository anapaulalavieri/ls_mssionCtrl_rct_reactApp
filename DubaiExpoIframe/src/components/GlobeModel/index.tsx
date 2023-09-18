import React, { useEffect, createRef } from "react";
import classNames from "classnames";

import { setLoaded } from "../../utils/setLoaded";

import { Loader } from "../Loader";
import { POIGlobe } from "./POIGlobe.js";

import lighting from "./assets/lighting.png";

import "./styles.css";
import styles from "./index.module.css";

export const GlobeModel = ({
  className,
  data,
  isOuterNavigation
}: {
  className?: string;
  data: { [key: string]: string };
  isOuterNavigation?: boolean;
}) => {
  const canvasRef = createRef<HTMLCanvasElement>();
  const lightingRef = createRef<HTMLImageElement>();
  const loaderRef = createRef<HTMLDivElement>();
  const calloutContainerRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (!canvasRef.current || !calloutContainerRef.current || !loaderRef.current || !lightingRef.current) {
      return;
    }

    const globe = new POIGlobe(
      canvasRef.current,
      calloutContainerRef.current,
      lightingRef.current,
      isOuterNavigation,
      data,
      () => {
        if (loaderRef.current) {
          loaderRef.current.classList.add(styles.loaderLoaded);
          setTimeout(() => {
            if (loaderRef.current) {
              loaderRef.current.hidden = true;
            }
          }, 750);
        }

        setLoaded();
      }
    );

    return () => {
      globe.destroy();
    };
  }, [canvasRef, calloutContainerRef, loaderRef]);

  return (
    <div className={classNames(styles.wrapper, className)}>
      <canvas className={styles.canvas} ref={canvasRef} />
      <img src={lighting} className={styles.lighting} alt="" ref={lightingRef} />
      <div className={styles.callout} ref={calloutContainerRef} />

      <div ref={loaderRef} className={styles.loader}>
        <Loader isAbsolute />
      </div>
    </div>
  );
};

export const GlobeModelMemo = React.memo(GlobeModel);
