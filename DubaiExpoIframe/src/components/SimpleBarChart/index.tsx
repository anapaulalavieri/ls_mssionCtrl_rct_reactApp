import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

export const SimpleBarChart = ({
  className,
  status,
  value
}: {
  className?: string;
  status?: "danger" | "warning" | "normal";
  value: number;
}) => {
  return (
    <div className={styles.wrapper}>
      <span
        className={classNames(styles.bar, status && styles[`bar_status-${status}`], className)}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
