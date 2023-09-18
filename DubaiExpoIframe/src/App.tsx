import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { ThemeProvider } from "@ui5/webcomponents-react";

import { FactoryPage } from "./pages/FactoryPage";
import { GlobePage } from "./pages/GlobePage";
import { KPIPage } from "./pages/KPIPage";
import { ModelFactoryPage } from "./pages/ModelFactoryPage";
import { WorkshopModelPage } from "./pages/WorkshopModelPage";
import { WarehouseModelPage } from "./pages/WarehouseModelPage";
import { WorkshopPage } from "./pages/WorkshopPage";

import { CardEffectiveness } from "./components/CardEffectiveness";
import { CardOperational } from "./components/CardOperational";
import { CardOHS } from "./components/CardOHS";
import { CardPeriods } from "./components/CardPeriods";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { RegionSelect } from "./components/RegionSelect";
import axios from "axios";

import styles from "./App.module.css";

export const MACHINE_NAME_BY_RESID_MAP = {
  "Machine 1": "Machine Area 1_1",
  "Machine 2": "Machine Area 1_2",
  "Machine 3": "Machine Area 1_3",
  "Machine 5": "Machine Area 2_1",
  "Machine 6": "Machine Area 2_2",
  "Machine 7": "Machine Area 2_3",
  "Machine 9": "Assembly",
  "Machine 11": "Packaging",

  "Machine 12": "Machine Area 1_1",
  "Machine 13": "Machine Area 1_2",
  "Machine 14": "Machine Area 1_3",
  "Machine 16": "Machine Area 2_1",
  "Machine 17": "Machine Area 2_2",
  "Machine 18": "Machine Area 2_3",
  "Machine 20": "Assembly",
  "Machine 22": "Packaging",

  "Machine 23": "Machine Area 1_1",
  "Machine 24": "Machine Area 1_2",
  "Machine 25": "Machine Area 1_3",
  "Machine 27": "Machine Area 2_1",
  "Machine 28": "Machine Area 2_2",
  "Machine 29": "Machine Area 2_3",
  "Machine 31": "Assembly",
  "Machine 33": "Packaging"
};

const dataMock = {
  level1: {
    "Plant Atlanta": "0.981500",
    "Plant Beijing": "0.952896",
    "Plant Frankfurt": "0.490750"
  },
  level2: {
    "Plant Frankfurt": {
      "Assembly Line 1": "0.996799",
      "Machining Area 1": "0.000000",
      "Machining Area 2": "0.981500",
      "Packaging Line 1": "0.996799"
    },
    "Plant Beijing": {
      "Assembly Line 2": "0.996799",
      "Machining Area 3": "0.955792",
      "Machining Area 4": "0.950000",
      "Packaging Line 2": "0.996799"
    },
    "Plant Atlanta": {
      "Assembly Line 3": "0.996799",
      "Machining Area 5": "0.981500",
      "Machining Area 6": "0.981500",
      "Packaging Line 3": "0.996799"
    }
  },
  level3: {
    "Plant Frankfurt": {
      Assembly: ["Machine 9", "0.996799", "Assembly Line 1"],
      "Machine Area 1_1": ["Machine 1", "0.981500", "Machining Area 1"],
      "Machine Area 1_2": ["Machine 2", "0.000000", "Machining Area 1"],
      "Machine Area 1_3": ["Machine 3", "0.981500", "Machining Area 1"],
      "Machine Area 2_1": ["Machine 5", "0.981500", "Machining Area 2"],
      "Machine Area 2_2": ["Machine 6", "0.981500", "Machining Area 2"],
      "Machine Area 2_3": ["Machine 7", "0.981500", "Machining Area 2"],
      Packaging: ["Machine 11", "0.996799", "Packaging Line 1"]
    },
    "Plant Beijing": {
      Assembly: ["Machine 20", "0.996799", "Assembly Line 2"],
      "Machine Area 1_1": ["Machine 12", "0.981500", "Machining Area 3"],
      "Machine Area 1_2": ["Machine 13", "0.950000", "Machining Area 3"],
      "Machine Area 1_3": ["Machine 14", "0.981500", "Machining Area 3"],
      "Machine Area 2_1": ["Machine 16", "0.981500", "Machining Area 4"],
      "Machine Area 2_2": ["Machine 17", "0.950000", "Machining Area 4"],
      "Machine Area 2_3": ["Machine 18", "0.981500", "Machining Area 4"],
      Packaging: ["Machine 22", "0.996799", "Packaging Line 2"]
    },
    "Plant Atlanta": {
      Assembly: ["Machine 31", "0.996799", "Assembly Line 3"],
      "Machine Area 1_1": ["Machine 23", "0.981500", "Machining Area 5"],
      "Machine Area 1_2": ["Machine 24", "0.981500", "Machining Area 5"],
      "Machine Area 1_3": ["Machine 25", "0.981500", "Machining Area 5"],
      "Machine Area 2_1": ["Machine 27", "0.981500", "Machining Area 6"],
      "Machine Area 2_2": ["Machine 28", "0.981500", "Machining Area 6"],
      "Machine Area 2_3": ["Machine 29", "0.981500", "Machining Area 6"],
      Packaging: ["Machine 33", "0.996799", "Packaging Line 3"]
    }
  }
};

