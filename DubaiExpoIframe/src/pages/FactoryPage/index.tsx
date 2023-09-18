import React, { useEffect } from "react";
import classNames from "classnames";
import { useParams } from "react-router-dom";

import { setLoaded } from "../../utils/setLoaded";

import { FactoryModelMemo } from "../../components/FactoryModel";

import styles from "./index.module.css";

export const FactoryPage = ({ className, modelData }: { className?: string; modelData: any }) => {
  const { place } = useParams<{ place: string }>();
  const placeData = modelData[place] || {};

  useEffect(() => {
    setLoaded();
  }, []);

  return (
    <div className={classNames(styles.factoryPage, className)}>
      <FactoryModelMemo className={styles.factoryModel} data={placeData} place={place} isOuterNavigation />
    </div>
  );
};
