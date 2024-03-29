import "../app/globals.css";

import React, { useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Chart from "chart.js/auto";
import ZoomPlugin from "chartjs-plugin-zoom";
import BlocksSection from "@/components/LandingPage/BlocksSection"
import SubnetsValidatorsSection from "@/components/LandingPage/SubnetsValidatorsSection"

const TradingViewChart = () => {
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

  useEffect(() => {
    const initializeChart = () => {
      // Get the canvas context
      const element = document.getElementById("mainLineChart");
      let ctx:any;
      if (element instanceof HTMLCanvasElement) {
        ctx = element.getContext("2d");
      }
      const blueOrangeGradient = ctx.createLinearGradient(0, 0, 0, 400);
      blueOrangeGradient.addColorStop(0, "rgba(255, 139, 37, 1)");
      blueOrangeGradient.addColorStop(1, "rgba(182, 135, 94, 0.55)");
      const greenFlowGradient = ctx.createLinearGradient(0, 0, 0, 400);
      greenFlowGradient.addColorStop(0, "rgba(0, 219, 188, 0.8)");
      greenFlowGradient.addColorStop(0.5, "rgba(148, 215, 230, 0.04)");
      greenFlowGradient.addColorStop(1, "rgba(217, 217, 217, 0)");
      const months = ["Jan", "Apr", "Aug", "Dec"];
      const data = {
        labels: Array.from({ length: 24 * 6 }, (_, index) => {
          const monthIndex = Math.floor(index / 6) % 4;
          return months[monthIndex];
        }),
        datasets: [
          {
            label: "Tos",
            data: Array.from({ length: 24 * 6 }, (_, index) => {
              const monthIndex = Math.floor(index / 6) % 4;
              const baseValue = monthIndex === 0 ? 200 : 100;
              return baseValue + Math.floor(Math.random() * 100);
            }),
            fill: true,
            backgroundColor: blueOrangeGradient,
            borderColor: "#FF8B25",
            borderWidth: 1,
            tension: 0,
            pointRadius: 0,
            borderJoinStyle: "miter",
            cubicInterpolationMode: "linear",
          },
          {
            label: "Volume",
            data: Array.from({ length: 24 * 6 }, (_, index) => {
              const monthIndex = Math.floor(index / 6) % 4;
              const baseValue = monthIndex === 0 ? 300 : 150;
              return baseValue + Math.floor(Math.random() * 100);
            }),
            fill: true,
            backgroundColor: greenFlowGradient,
            borderColor: "rgba(0, 219, 188, 1)",
            borderWidth: 1,
            tension: 0.5,
            pointRadius: 0,
            borderJoinStyle: "miter",
            cubicInterpolationMode: "linear",
          },
        ],
      };

      const config:any = {
        type: "line",
        data: data,
        options: {
          plugins: {
            tooltip: {
              intersect: false,
            },
          },
          scales: {
            x: {
              display: true,
              position: 'bottom', 
              grid: {
                display: false, 
              },
            },
            y: {
              display: false,
            },
          },
        },
      };
      new Chart(ctx, config);
    };

    const timeoutId = setTimeout(() => {
      initializeChart();
    }, 0);
    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
    const initializeChart = () => {
      // Get the canvas context
      const element = document.getElementById("activeAccounts");
      let ctx:any;
      if (element instanceof HTMLCanvasElement) {
        ctx = element.getContext("2d");
      }

      const blueOrangeGradient = ctx.createLinearGradient(0, 0, 0, 400);
      blueOrangeGradient.addColorStop(0, "rgba(255, 139, 37, 1)");
      blueOrangeGradient.addColorStop(1, "rgba(182, 135, 94, 0.55)");
      const greenFlowGradient = ctx.createLinearGradient(0, 0, 0, 400);
      greenFlowGradient.addColorStop(0, "rgba(0, 219, 188, 0.8)");
      greenFlowGradient.addColorStop(0.5, "rgba(148, 215, 230, 0.04)");
      greenFlowGradient.addColorStop(1, "rgba(217, 217, 217, 0)");
      const months = ["Jan", "Apr", "Aug", "Dec"];
      const data = {
        labels: ["Jan", "Apr", "Aug", "Dec"]
        ,
        datasets: [
          {
            label: "Total Accounts",
            data: [20,30,50,90],
            fill: true,
            backgroundColor: blueOrangeGradient,
            borderColor: "#FF8B25",
            borderWidth: 1,
            tension: 0,
            pointRadius: 0,
            borderJoinStyle: "miter",
            cubicInterpolationMode: "linear",
          },
          {
            label: "Non zero accounts",
            data: [30,40,70,90],
            fill: true,
            backgroundColor: greenFlowGradient,
            borderColor: "rgba(0, 219, 188, 1)",
            borderWidth: 1,
            tension: 0.5,
            pointRadius: 0,
            borderJoinStyle: "miter",
            cubicInterpolationMode: "linear",
          },
        ],
      };

      const config:any = {
        type: "line",
        data: data,
        options: {
          plugins: {
            tooltip: {
              intersect: false,
            },
          },
          scales: {
            x: {
              display: true, 
              position: 'bottom', 
              grid: {
                display: false, 
              },
            },
            y: {
              display: false, 
            },
          },
        },
      };
      
      new Chart(ctx, config);
    };

    const timeoutId = setTimeout(() => {
      initializeChart();
    }, 0);
    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
    const initializeChart = () => {
      const lightGray = "#E0E0E0";
      const mediumGray = "#B0B0B0";
      const darkGray = "#808080";

      // Get the canvas context
      const element = document.getElementById("stakedissuance");
      let ctx:any;
      if (element instanceof HTMLCanvasElement) {
        ctx = element.getContext("2d");
      }
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0.37, lightGray);
      gradient.addColorStop(0.41, mediumGray);
      gradient.addColorStop(0.45, darkGray);

      const months = ["Jan", "Apr", "Aug", "Dec"];
      const data = {
        labels: ["Jan", "Apr", "Aug", "Dec"],
        datasets: [
          {
            label: "Staked Issuance",
            data: [30,50, 80,70],
            fill: true,
            backgroundColor: "rgba(169, 169, 169, 0.2)",
            borderColor: "white",
            borderWidth: 1,
            tension: 0,
            pointRadius: 0,
            borderJoinStyle: "miter",
            cubicInterpolationMode: "linear",
          },
        ],
      };

      const config:any = {
        type: "line",
        data: data,
        options: {
          plugins: {
            tooltip: {
              intersect: false,
            },
          },
          scales: {
            x: {
              display: true,
              position: 'bottom', 
              grid: {
                display: false, 
              },
            },
            y: {
              display: false,
            },
          },
        },
      };
      
      new Chart(ctx, config);
    };

    const timeoutId = setTimeout(() => {
      initializeChart();
    }, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>

    <div>
      <div className="flex justify-between w-100 p-20">
        <div className="flex flex-col">
          <div className="flex gap-3 items-center text-[#909090] text-[20px]">
            <img src="/images/small-logo.png" alt="" className="h-fit w-fit" />
            <span>Bittensor price (τao)</span>
          </div>
          <div className="text-[52px] text-white">$601.24</div>
          <div className="w-fit text-[#95EE5F] flex gap-3 items-center">
            <div className="bg-[#95EE5F] text-black h-fit w-fit rounded text-[16px]">
              <KeyboardArrowUpIcon />
            </div>
            24.43%
          </div>
        </div>
        <div
          className="gap-6 grid 
        grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {tabsArr?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col pt-2 border-t border-[#282828]"
              >
                <span className="text-[14px] text-[#707070]">
                  {item?.title}
                </span>
                <span className="text-[20px] text-white">{item?.value}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[100%]">
        <canvas id="mainLineChart" width="100%"></canvas>
      </div>
    <SubnetsValidatorsSection/>

      <div className="flex gap-10 p-10 w-full">
        <div className="w-1/2 flex flex-col">
          <div className="text-white flex flex-col gap-2">
            <span className="text-[20px]">Total Active Accounts</span>
            <span className="text-[36px] pt-2">93,741</span>
            <span className="text-[#707070]">14/02/24</span>
          </div>
          <div className="w-full">
            <canvas id="activeAccounts" width="100%"></canvas>
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-white flex flex-col gap-2">
            <span className="text-[20px]">Staked Issuance</span>
            <span className="text-[36px] pt-2">6,246,404τ</span>
            <span className="text-[#707070]">14/02/24</span>
          </div>
          <div className="w-full">
            <canvas id="stakedissuance" width="100%"></canvas>
          </div>
        </div>
      </div>
    </div>
    <BlocksSection/>
    </>
  );
};

export default TradingViewChart;