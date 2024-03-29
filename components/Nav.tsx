import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

const TopBar = () => {
  const [selectedMenu, setSelectedMenu] = useState<Number>(0);
  const topRightArr = [
    { title: "Visit Corcel.io", icon: "/images/visit.png" },
    { title: "Buy", icon: "/images/dollar.png" },
    { title: "Stake", icon: "/images/stack.png" },
  ];
  const topLeftArr = [
    { text: "$601.25", color: "white" },
    { text: "24.43%" },
    { text: "Market Cap" },
    { text: "$3.85b", color: "white" },
    { text: "24hr Volume" },
    { text: "$27.97m", color: "white" },
  ];
  const menuArr = [
    { id: 1, title: "Subnets" },
    { id: 2, title: "Validators" },
    { id: 3, title: "Developers" },
    { id: 4, title: "Resources" },
  ];
  return (
    <div>
      <div className="px-6 py-2 flex justify-between items-center bg-black border-b border-[#363636]">
        <div className="flex gap-3 items-center h-fit">
          {topLeftArr?.map((item, index) => {
            return (
              <div
                key={index}
                className={` h-fit items-center flex gap-2 ${
                  item?.color === "white"
                    ? "text-white"
                    : index === 1
                    ? "text-[#95EE5F]"
                    : "text-[#909090]"
                }`}
              >
                {index === 0 && <img src="/images/small-logo.png" alt="" />}
                {index === 1 && (
                  <div className="bg-[#95EE5F] text-white h-fit rounded">
                    <KeyboardArrowUpIcon />
                  </div>
                )}
                {item?.text}
              </div>
            );
          })}
        </div>

        <div className="flex gap-3">
          {topRightArr?.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex items-center gap-2 
            ${index === 2 ? "text-black" : "text-white"}
            rounded-lg  px-4 py-2 ${index === 2 ? "bg-white" : "bg-[#1F1F1F]"}`}
              >
                <img src={item?.icon} alt="" />
                <div>{item?.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-8 py-5 flex justify-between w-full">
        <div className="flex gap-14">
          <img src="/images/main-logo.png" alt="" />
          <div className="bg-[#2E2E2E] p-2 rounded-lg flex gap-4 w-[370px]">
            <SearchIcon className="text-[#909090]" />
            <input
              className="border-none outline-none bg-transparent w-full text-white placeholder-[#909090]"
              placeholder="Search by Address, Validator or Txn Hash"
            />
          </div>
        </div>
        <div className="flex gap-14">
          <div className="flex gap-8 text-white">
            {menuArr?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-2"
                  onClick={() => {
                    if (item?.id === selectedMenu) {
                      setSelectedMenu(0);
                    } else {
                      setSelectedMenu(item?.id);
                    }
                  }}
                >
                  <div>{item?.title}</div>
                  {item?.id === selectedMenu ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </div>
              );
            })}
          </div>
          <div
            className={`flex items-center gap-3 
             text-white 
            rounded-lg  px-4 py-2 bg-[#1F1F1F]`}
          >
            
            <span>5xdabgos...</span>
            <CreditCardOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
