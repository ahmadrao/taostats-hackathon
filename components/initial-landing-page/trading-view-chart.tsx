import React, { useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Chart from "chart.js/auto";

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
    // Define a function to initialize Chart.js
    const initializeChart = () => {
      // Get the canvas context
      const element = document.getElementById("myFilledLineChart");
      let ctx:any;
      if (element instanceof HTMLCanvasElement) {
        ctx = element.getContext("2d");
      }
      // Chart data
      const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Filled Line Chart",
            data: [10, 20, 30, 25, 15, 35, 40],
            fill: true,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            tension: 0.5,
          },
        ],
      };

      // Chart configuration
      const config:any = {
        type: "line",
        data: data,
        options: {},
      };

      // Create the chart
      new Chart(ctx, config);
    };

    // Use setTimeout to delay the execution of initializeChart
    const timeoutId = setTimeout(() => {
      initializeChart();
    }, 0);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);
  return (
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
      <canvas id="myFilledLineChart" width="400" height="400"></canvas>
    </div>
  );
};

export default TradingViewChart;
