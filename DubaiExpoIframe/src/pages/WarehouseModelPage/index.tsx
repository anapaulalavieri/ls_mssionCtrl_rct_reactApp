import React from "react";
import { useParams } from "react-router-dom";

import { WarehouseModel } from "../../components/WarehouseModel";

import styles from "./index.module.css";

export const WarehouseModelPage = ({ data }: { data: any }) => {
  const { place, line } = useParams<{ place: string; line?: string }>();
  const placeData = data[place] || {};

  return (
    <div className={styles.workshopPage}>
      <WarehouseModel className={styles.workshopModel} data={placeData} place={place} line={line} />
    </div>
  );
};
