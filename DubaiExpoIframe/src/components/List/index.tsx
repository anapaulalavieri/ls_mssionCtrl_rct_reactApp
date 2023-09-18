import React from "react";
import classNames from "classnames";
import LoadingSkeleton from "../LoadingSkeleton";

import styles from "./index.module.css";

export const List = ({
  children,
  className,
  isHorizontal,
}: {
  children: React.ReactNode | React.ReactNodeArray;
  className?: string;
  isHorizontal?: boolean;
}) => <div className={classNames(styles.list, isHorizontal && styles["list_horizontal"], className)}>{children}</div>;

export const ListItem = ({
  name,
  isVertical,
  value,
  loading,
}: {
  name: React.ReactNode | React.ReactNodeArray;
  isVertical?: boolean;
  value: React.ReactNode | React.ReactNodeArray;
  loading?: boolean;
}) => (
  <div className={classNames(styles.listItem, isVertical && styles["listItem_vertical"])}>
    <div className={styles.listItemName}>{name}</div>
    <div className={styles.listItemValue}>{loading ? <LoadingSkeleton size="xsmall" /> : value}</div>
  </div>
);
