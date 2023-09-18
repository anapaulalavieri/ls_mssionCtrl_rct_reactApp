import React from "react";
import classNames from "classnames";
import styles from "./index.module.css";

export interface LoadingSkeletonProps {
  className?: string;
  height?: number | string;
  size?: "xsmall" | "small" | "medium" | "large";
  width?: number | string;
}

const LoadingSkeleton = ({ className, height, size = "medium", width }: LoadingSkeletonProps) => {
  return <div className={classNames(styles.loadingSkeleton, styles[size], className)} style={{ height, width }} />;
};

export default LoadingSkeleton;
