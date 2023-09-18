import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

export const Pin = ({ type }: { type: 1 | 2 | 3 }) => {
  return <span className={classNames(styles.pin, type && styles[`pin_type-${type}`])} />;
};
