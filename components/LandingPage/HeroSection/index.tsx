import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import { Group } from "@visx/group";
import { curveLinear } from "@visx/curve";
import { LinePath, AreaClosed } from "@visx/shape";
import { scaleTime, scaleLinear } from "@visx/scale";
import { AxisBottom } from "@visx/axis";
import { DataPoint } from "../../../types/LandingPage/GraphDataSet";

export const background = "transparent";

const volumeData: DataPoint[] = [
  { date: new Date(2024, 0, 1), value: 120 },
  { date: new Date(2024, 1, 1), value: 90 },
  { date: new Date(2024, 2, 1), value: 130 },
  { date: new Date(2024, 3, 1), value: 120 },
  { date: new Date(2024, 4, 1), value: 90 },
  { date: new Date(2024, 5, 1), value: 70 },
  { date: new Date(2024, 6, 1), value: 80 },
  { date: new Date(2024, 7, 1), value: 90 },
  { date: new Date(2024, 8, 1), value: 100 },
  { date: new Date(2024, 9, 1), value: 110 },
  { date: new Date(2024, 10, 1), value: 130 },
  { date: new Date(2024, 11, 1), value: 120 },
];

const tosData: DataPoint[] = [
  { date: new Date(2024, 0, 1), value: 10 },
  { date: new Date(2024, 1, 1), value: 5 },
  { date: new Date(2024, 2, 1), value: 15 },
  { date: new Date(2024, 3, 1), value: 20 },
  { date: new Date(2024, 4, 1), value: 10 },
  { date: new Date(2024, 5, 1), value: 30 },
  { date: new Date(2024, 6, 1), value: 8 },
  { date: new Date(2024, 7, 1), value: 40 },
  { date: new Date(2024, 8, 1), value: 10 },
  { date: new Date(2024, 9, 1), value: 20 },
  { date: new Date(2024, 10, 1), value: 40 },
  { date: new Date(2024, 11, 1), value: 30 },
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
    <stop offset="80%" stopColor="rgba(148, 215, 230, 0.04)" />
    <stop offset="100%" stopColor="rgba(217, 217, 217, 0)" />
  </linearGradient>
);

const defaultMargin = { top: 40, right: 30, bottom: 50, left: 0 };

export type ThresholdProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

const HeroSection = ({
  width,
  height,
  margin = defaultMargin,
}: ThresholdProps) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 0.1) {
      setZoomLevel(zoomLevel - 0.1);
    }
  };

  if (width < 10) return null;

  const timeScale = scaleTime<number>({
    domain: [
      Math.min(...tosData.map((d) => d.date.getTime())),
      Math.max(...tosData.map((d) => d.date.getTime())),
    ],
    range: [0, width - margin.left - margin.right],
  });

  const valueScale = scaleLinear<number>({
    domain: [
      Math.min(
        ...tosData.map((d) =>
          Math.min(d.value, ...volumeData.map((v) => v.value))
        )
      ),
      Math.max(
        ...tosData.map((d) =>
          Math.max(d.value, ...volumeData.map((v) => v.value))
        )
      ),
    ],
    range: [height - margin.top - margin.bottom, 0],
    nice: true,
  });

  const updatedTimeScale = scaleTime<number>({
    domain: timeScale.domain(),
    range: [0, (width - margin.left - margin.right) * zoomLevel],
  });
  
  const updatedValueScale = scaleLinear<number>({
    domain: valueScale.domain(),
    range: [height - margin.top - margin.bottom, 0],
  });
  const tabsArr = [
    {
      id: 1,
      title: "Market Cap",
      value: "$3.85b",
    },
    {
      id: 2,
      title: "24hr Volume",
      value: "$27.97m",
    },
    {
      id: 3,
      title: "Total Supply",
      value: "21,000,000τ",
    },
    {
      id: 4,
      title: "Validating APY",
      value: "19.39%",
    },
    {
      id: 5,
      title: "Staking APY",
      value: "15.9%",
    },
    {
      id: 6,
      title: "Circulating Supply",
      value: "6,246,404τ",
    },
    {
      id: 7,
      title: "Finalised Blocks",
      value: "2,365,427",
    },
    {
      id: 8,
      title: "Signed extrinsics",
      value: "2,365,427",
    },
    {
      id: 9,
      title: "Total Accounts",
      value: "93,741",
    },
    {
      id: 10,
      title: "Transfers",
      value: "286,239",
    },
  ];

  return (
    <div>
      <div className="flex justify-between w-100 p-20">
        <div className="flex flex-col">
          <div className="flex gap-3 items-center text-[#909090] text-[20px]">
            <img src="/images/small-logo.png" alt="" className="h-fit w-fit" />
            <span>Bittensor price (τao)</span>
          </div>
          <div className="text-[64px] font-[400] text-white">$601.24</div>
          <div className="w-fit text-[#95EE5F] flex gap-3 items-center font-[400] text-[16px]">
            <div className="bg-[#95EE5F] text-black h-fit w-fit rounded ">
              <ChevronUp />
            </div>
            24.43%
          </div>
        </div>
        <div className="gap-x-8 gap-y-0 grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {tabsArr.map((item) => (
            <div
              key={item.id}
              className="flex flex-col pt-2 border-t border-[#282828] font-[400]"
            >
              <span className="text-[14px] text-[#707070]">{item.title}</span>
              <span className="text-[20px] text-white">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
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
            {/* Graph elements */}
            <AreaClosed
              data={tosData}
              x={(d) => updatedTimeScale(d.date.getTime())}
              y={(d) => updatedValueScale(d.value)}
              yScale={updatedValueScale}
              strokeWidth={0}
              fill="url(#blueOrangeGradient)"
              curve={curveLinear}
            />
            <AreaClosed
              data={volumeData}
              x={(d) => updatedTimeScale(d.date.getTime())}
              y={(d) => updatedValueScale(d.value)}
              yScale={updatedValueScale}
              strokeWidth={0}
              fill="url(#greenFlowGradient)"
              curve={curveLinear}
            />
            <LinePath
              data={tosData}
              curve={curveLinear}
              x={(d) => updatedTimeScale(d.date.getTime())}
              y={(d) => updatedValueScale(d.value)}
              stroke="#FF8B25"
              strokeWidth={1.5}
            />
            <LinePath
              data={volumeData}
              curve={curveLinear}
              x={(d) => updatedTimeScale(d.date.getTime())}
              y={(d) => updatedValueScale(d.value)}
              stroke="#00DBBC"
              strokeWidth={1.5}
            />
          </Group>
          <AxisBottom
            top={height - margin.bottom}
            scale={updatedTimeScale}
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
        </svg>
        <div className="absolute bottom-16 right-16 text-[16px] font-[500] text-white flex gap-[6px] items-center">
          <span
            className="bg-[#1F1F1F] border 
          border-[#494949] rounded  h-[36px] w-[165px] flex items-center justify-center"
          >
            View Trading View
          </span>
          <div className="flex gap-[2px] items-center justify-center">
            <span
              className="bg-[#1F1F1F] border text-[20px] cursor-pointer
            border-[#494949] rounded h-[36px] w-[41px] flex items-center justify-center"
              onClick={handleZoomIn}
            >
              +
            </span>
            <span
              className="bg-[#1F1F1F] border text-[20px] cursor-pointer
            border-[#494949] rounded h-[36px] w-[41px] flex items-center justify-center"
              onClick={handleZoomOut}
            >
              -
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
