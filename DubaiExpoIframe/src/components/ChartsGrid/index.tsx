import React, { memo, useCallback, useState } from "react";
import classNames from "classnames";

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

import { sendMessage } from "../../utils/sendMessage";
import { padNumber } from "../../utils/padNumber";

import { ReactComponent as RectangleIcon } from "./svg/rectangle.svg";

import styles from "./index.module.css";

const Chart = memo(
  ({
    onTooltipHover,
    values
  }: {
    onTooltipHover: (isActive: boolean | undefined, label: string) => void;
    values: any;
  }) => {
    // @ts-ignore
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={values}
          syncId="chartId"
          margin={{
            top: 10,
            right: 0,
            left: 15,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F3F5" />
          <Tooltip
            content={({ active, label }) => {
              onTooltipHover(active, label);
              return null;
            }}
          />
          <XAxis
            stroke="#B9C1C6"
            dataKey="name"
            fontSize={12}
            padding={{ left: 22, right: 22 }}
            style={{
              fill: "#B9C1C6"
            }}
          />
          <YAxis
            domain={[50, 100]}
            stroke="#B9C1C6"
            fontSize={12}
            style={{
              fill: "#B9C1C6"
            }}
            width={27}
          />
          <Line dataKey="d1" stroke="#3ABEF0" dot={false} />
          <Line dataKey="d2" stroke="#8379F7" dot={false} />
          <Line dataKey="d3" stroke="#A100FF" dot={false} />
          <Line dataKey="d4" stroke="#F5BC51" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
);

const ChartTooltip = ({
  data,
  hoveredData,
  selectedPeriod
}: {
  data: any;
  hoveredData: string | null;
  selectedPeriod: string;
}) => {
  if (!hoveredData || !selectedPeriod) {
    return null;
  }

  return (
    <div className={styles.tooltipWrapper}>
      <table className={styles.tooltipTable}>
        <tbody>
          <tr>
            <th></th>
            <th>Utilization</th>
            <th>Availability</th>
            <th>Quality Rate</th>
          </tr>

          {data.names.map((name: string, i: number) => {
            return (
              <tr key={i}>
                <td>{name}</td>
                {[...Array(3)].map((t, j) => {
                  const value = data.tables[j].data.find(({ name: period }: any) => period === selectedPeriod)?.values[
                    i
                  ];
                  if (!value) {
                    return null;
                  }

                  return <td key={j}>{padNumber(value)}%</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <RectangleIcon className={styles.tooltipRectangle} />
    </div>
  );
};

export const ChartsGrid = ({
  place,
  className,
  data,
  tableData,
  selectedPeriod,
  selectedMachine,
  selectedLine
}: {
  place: string;
  className?: string;
  data: any;
  tableData: any;
  selectedPeriod: string;
  selectedMachine?: string | null;
  selectedLine?: string;
}) => {
  const [hoveredData, setHoveredData] = useState<string | null>(null);
  const handleDataHover = useCallback(
    (isActive: boolean | undefined, label: string) => {
      setHoveredData(isActive ? label : null);
    },
    [setHoveredData]
  );

  if (!data) {
    return null;
  }

  return (
    <div className={styles.chartsGridWrapper}>
      <div className={styles.legend}>
        {data?.names.map((name: string, i: number) => (
          <div
            className={classNames(styles.legendItem, selectedMachine === name && styles.legendItem_active)}
            key={name}
            onClick={() => {
              if (!window.location.hash.includes("workshop")) {
                window.location.hash = `/workshop/${place}/${name}`;
              }

              if (name.includes("Area") || name.includes("Line")) {
                sendMessage("AreaDetails " + JSON.stringify({ EXPLINE: name }));
              } else {
                sendMessage("MachineDetails " + JSON.stringify({ RESDESCR: name, EXPLINE: selectedLine }));
              }
            }}
          >
            <span className={classNames(styles.legendPin, styles[`legendPin${i + 1}`])} />
            {name}
          </div>
        ))}
      </div>
      <div className={styles.charts}>
        <ChartTooltip
          hoveredData={hoveredData}
          data={tableData}
          selectedPeriod={selectedPeriod.replace(/ /g, "").toUpperCase()}
        />
        {data?.charts[selectedPeriod.replace(/ /g, "").toUpperCase()].map(({ name, values }: any) => (
          <div className={styles.chartWrapper} key={name}>
            <div className={styles.chartTitle}>{name}</div>
            <div className={styles.chart}>
              <Chart onTooltipHover={handleDataHover} values={values} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
