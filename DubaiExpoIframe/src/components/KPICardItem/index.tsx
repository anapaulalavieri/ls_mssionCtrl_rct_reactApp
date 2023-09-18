import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/message-warning.js";
import LoadingSkeleton from "../LoadingSkeleton";

import { ReactComponent as ArrowIcon } from "./svg/arrow.svg";

//@ts-ignore
import CountUp from "react-countup";

import styles from "./index.module.css";

export interface IKPICardItemProps {
  className?: string;
  children?: React.ReactNode;
  deviation?: number | string;
  deviationDirection?: "down" | "up";
  hoverChildren?: React.ReactNode;
  infoTitle?: string;
  infoValue?: number | string;
  kpi?: number | string;
  noPadding?: boolean;
  onClick?: () => void;
  status?: "primary" | "danger" | "warning" | "normal";
  title?: React.ReactNode;
  titleDescription?: React.ReactNode;
  titleHref?: string;
  kpiTextSize?: "xsmall" | "small" | "medium" | "large";
  loading?: boolean;
  animateKpi?: boolean;
}

const OuterLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M11 8.50006V11.5001C11 11.7653 10.8946 12.0197 10.7071 12.2072C10.5195 12.3948 10.2652 12.5001 9.99996 12.5001H4.49999C4.23478 12.5001 3.98043 12.3948 3.79289 12.2072C3.60536 12.0197 3.5 11.7653 3.5 11.5001V6.00002C3.5 5.7348 3.60536 5.48044 3.79289 5.2929C3.98043 5.10536 4.23478 5 4.49999 5H7.49998"
      stroke="#7E898F"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.49988 3.5H12.4999V6.50005"
      stroke="#7E898F"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7 9.00009L12.5 3.5" stroke="#7E898F" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const KPICardItem = ({
  animateKpi,
  children,
  className,
  deviation,
  deviationDirection,
  hoverChildren,
  infoTitle,
  infoValue,
  kpi,
  kpiTextSize = "medium",
  loading,
  noPadding,
  onClick,
  status,
  title,
  titleDescription,
  titleHref
}: IKPICardItemProps) => {
  const TitleComponent = titleHref ? "a" : "div";

  const [prevKpi, setPrevKpi] = useState(0);

  useEffect(() => {
    return () => {
      setPrevKpi(parseFloat(String(kpi)));
    };
  }, [kpi, setPrevKpi]);

  return (
    <div
      className={classNames(styles.item, className, {
        [styles["item_danger"]]: status === "danger",
        [styles["item_warning"]]: status === "warning",
        [styles["item_primary"]]: status === "primary",
        [styles["item_noPadding"]]: noPadding
      })}
      onClick={onClick}
    >
      <div className={styles.titleWrapper}>
        <TitleComponent
          className={styles.title}
          {...(titleHref
            ? {
                href: titleHref,
                target: "_blank",
                rel: "noreferrer noopener"
              }
            : {})}
        >
          {title}
          {titleDescription && <span className={styles.titleDescription}>{titleDescription}</span>}
          {status === "danger" && <Icon className={styles.titleIcon} name="message-warning" />}
          {titleHref && <OuterLinkIcon className={styles.titleLinkIcon} />}
        </TitleComponent>
      </div>
      {hoverChildren && <div className={styles.hoverContentWrapper}>{hoverChildren}</div>}
      <div className={styles.contentWrapper}>
        {kpi !== undefined && (
          <React.Fragment>
            {loading ? (
              <LoadingSkeleton size={kpiTextSize} />
            ) : (
              <div className={classNames(styles.kpi, styles[`kpi_${kpiTextSize}`])}>
                {animateKpi ? (
                  <CountUp
                    duration={1}
                    start={prevKpi}
                    suffix={String(kpi).includes("%") ? "%" : ""}
                    end={parseFloat(String(kpi))}
                    decimals={
                      String(parseFloat(String(kpi))).includes(".")
                        ? String(parseFloat(String(kpi))).split(".")[1].length
                        : 0
                    }
                  />
                ) : (
                  kpi
                )}
              </div>
            )}
          </React.Fragment>
        )}
        <div
          className={classNames(
            styles.deviationWrapper,
            deviationDirection === "up" ? styles["deviationWrapper_up"] : styles["deviationWrapper_down"]
          )}
        >
          {deviationDirection && (
            <ArrowIcon
              className={classNames(
                styles.deviationIcon,
                deviationDirection === "up" ? styles["deviationIcon_up"] : styles["deviationIcon_down"]
              )}
            />
          )}
          <span className={styles.deviation}>{deviation}</span>
        </div>
        <div className={styles.subInfo}>
          <div className={styles.subInfoTitle}>{infoTitle}</div>
          <div className={styles.subInfoValue}>{infoValue}</div>
        </div>
      </div>
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
};
