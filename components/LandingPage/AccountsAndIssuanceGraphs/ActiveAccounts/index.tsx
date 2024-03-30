import React from 'react'
import { Group } from "@visx/group";
import { curveLinear } from "@visx/curve";
import { LinePath, AreaClosed } from "@visx/shape";
import { scaleTime, scaleLinear } from "@visx/scale";
import { AxisBottom } from "@visx/axis";
import {DataPoint} from '../../../../types/LandingPage/GraphDataSet'
export const background = "transparent";
const nonZeroAccounts: DataPoint[] = [
  { date: new Date(2024, 0, 1), value: 20 },
  { date: new Date(2024, 1, 1), value: 40 },
  { date: new Date(2024, 2, 1), value: 60 },
  { date: new Date(2024, 3, 1), value: 80 },
  { date: new Date(2024, 4, 1), value: 100 },
  { date: new Date(2024, 5, 1), value: 120 },
  { date: new Date(2024, 6, 1), value: 140 },
  { date: new Date(2024, 7, 1), value: 160 },
  { date: new Date(2024, 8, 1), value: 180 },
  { date: new Date(2024, 9, 1), value: 190 },
  { date: new Date(2024, 10, 1), value: 200 },
  { date: new Date(2024, 11, 1), value: 220 },
];

const activeData: DataPoint[] = [
  { date: new Date(2024, 0, 1), value: 10 },
  { date: new Date(2024, 1, 1), value: 20 },
  { date: new Date(2024, 2, 1), value: 30 },
  { date: new Date(2024, 3, 1), value: 40 },
  { date: new Date(2024, 4, 1), value: 50 },
  { date: new Date(2024, 5, 1), value: 60 },
  { date: new Date(2024, 6, 1), value: 70 },
  { date: new Date(2024, 7, 1), value: 80 },
  { date: new Date(2024, 8, 1), value: 100 },
  { date: new Date(2024, 9, 1), value: 120 },
  { date: new Date(2024, 10, 1), value: 130 },
  { date: new Date(2024, 11, 1), value: 150 },
];
const blueOrangeGradient = (
  <linearGradient id="blueOrangeGradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="rgba(255, 139, 37, 1)" />
    <stop offset="100%" stopColor="rgba(182, 135, 94, 0.55)" />
  </linearGradient>
);
const greenFlowGradient = (
  <linearGradient id="greenFlowGradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="rgba(0, 219, 188, 0.8)" />
    <stop offset="80%" stopColor="rgba(148, 215, 230, 0.04)" />{" "}
    {/* Adjusted offset */}
    <stop offset="100%" stopColor="rgba(217, 217, 217, 0)" />
  </linearGradient>
);

const timeScale = scaleTime<number>({
  domain: [
    Math.min(...activeData.map((d) => d.date.getTime())),
    Math.max(...activeData.map((d) => d.date.getTime())),
  ],
});
const valueScale = scaleLinear<number>({
  domain: [
    Math.min(
      ...activeData.map((d) =>
        Math.min(d.value, ...nonZeroAccounts.map((v) => v.value))
      )
    ),
    Math.max(
      ...activeData.map((d) =>
        Math.max(d.value, ...nonZeroAccounts.map((v) => v.value))
      )
    ),
  ],
  nice: true,
});

const defaultMargin = { top: 40, right: 30, bottom: 50, left: 0 };
export type ThresholdProps = {
    width: number;
    height: number;
    margin?: { top: number; right: number; bottom: number; left: number };
  };
const ActiveAccounts=({
    width,
    height,
    margin = defaultMargin,
  }: ThresholdProps) => {
    if (width < 10) return null;

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  timeScale.range([0, xMax]);
  valueScale.range([yMax, 0]);
  return (
      <div className="w-full flex flex-col">
        <div className="text-white flex flex-col gap-2 font-[500]">
          <span className="text-[20px]">Total Active Accounts</span>
          <span className="text-[36px] pt-2 font-[400]">93,741</span>
          <span className="text-[#707070] text-[16px]">14/02/24</span>
        </div>
        <div>
        <svg width={width} height={height}>
          <rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill="transparent"
            rx={14}
          />
          <Group left={margin.left} top={margin.top}>
            <AreaClosed
              data={activeData}
              x={(d) => timeScale(d.date.getTime()) ?? 0}
              y={(d) => valueScale(d.value) ?? 0}
              yScale={valueScale}
              strokeWidth={0}
              fill="url(#blueOrangeGradient)"
              curve={curveLinear}
            />
            <AreaClosed
              data={nonZeroAccounts}
              x={(d) => timeScale(d.date.getTime()) ?? 0}
              y={(d) => valueScale(d.value) ?? 0}
              yScale={valueScale}
              strokeWidth={0}
              fill="url(#greenFlowGradient)" 
              curve={curveLinear}
            />
            <LinePath
              data={activeData}
              curve={curveLinear}
              x={(d) => timeScale(d.date.getTime()) ?? 0}
              y={(d) => valueScale(d.value) ?? 0}
              stroke="#FF8B25"
              strokeWidth={1.5}
            />
            <LinePath
              data={nonZeroAccounts}
              curve={curveLinear}
              x={(d) => timeScale(d.date.getTime()) ?? 0}
              y={(d) => valueScale(d.value) ?? 0}
              stroke="#00DBBC"
              strokeWidth={1.5}
            />
            <AxisBottom
              top={yMax}
              scale={timeScale}
              numTicks={width > 520 ? 10 : 5}
              stroke="#303030"
              tickStroke="#303030"
              tickFormat={(value: any) => {
                const date = new Date(value);
                return date.toLocaleString("default", { month: "short" });
              }}
              tickLabelProps={(value) => ({
                fill: "#303030",
                fontSize: 12,
                dy: "0.5em",
                textAnchor: value === 11 ? "end" : "start"
              })}
            />
          </Group>
          <defs>
            {blueOrangeGradient}
            {greenFlowGradient}
          </defs>
        </svg>
      </div>
      </div>
  )
}

export default ActiveAccounts
