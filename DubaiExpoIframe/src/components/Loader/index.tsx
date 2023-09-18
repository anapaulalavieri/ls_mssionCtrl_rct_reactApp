import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

export const Loader = ({ isAbsolute, isNotAnimated }: { isAbsolute?: boolean; isNotAnimated?: boolean }) => {
  return (
    <div
      className={classNames(styles.dots, isAbsolute && styles.dots_absolute, isNotAnimated && styles.dots_notAnimated)}
    >
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  );
};