const App = () => {
  const [data, setData] = useState<any>();
  const [regionName, setRegionName] = useState("global");
  const [periodName, setPeriodName] = useState("DTD");


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

      const regionNameByEvent = {
        NOCLICK: "global",
        AMERICAS: "americas",
        "DC Seattle": "americas",
        "Plant Atlanta": "americas",
        APJ: "apj",
        "Plant Beijing": "apj",
        "DC Hong Kong": "apj",
        EMEA: "emea",
        "DC Rotterdam": "emea",
        "Plant Frankfurt": "emea"
      };

      // @ts-ignore
      const regionName = regionNameByEvent[data];

      if (!regionName) {
        return;
      }

      setRegionName(regionName);
    };
    window.addEventListener("message", processPostMessage);

    return () => {
      window.removeEventListener("message", processPostMessage);
    };
  }, [setRegionName]);

  useEffect(() => {
// Promise.all([
//             fetch("IBP_DATA/sap/opu/odata/IBP/EXTRACT_ODATA_SRV/DUBAIEXPO?$format=json&$select=LOCTYPE,LOCREGION,LOCID,LOCDESCR,EXPPLANTAVAILRATEDTD&$filter=PERIODID1%20eq%20%272021%27%20and%20LOCTYPE%20eq%20%27PLANT%27").then(value => value.json()),
//             fetch("IBP_DATA/sap/opu/odata/IBP/EXTRACT_ODATA_SRV/DUBAIEXPO?$format=json&$select=LOCID,LOCDESCR,EXPLINE,EXPLINEAVAILRATEDTD&$filter=PERIODID1%20eq%20%272021%27%20and%20%28LOCDESCR%20eq%20%27Plant%20Frankfurt%27%20or%20LOCDESCR%20eq%20%27Plant%20Beijing%27%20or%20LOCDESCR%20eq%20%27Plant%20Atlanta%27%29").then(value => value.json()),
//             fetch("IBP_DATA/sap/opu/odata/IBP/EXTRACT_ODATA_SRV/DUBAIEXPO?$format=json&$select=EXPLINE,LOCID,LOCDESCR,RESID,EXPAVAILRATEDTD&$filter=PERIODID1%20eq%20%272021%27%20and%20%28LOCDESCR%20eq%20%27Plant%20Frankfurt%27%20or%20LOCDESCR%20eq%20%27Plant%20Beijing%27%20or%20LOCDESCR%20eq%20%27Plant%20Atlanta%27%29").then(value => value.json())
//             ])
//             .then((rawData) => {
//                console.log(rawData)
//  const data = {
//           level1: {
//             ...rawData[0].d.results.reduce((acc: any, item: any) => ({ ...acc, [item.LOCDESCR]: item.EXPPLANTAVAILRATEDTD }), {})
//           },
//           level2: {
//             ...rawData[1].d.results.reduce(
//               (acc: any, item: any) => ({
//                 ...acc,
//                 [item.LOCDESCR]: {
//                   ...(acc[item.LOCDESCR] ? acc[item.LOCDESCR] : {}),
//                   [item.EXPLINE]: item.EXPLINEAVAILRATEDTD
//                 }
//               }),
//               {}
//             )
//           },
//           level3: {
//             ...rawData[2].d.results.reduce((acc: any, item: any) => {
//               // @ts-ignore
//               const machineName = MACHINE_NAME_BY_RESID_MAP[item.RESID] || "other";

//               return {
//                 ...acc,
//                 [item.LOCDESCR]: {
//                   ...(acc[item.LOCDESCR] ? acc[item.LOCDESCR] : {}),
//                   [machineName]: [item.RESID, item.EXPAVAILRATEDTD, item.EXPLINE]
//                 }
//               };
//             }, {})
//           }
//         };

//         setData(data);
//               //json response
//             })
//             .catch((err) => {
//                 console.log(err);
//                 setData(dataMock);
//             });
    fetch("")
    //URL for service fetch: https://myappdest-excellent-gelada-ic.cfapps.eu10.hana.ondemand.com/
      //.then(response => {
        .then((response) => {
        try {
          return response.json();
        } catch (err) {
          return Promise.reject();
        }
      })
      // .then(rawData => {
        .then((rawData) => {
        const data = {
          level1: {
            ...rawData[0].d.results.reduce((acc: any, item: any) => ({ ...acc, [item.LOCDESCR]: item.EXPPLANTAVAILRATEDTD }), {})
          },
          level2: {
            ...rawData[1].d.results.reduce(
              (acc: any, item: any) => ({
                ...acc,
                [item.LOCDESCR]: {
                  ...(acc[item.LOCDESCR] ? acc[item.LOCDESCR] : {}),
                  [item.EXPLINE]: item.EXPLINEAVAILRATEDTD
                }
              }),
              {}
            )
          },
          level3: {
            ...rawData[2].d.results.reduce((acc: any, item: any) => {
              // @ts-ignore
              const machineName = MACHINE_NAME_BY_RESID_MAP[item.RESID] || "other";

              return {
                ...acc,
                [item.LOCDESCR]: {
                  ...(acc[item.LOCDESCR] ? acc[item.LOCDESCR] : {}),
                  [machineName]: [item.RESID, item.EXPAVAILRATEDTD, item.EXPLINE]
                }
              };
            }, {})
          }
        };

         setData(data);
   //       setData(dataMock);
      })
      //.catch(error => {
        .catch((error) => {
    //    console.error("Data fetching error", error);
        setData(dataMock);
      });
  }, [setData]);

  if (!data) {
    return <Loader isAbsolute />;
  }

  return (
    <ThemeProvider>
      <div className={styles.app}>
        <Router hashType="noslash">
          <Route path="/model">
            <GlobePage data={data.level1} />
          </Route>
          <Route path={["/model-factory/:place", "/model-factory"]}>
            <ModelFactoryPage data={data.level2} />
          </Route>
          <Route path={["/model-workshop/:place/:line", "/model-workshop/:place", "/model-workshop"]}>
            <WorkshopModelPage data={data.level3} />
          </Route>
          <Route
            path={[
              "/model-warehouse/:place/:line",
              "/model-warehouse/:place",
              "/model-warehouse",
              "/warehouse/:place/:line",
              "/warehouse/:place",
              "/warehouse",
            ]}
          >
            <WarehouseModelPage data={data.level3} />
          </Route>

          <Route
            exact
            path={["/", "/factory/:place", "/factory", "/workshop/:place/:line", "/workshop/:place", "/workshop"]}
          >
            {({ match }) => (
              <>
                <CSSTransition
                  appear
                  in={match !== null}
                  classNames="headerAnimate"
                  timeout={{
                    appear: 700,
                    enter: 1400,
                    exit: 700
                  }}
                  unmountOnExit
                >
                  <div>
                    <Header />
                  </div>
                </CSSTransition>

                <CSSTransition
                  appear
                  classNames="cardOperationalAnimate"
                  in={match !== null}
                  timeout={{
                    appear: 700,
                    enter: 1400,
                    exit: 700
                  }}
                  unmountOnExit
                >
                  <div>
                    <CardOperational regionName={regionName} />
                  </div>
                </CSSTransition>
              </>
            )}
          </Route>

          <Route exact path={["/"]}>
            {({ match }) => (
              <CSSTransition
                appear
                classNames="regionSelectAnimate"
                in={match !== null}
                timeout={{
                  appear: 700,
                  enter: 1400,
                  exit: 700
                }}
                unmountOnExit
              >
                <div>
                  <RegionSelect regionName={regionName} />
                </div>
              </CSSTransition>
            )}
          </Route>

          <Route
            exact
            path={["/factory/:place", "/factory", "/workshop/:place/:line", "/workshop/:place", "/workshop"]}
          >
            {({ match }) => (
              <>
                <CSSTransition
                  appear
                  in={match !== null}
                  classNames="cardEffectivenessAnimate"
                  timeout={{
                    appear: 700,
                    enter: 2100,
                    exit: 700
                  }}
                  unmountOnExit
                >
                  <div>
                    <CardEffectiveness selectedPeriod={periodName} />
                  </div>
                </CSSTransition>

                <CSSTransition
                  appear
                  in={match !== null}
                  classNames="cardOHSAnimate"
                  timeout={{
                    appear: 700,
                    enter: 1400,
                    exit: 700
                  }}
                  unmountOnExit
                >
                  <div>
                    <CardOHS />
                  </div>
                </CSSTransition>

                <CSSTransition
                  appear
                  in={match !== null}
                  classNames="cardPeriodsAnimate"
                  timeout={{
                    appear: 700,
                    enter: 1400,
                    exit: 700
                  }}
                  unmountOnExit
                >
                  <div>
                    <CardPeriods onPeriodSelect={setPeriodName} selectedPeriod={periodName} />
                  </div>
                </CSSTransition>
              </>
            )}
          </Route>

          <Route exact path="/">
            {({ match }) => (
              <CSSTransition
                appear
                classNames="kpiPageAnimate"
                in={match !== null}
                timeout={{
                  appear: 700,
                  enter: 1400,
                  exit: 700
                }}
                unmountOnExit
              >
                <div>
                  <KPIPage modelData={data.level1} regionName={regionName} />
                </div>
              </CSSTransition>
            )}
          </Route>
          <Route exact path={["/factory/:place", "/factory"]}>
            {({ match }) => (
              <CSSTransition
                appear
                classNames="factoryPageAnimate"
                in={match !== null}
                timeout={{
                  appear: 700,
                  enter: 1400,
                  exit: 700
                }}
                unmountOnExit
              >
                <div>
                  <FactoryPage modelData={data.level2} />
                </div>
              </CSSTransition>
            )}
          </Route>
          <Route exact path={["/workshop/:place/:line", "/workshop/:place", "/workshop"]}>
            {({ match }) => (
              <CSSTransition
                appear
                classNames="workshopPageAnimate"
                in={match !== null}
                timeout={{
                  appear: 700,
                  enter: 1400,
                  exit: 700
                }}
                unmountOnExit
              >
                <div>
                  <WorkshopPage modelData={data.level3} />
                </div>
              </CSSTransition>
            )}
          </Route>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
