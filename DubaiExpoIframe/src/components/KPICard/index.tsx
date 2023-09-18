import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

export interface IKPICardProps {
  cardClassName?: string;
  children?: React.ReactNode | React.ReactNodeArray;
  className?: string;
  hasHover?: boolean;
  hasPadding?: boolean;
  row?: boolean;
  subtitle?: string;
  title?: string;
  titleButtons?: React.ReactNode;
  titleWrapperClassName?: string;
  variant?: 0 | 1 | 2 | 3;
}

export const KPICard = ({
  cardClassName,
  children,
  className,
  hasHover,
  hasPadding,
  row = false,
  subtitle,
  title,
  titleButtons,
  titleWrapperClassName,
  variant = 0
}: IKPICardProps) => {
  return (
    <div className={classNames(styles.wrapper, className, styles[`wrapper_variant-${variant}`])}>
      {(title || subtitle) && (
        <div className={classNames(titleWrapperClassName, styles.titleWrapper)}>
          {title && <span className={styles.title}>{title}</span>}
          {subtitle && <span className={styles.subTitle}>{subtitle}</span>}
          {titleButtons && <div className={styles.titleButtons}>{titleButtons}</div>}
        </div>
      )}
      <div
        className={classNames(cardClassName, styles.card, row && styles.cardRow, styles[`card_variant-${variant}`], {
          [styles["card_hasHover"]]: hasHover,
          [styles["card_hasPadding"]]: hasPadding
        })}
      >
        {children}
      </div>
    </div>
  );
};
