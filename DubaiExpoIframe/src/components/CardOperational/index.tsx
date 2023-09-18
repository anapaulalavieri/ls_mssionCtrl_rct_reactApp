import React from "react";
import classNames from "classnames";

import { KPICard } from "../KPICard";
import { KPICardItem } from "../KPICardItem";
import { SimpleBarChartLine, SimpleBarChartLineItem } from "../SimpleBarChartLine";

import styles from "./index.module.css";

const dataByRegionName = {
  global: {
    planAdherence: "79.1%",
    planAvailability: "80.7%",
    planAdherenceValues: {
      dtd: 79.1,
      "3day": 79.3,
      wtd: 79.3,
      mtd: 91.6,
      ytd: 95.7
    },
    planAvailabilityValues: {
      dtd: 80.7,
      "3day": 80.7,
      wtd: 80.7,
      mtd: 93.0,
      ytd: 96.6
    }
  },
  americas: {
    planAdherence: "96.4%",
    planAvailability: "98.4%",
    planAdherenceValues: {
      dtd: 96.4,
      "3day": 96.6,
      wtd: 96.7,
      mtd: 97.1,
      ytd: 98.47
    },
    planAvailabilityValues: {
      dtd: 98.4,
      "3day": 98.4,
      wtd: 98.4,
      mtd: 98.5,
      ytd: 99.26
    }
  },
  apj: {
    planAdherence: "92.6%",
    planAvailability: "94.5%",
    planAdherenceValues: {
      dtd: 92.6,
      "3day": 93.1,
      wtd: 93.0,
      mtd: 96.2,
      ytd: 98.3
    },
    planAvailabilityValues: {
      dtd: 94.5,
      "3day": 94.7,
      wtd: 94.7,
      mtd: 97.6,
      ytd: 99.1
    }
  },
  emea: {
    planAdherence: "48.2%",
    planAvailability: "49.2%",
    planAdherenceValues: {
      dtd: 48.2,
      "3day": 48.3,
      wtd: 48.3,
      mtd: 81.6,
      ytd: 90.5
    },
    planAvailabilityValues: {
      dtd: 49.2,
      "3day": 49.2,
      wtd: 49.2,
      mtd: 82.8,
      ytd: 91.4
    }
  }
};

const getStatus = (value: number) => {
  return value < 80 ? "danger" : value < 90 ? "warning" : "normal";
};

export const CardOperational = ({ className, regionName }: { className?: string; regionName: string }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  // @ts-ignore
  const currentData = dataByRegionName[regionName];

  if (!currentData) {
    return null;
  }

  return (
    <KPICard className={classNames(styles.card, className)} hasHover title="Operational" subtitle="DTD">
      <KPICardItem
        animateKpi
        loading={isLoading}
        hoverChildren={
          <SimpleBarChartLine>
            <SimpleBarChartLineItem
              status={getStatus(currentData.planAdherenceValues.dtd)}
              title="DTD"
              value={currentData.planAdherenceValues.dtd}
            />
            <SimpleBarChartLineItem
              status={getStatus(currentData.planAdherenceValues["3day"])}
              title="3 day"
              value={currentData.planAdherenceValues["3day"]}
            />
            <SimpleBarChartLineItem
              status={getStatus(currentData.planAdherenceValues.wtd)}
              title="WTD"
              value={currentData.planAdherenceValues.wtd}
            />
            <SimpleBarChartLineItem
              status={getStatus(currentData.planAdherenceValues.mtd)}
              title="MTD"
              value={currentData.planAdherenceValues.mtd}
            />
          </SimpleBarChartLine>
        }
        kpi={currentData.planAdherence}
        title="Plan Adherence"
      />
      <KPICardItem
        animateKpi
        loading={isLoading}
        hoverChildren={
          <SimpleBarChartLine>
            <SimpleBarChartLineItem
              status={getStatus(currentData.planAvailabilityValues.dtd)}
              title="DTD"
              value={currentData.planAvailabilityValues.dtd}
            />
            <SimpleBarChartLineItem
              status={getStatus(currentData.planAvailabilityValues["3day"])}
              title="3 day"
              value={currentData.planAvailabilityValues["3day"]}
            />
            <SimpleBarChartLineItem
              status={getStatus(currentData.planAvailabilityValues.wtd)}
              title="WTD"
              value={currentData.planAvailabilityValues.wtd}
            />
            <SimpleBarChartLineItem
              status={getStatus(currentData.planAvailabilityValues.mtd)}
              title="MTD"
              value={currentData.planAvailabilityValues.mtd}
            />
          </SimpleBarChartLine>
        }
        kpi={currentData.planAvailability}
        title="Availability"
      />
    </KPICard>
  );
};
