import React, { useCallback, useState } from "react";

import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

import { ReactComponent as RectangleIcon } from "../ChartsGrid/svg/rectangle.svg";

import styles from "./index.module.css";

const dataByRegionName = {
  global: [
    {
      name: "Sep",
      revenue: 7.48,
      cogs: 5.3,
      profit: 2.24
    },
    {
      name: "Oct",
      revenue: 7.53,
      cogs: 5.2,
      profit: 2.38
    },
    {
      name: "Nov",
      revenue: 7.6,
      cogs: 5.19,
      profit: 2.45
    },
    {
      name: "Dec",
      revenue: 7.57,
      cogs: 5.25,
      profit: 2.38
    },
    {
      name: "Jan",
      revenue: 7.87,
      cogs: 5.39,
      profit: 2.52
    },
    {
      name: "Feb",
      revenue: 6.95,
      cogs: 4.95,
      profit: 2.05
    },
    {
      name: "Mar",
      revenue: 7.78,
      cogs: 5.31,
      profit: 2.5
    },
    {
      name: "Apr",
      revenue: 7.52,
      cogs: 5.2,
      profit: 2.36
    },
    {
      name: "May",
      revenue: 7.69,
      cogs: 5.34,
      profit: 2.4
    },
    {
      name: "Jun",
      revenue: 7.28,
      cogs: 5.26,
      profit: 2.45
    },
    {
      name: "Jul",
      revenue: 7.69,
      cogs: 6.57,
      profit: 1.56
    },
    {
      name: "Aug",
      revenue: 8.12,
      cogs: 6.79,
      profit: 1.67
    }
  ],
  americas: [
    {
      name: "Sep",
      revenue: 1.92,
      cogs: 1.35,
      profit: 0.57
    },
    {
      name: "Oct",
      revenue: 2.17,
      cogs: 1.46,
      profit: 0.73
    },
    {
      name: "Nov",
      revenue: 2.5,
      cogs: 1.42,
      profit: 0.64
    },
    {
      name: "Dec",
      revenue: 2.11,
      cogs: 1.5,
      profit: 0.63
    },
    {
      name: "Jan",
      revenue: 2.16,
      cogs: 1.52,
      profit: 0.66
    },
    {
      name: "Feb",
      revenue: 1.92,
      cogs: 1.4,
      profit: 0.54
    },
    {
      name: "Mar",
      revenue: 2.12,
      cogs: 1.44,
      profit: 0.69
    },
    {
      name: "Apr",
      revenue: 2.06,
      cogs: 1.43,
      profit: 0.64
    },
    {
      name: "May",
      revenue: 2,
      cogs: 1.39,
      profit: 0.63
    },
    {
      name: "Jun",
      revenue: 1.99,
      cogs: 1.43,
      profit: 0.69
    },
    {
      name: "Jul",
      revenue: 2.07,
      cogs: 1.79,
      profit: 0.39
    },
    {
      name: "Aug",
      revenue: 2.18,
      cogs: 1.86,
      profit: 0.43
    }
  ],
  apj: [
    {
      name: "Sep",
      revenue: 2.72,
      cogs: 1.94,
      profit: 0.8
    },
    {
      name: "Oct",
      revenue: 2.72,
      cogs: 1.89,
      profit: 0.83
    },
    {
      name: "Nov",
      revenue: 2.78,
      cogs: 1.91,
      profit: 0.89
    },
    {
      name: "Dec",
      revenue: 2.67,
      cogs: 1.87,
      profit: 0.81
    },
    {
      name: "Jan",
      revenue: 2.83,
      cogs: 1.93,
      profit: 0.91
    },
    {
      name: "Feb",
      revenue: 2.55,
      cogs: 1.75,
      profit: 0.82
    },
    {
      name: "Mar",
      revenue: 2.88,
      cogs: 1.96,
      profit: 0.92
    },
    {
      name: "Apr",
      revenue: 2.75,
      cogs: 1.87,
      profit: 0.88
    },
    {
      name: "May",
      revenue: 2.83,
      cogs: 1.97,
      profit: 0.88
    },
    {
      name: "Jun",
      revenue: 2.8,
      cogs: 1.98,
      profit: 0.98
    },
    {
      name: "Jul",
      revenue: 2.83,
      cogs: 2.38,
      profit: 0.58
    },
    {
      name: "Aug",
      revenue: 2.88,
      cogs: 2.44,
      profit: 0.6
    }
  ],
  emea: [
    {
      name: "Sep",
      revenue: 2.84,
      cogs: 2.01,
      profit: 0.87
    },
    {
      name: "Oct",
      revenue: 2.64,
      cogs: 1.85,
      profit: 0.82
    },
    {
      name: "Nov",
      revenue: 2.77,
      cogs: 1.86,
      profit: 0.92
    },
    {
      name: "Dec",
      revenue: 2.8,
      cogs: 1.87,
      profit: 0.94
    },
    {
      name: "Jan",
      revenue: 2.88,
      cogs: 1.93,
      profit: 0.95
    },
    {
      name: "Feb",
      revenue: 2.48,
      cogs: 1.8,
      profit: 0.7
    },
    {
      name: "Mar",
      revenue: 2.78,
      cogs: 1.93,
      profit: 0.89
    },
    {
      name: "Apr",
      revenue: 2.71,
      cogs: 1.9,
      profit: 0.83
    },
    {
      name: "May",
      revenue: 2.86,
      cogs: 1.99,
      profit: 0.89
    },
    {
      name: "Jun",
      revenue: 2.49,
      cogs: 1.85,
      profit: 0.78
    },
    {
      name: "Jul",
      revenue: 2.8,
      cogs: 2.4,
      profit: 0.59
    },
    {
      name: "Aug",
      revenue: 3.06,
      cogs: 2.49,
      profit: 0.64
    }
  ]
};

