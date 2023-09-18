import React from "react";

import { GlobeModelMemo } from "../../components/GlobeModel";

import styles from "./index.module.css";

export const GlobePage = ({ data }: { data: { [key: string]: string } }) => {
  return (
    <div className={styles.modelPage}>
      <GlobeModelMemo className={styles.model} data={data} />
    </div>
  );
};
