import React from 'react';
import { Group } from "@visx/group";
import { curveLinear } from "@visx/curve";
import { LinePath, AreaClosed } from "@visx/shape";
import { scaleTime, scaleLinear } from "@visx/scale";
import { AxisBottom } from "@visx/axis";
import {DataPoint} from '../../../../types/LandingPage/GraphDataSet'
export const background = "transparent";

const stakedIssuanceData: DataPoint[] = [
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

const linearGradients = (
    <linearGradient id="linearGradients" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.37)" />
      <stop offset="100%" stopColor="rgba(188, 188, 188, 0.04)" />
    </linearGradient>
  );
  
const timeScale = scaleTime<number>({
  domain: [
    Math.min(...stakedIssuanceData.map((d) => d.date.getTime())),
    Math.max(...stakedIssuanceData.map((d) => d.date.getTime())),
  ],
});
const valueScale = scaleLinear<number>({
  domain: [
    Math.min(...stakedIssuanceData.map((d) => d.value)),
    Math.max(...stakedIssuanceData.map((d) => d.value)),
  ],
  nice: true,
});

const defaultMargin = { top: 40, right: 30, bottom: 50, left: 0 };

export type ThresholdProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

const StakedIssuance = ({
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
    <div className='w-full'>
      <div className="text-white flex flex-col gap-2 font-[500]">
        <span className="text-[20px]">Staked Issuance</span>
        <span className="text-[36px] pt-2 font-[400]">6,246,404τ</span>
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
              data={stakedIssuanceData}
              x={(d) => timeScale(d.date.getTime()) ?? 0}
              y={(d) => valueScale(d.value) ?? 0}
              yScale={valueScale}
              strokeWidth={0}
              fill="url(#linearGradients)"
              curve={curveLinear}
            />
            <LinePath
              data={stakedIssuanceData}
              curve={curveLinear}
              x={(d) => timeScale(d.date.getTime()) ?? 0}
              y={(d) => valueScale(d.value) ?? 0}
              stroke="#B0B0B0"
              strokeWidth={1.5}
            />
            <AxisBottom
              top={yMax}
              scale={timeScale}
              numTicks={width > 520 ? 10 : 5}
              stroke="#303030"
              tickStroke="#303030"
              tickFormat={(value:any) => {
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
            {linearGradients}
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default StakedIssuance;
