import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { WorkshopModelMemo } from "../../components/WorkshopModel";

import { setLoaded } from "../../utils/setLoaded";

import styles from "./index.module.css";

export const WorkshopPage = ({ modelData }: { modelData: any }) => {
  const { place, line } = useParams<{ place: string; line?: string }>();
  const placeData = modelData[place] || {};

  useEffect(() => {
    setLoaded();
  }, []);

  return (
    <div className={styles.workshopPage}>
      <WorkshopModelMemo className={styles.workshopModel} data={placeData} place={place} line={line} />
    </div>
  );
};
