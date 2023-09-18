import React from "react";
import { useParams } from "react-router-dom";

import { FactoryModel } from "../../components/FactoryModel";

import styles from "./index.module.css";

export const ModelFactoryPage = ({ data }: { data: any }) => {
  const { place } = useParams<{ place: string }>();
  const placeData = data[place] || {};

  return (
    <div className={styles.factoryPage}>
      <FactoryModel data={placeData} className={styles.factoryModel} place={place} />
    </div>
  );
};
