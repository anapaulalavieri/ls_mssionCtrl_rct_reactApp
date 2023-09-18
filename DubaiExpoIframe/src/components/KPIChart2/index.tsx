import React from "react";
import { ComposedChart, Bar, XAxis, ResponsiveContainer, LabelList } from "recharts";

import { padNumber } from "../../utils/padNumber";

const data = [
  {
    name: "Jul",
    l: 3.0
  },
  {
    name: "Aug",
    l: 2.1
  },
  {
    name: "Sep",
    l: 2.9
  },
  {
    name: "Oct",
    l: 2.0
  },
  {
    name: "Nov",
    l: 2.2
  }
];

const BarItem = (props: any) => {
  const { fill, x, y, width, height, index } = props;

  const STROKE_COLORS_BY_INDEX = ["#e9eff8", "#fff", "#fff", "#F6363E", "#FF9900"];
  const COLORS_BY_INDEX = ["#e9eff8", "#fff", "transparent", "transparent", "transparent"];

  return (
    <rect
      fill={COLORS_BY_INDEX[index] || fill}
      x={x + 2}
      y={y + 1}
      width={width - 4}
      height={height - 2}
      rx={2}
      ry={2}
      stroke={STROKE_COLORS_BY_INDEX[index] || fill}
      strokeWidth={2}
    />
  );
};

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, value, index, fill } = props;
  const radius = 10;

  const COLORS_BY_INDEX = ["rgba(39,42,46,0.5)", "#272A2E", "#272A2E", "#F6363E", "#FF9900"];

  return (
    <text
      fontSize={12}
      x={x + width / 2}
      y={y - radius}
      fill={COLORS_BY_INDEX[index] || fill}
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {padNumber(value, 1)}
    </text>
  );
};

export const KPIChart2 = ({ className }: { className?: string }) => {
  return (
    <ResponsiveContainer className={className} width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{
          top: 20,
          right: 5,
          bottom: 0,
          left: -3
        }}
      >
        <Bar dataKey="l" barSize={16} fill="#ffffff" shape={<BarItem />}>
          <LabelList dataKey="l" content={renderCustomizedLabel} />
        </Bar>
        <XAxis
          dataKey="name"
          fontSize={10}
          style={{
            fill: "#858F93"
          }}
          axisLine={false}
          tickLine={false}
          interval={0}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
