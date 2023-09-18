import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Route, useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { sendMessage } from "../../utils/sendMessage";

import { ChartsGrid } from "../ChartsGrid";
import { KPICard } from "../KPICard";
import { KPICardItem } from "../KPICardItem";
import { TablesGrid } from "../TablesGrid";
import LoadingSkeleton from "../LoadingSkeleton";
import { CardLineSelect } from "../CardLineSelect";

import styles from "./index.module.css";

import dataByPlaceName from "./data.json";

export const CardEffectiveness = ({ selectedPeriod }: { selectedPeriod: string }) => {
  const { place, line } = useParams<{ place: string; line?: string }>();

  const [currentCards, setCards] = useState("graphics");
  const [currentLine, setCurrentLine] = useState(line || "Production Line");
  const [currentMachine, setCurrentMachine] = useState(null);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  useEffect(() => {
    const processPostMessage = ({ data: rawData }: MessageEvent) => {
      const parseData = () => {
        try {
          return JSON.parse(rawData);
        } catch (e) {
          return rawData;
        }
      };
      const data = parseData();

      if (typeof data !== "string") {
        return;
      }

      if (data === "MACHINE NOCLICK") {
        setCurrentLine("Production Line");
        setCurrentMachine(null);
      } else if (data.includes("AreaDetails ")) {
        const raw = data.replace("AreaDetails ", "");
        const json = JSON.parse(raw);
        // console.log(json);

        const { EXPLINE: zone } = json;

        if (zone === undefined) {
          return;
        }

        setCurrentLine(zone);
      } else if (data.includes("MachineDetails ")) {
        const raw = data.replace("MachineDetails ", "");
        const json = JSON.parse(raw);
        // console.log(json);

        const { RESDESCR: machine, EXPLINE: line } = json;

        if (machine === undefined) {
          return;
        }

        setCurrentLine(line);
        setCurrentMachine(machine);
      }
    };
    window.addEventListener("message", processPostMessage);

    return () => {
      window.removeEventListener("message", processPostMessage);
    };
  }, [setCurrentLine]);

  // @ts-ignore
  const currentData = dataByPlaceName[place];

  if (!currentData) {
    return null;
  }

  return (
    <>
      <Route exact path={["/workshop/:place/:line", "/workshop/:place", "/workshop"]}>
        {({ match }) => (
          <CSSTransition
            appear
            classNames="cardLineAnimate"
            in={match !== null}
            timeout={{
              appear: 700,
              enter: 1400,
              exit: 700
            }}
            unmountOnExit
          >
            <div>
              <CardLineSelect
                selectedLineName={currentLine}
                lines={["Production Line", ...currentData.kpi.map(([name]: any) => name)]}
                onLineChange={setCurrentLine}
              />
            </div>
          </CSSTransition>
        )}
      </Route>
      <KPICard
        cardClassName={styles.cardCard}
        className={classNames(styles.factoryCard, styles.card)}
        hasPadding
        title="Overall Line Effectiveness"
        subtitle="WTD — %"
        variant={1}
        titleButtons={
          <div className={styles.switcherWrapper}>
            <button
              className={classNames(styles.switcherButton, currentCards === "graphics" && styles.switcherButton_active)}
              onClick={() => {
                setCards("graphics");
              }}
            >
              <svg
                className={classNames(styles.switcherButtonIcon, styles["switcherButtonIcon_stroke"])}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M22 12H18L15 21L9 3L6 12H2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className={classNames(styles.switcherButton, currentCards === "tables" && styles.switcherButton_active)}
              onClick={() => {
                setCards("tables");
              }}
            >
              <svg
                className={classNames(styles.switcherButtonIcon, styles.switcherButtonIcon_fill)}
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path d="M11 15C10.7292 15 10.4896 14.9062 10.2812 14.7188C10.0938 14.5104 10 14.2708 10 14C10 13.7083 10.0938 13.4688 10.2812 13.2812C10.4896 13.0938 10.7292 13 11 13H25C25.2917 13 25.5312 13.0938 25.7188 13.2812C25.9062 13.4688 26 13.7083 26 14C26 14.2708 25.9062 14.5104 25.7188 14.7188C25.5312 14.9062 25.2917 15 25 15H11ZM11 19.9688C10.7292 19.9688 10.4896 19.875 10.2812 19.6875C10.0938 19.4792 10 19.2396 10 18.9688C10 18.6771 10.0938 18.4375 10.2812 18.25C10.4896 18.0625 10.7292 17.9688 11 17.9688H25C25.2917 17.9688 25.5312 18.0625 25.7188 18.25C25.9062 18.4375 26 18.6771 26 18.9688C26 19.2396 25.9062 19.4792 25.7188 19.6875C25.5312 19.875 25.2917 19.9688 25 19.9688H11ZM11 24.9375C10.7292 24.9375 10.4896 24.8438 10.2812 24.6562C10.0938 24.4479 10 24.2083 10 23.9375C10 23.6458 10.0938 23.4062 10.2812 23.2188C10.4896 23.0312 10.7292 22.9375 11 22.9375H25C25.2917 22.9375 25.5312 23.0312 25.7188 23.2188C25.9062 23.4062 26 23.6458 26 23.9375C26 24.2083 25.9062 24.4479 25.7188 24.6562C25.5312 24.8438 25.2917 24.9375 25 24.9375H11Z" />
              </svg>
            </button>
          </div>
        }
        titleWrapperClassName={styles.cardTitleWrapper}
      >
        <div className={styles.cardGrid}>
          <div className={styles.cardCells}>
            <div className={styles.cardCell}>
              <KPICardItem
                animateKpi
                loading={isLoading}
                onClick={() => {
                  if (!window.location.hash.includes("workshop")) {
                    window.location.hash = `/workshop/${place}/${currentData.kpi[0][0]}`;
                  }
                  setCurrentMachine(null);
                  setCurrentLine(currentData.kpi[0][0]);
                  sendMessage("AreaDetails " + JSON.stringify({ EXPLINE: currentData.kpi[0][0] }));
                }}
                className={classNames(
                  styles.cardCellItem,
                  currentLine === currentData.kpi[0][0] && styles.cardCellItem_active
                )}
                kpi={currentData.kpi[0][1]}
                title={isLoading ? "Bottleneck:" : `Bottleneck: ${currentData.kpi[0][0]}`}
                kpiTextSize="large"
                noPadding
              />
            </div>
            <div className={styles.cardCell}>
              {currentData.kpi.map(([name, value]: any, i: number) => {
                if (i === 0) {
                  return null;
                }

                return (
                  <div key={name}>
                    <KPICardItem
                      animateKpi
                      className={classNames(styles.cardCellItem, currentLine === name && styles.cardCellItem_active)}
                      loading={isLoading}
                      onClick={() => {
                        if (!window.location.hash.includes("workshop")) {
                          window.location.hash = `/workshop/${place}/${name}`;
                        }
                        setCurrentMachine(null);
                        setCurrentLine(name);
                        sendMessage("AreaDetails " + JSON.stringify({ EXPLINE: name }));
                      }}
                      kpi={value}
                      title={name}
                      kpiTextSize="xsmall"
                      noPadding
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <span className={styles.spacer} />
          <div className={styles.cardData}>
            {isLoading ? (
              <LoadingSkeleton height="140px" width="100%" />
            ) : (
              <>
                {currentCards === "graphics" && (
                  <ChartsGrid
                    place={place}
                    className={styles.cardCharts}
                    data={currentData.chartsData[currentLine]}
                    tableData={currentData.tablesData[currentLine]}
                    selectedPeriod={selectedPeriod}
                    selectedMachine={currentMachine}
                    selectedLine={currentLine}
                  />
                )}
                {currentCards === "tables" && (
                  <TablesGrid
                    place={place}
                    className={styles.cardTables}
                    data={currentData.tablesData[currentLine]}
                    selectedPeriod={selectedPeriod}
                    selectedMachine={currentMachine}
                    selectedLine={currentLine}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </KPICard>
    </>
  );
};
