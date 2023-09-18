import React from "react";
import { useParams } from "react-router-dom";

import { WorkshopModel } from "../../components/WorkshopModel";

import styles from "./index.module.css";

export const WorkshopModelPage = ({ data }: { data: any }) => {
  const { place, line } = useParams<{ place: string; line?: string }>();
  const placeData = data[place] || {};

  return (
    <div className={styles.workshopPage}>
      <WorkshopModel className={styles.workshopModel} data={placeData} place={place} line={line} />
    </div>
  );
};
