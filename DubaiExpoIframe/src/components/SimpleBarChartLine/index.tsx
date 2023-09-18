import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";
import { SimpleBarChart } from "../SimpleBarChart";

export const SimpleBarChartLine = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode | React.ReactNodeArray;
}) => {
  return <div className={classNames(styles.wrapper, className)}>{children}</div>;
};

export const SimpleBarChartLineItem = ({
  title,
  status,
  variant,
  value
}: {
  title: string;
  status?: "danger" | "warning" | "normal";
  variant?: "two-lines";
  value: number;
}) => {
  return (
    <div
      className={classNames(
        styles.item,
        status && styles[`item_status-${status}`],
        variant === "two-lines" && styles["item_variant-two-lines"]
      )}
    >
      <div className={styles.itemTitle}>{title}</div>
      <div className={styles.itemChart}>
        <SimpleBarChart status={status} value={value} />
      </div>
      <div className={styles.itemValue}>{value}%</div>
    </div>
  );
};