const Chart = React.memo(({ currentData, onTooltipRender }: any) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={currentData}
        margin={
          {
            // top: 10,
            // right: 10,
            // bottom: 0,
            // left: -10
          }
        }
      >
        <Tooltip content={onTooltipRender} />
        <YAxis
          fontSize={12}
          axisLine={false}
          tickLine={false}
          style={{
            fill: "#858F93"
          }}
          dx={-10}
        />
        <CartesianGrid strokeDasharray="2 4" vertical={false} stroke="#858F93" />
        <Bar dataKey="revenue" stackId="a" barSize={16} fill="#F0F1F5" shape={<BarItem />} />
        <Bar dataKey="cogs" stackId="a" barSize={16} fill="#9A5AED" shape={<BarItem />} />
        <Line dataKey="profit" stroke="#A95DF1" />
        <XAxis
          dataKey="name"
          dy={0}
          fontSize={10}
          style={{
            fill: "#B4BAC1"
          }}
          axisLine={false}
          tickLine={false}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
});

const BarItem = (props: any) => {
  const { fill, x, y, width, height } = props;
  return <rect fill={fill} x={x} y={y + 1} width={width} height={height - 2} rx={4} ry={4} />;
};

const ContentTooltip = ({ currentData, positionX, hoveredData }: any) => {
  if (!hoveredData) {
    return null;
  }

  // @ts-ignore
  const data = currentData.find(({ name }) => name === hoveredData);

  if (!data) {
    return null;
  }

  return (
    <div
      className={styles.tooltip}
      style={{
        left: positionX
      }}
    >
      <table className={styles.tooltipTable}>
        <tbody>
          <tr>
            <th></th>
            <th>Fact</th>
          </tr>
          <tr>
            <td>Revenue</td>
            <td>{data.revenue}</td>
          </tr>
          <tr>
            <td>COGS</td>
            <td>{data.cogs}</td>
          </tr>
          <tr>
            <td>Gross Profit</td>
            <td>{data.profit}</td>
          </tr>
        </tbody>
      </table>

      <RectangleIcon className={styles.tooltipRectangle} />
    </div>
  );
};

export const KPIChart = ({ regionName }: { regionName: string }) => {
  const [positionX, setPositionX] = useState(0);
  const [hoveredData, setHoveredData] = useState<string | null>(null);

  const handleTooltipRender = useCallback(
    props => {
      setPositionX(props?.coordinate.x || 0);
      setHoveredData(props.active ? props.label : null);
      return null;
    },
    [setHoveredData, setPositionX]
  );

  // @ts-ignore
  const currentData = dataByRegionName[regionName];

  if (!currentData) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <ContentTooltip currentData={currentData} positionX={positionX} hoveredData={hoveredData} />
      <Chart currentData={currentData} onTooltipRender={handleTooltipRender} />
    </div>
  );
};
