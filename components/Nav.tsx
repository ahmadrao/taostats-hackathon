import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search, CreditCard } from "lucide-react";
import { TopRightMenuItem } from "@/types/Layout/TopRightMenuItem";
import { MenuItem } from "@/types/Layout/MenuItem";
import { TopLeftItem } from "@/types/Layout/TopLeftItem";

const TopBar: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<number>(0);

  const topRightArr: TopRightMenuItem[] = [
    { title: "Visit Corcel.io", icon: "/images/visit.png", width: "144px" },
    { title: "Buy", icon: "/images/dollar.png", width: "77px" },
    { title: "Stake", icon: "/images/stack.png", width: "89px" },
  ];

  const topLeftArr: TopLeftItem[] = [
    { text: "$601.25", color: "white" },
    { text: "24.43%" },
    { text: "Market Cap" },
    { text: "$3.85b", color: "white" },
    { text: "24hr Volume" },
    { text: "$27.97m", color: "white" },
  ];

  const menuArr: MenuItem[] = [
    { id: 1, title: "Subnets" },
    { id: 2, title: "Validators" },
    { id: 3, title: "Developers" },
    { id: 4, title: "Resources" },
  ];

  return (
    <div>
      <div className="px-6 py-2 flex justify-between items-center bg-black border-b border-[#363636]">
        <div className="flex gap-3 items-center h-fit">
          {topLeftArr.map((item, index) => (
            <div
              key={index}
              className={`h-fit items-center font-[400] gap-2 ${
                item.color === "white"
                  ? "text-white"
                  : index === 1
                  ? "text-[#95EE5F]"
                  : "text-[#909090]"
              }
              ${
                index === 3 || index === 4
                  ? " sm:hidden  md:flex lg:flex flex"
                  : "sm:flex md:flex lg:flex flex"
              }
              ${index % 2 !== 0 && "pr-3"}
              ${index === 1 ? "text-[12px]" : "text-[15px]"}
             
              `}
            >
              {index === 0 && <img src="/images/small-logo.png" alt="" />}
              {index === 1 && (
                <div className="bg-[#95EE5F] text-white h-[12px] w-[12px] flex items-center justify-center rounded">
                  <ChevronUp style={{ color: "black" }} />
                </div>
              )}
              {item.text}
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          {topRightArr.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center gap-2 h-[31px] text-[14px] font-[500]
              ${
                index === 0
                  ? "w-[144px]"
                  : index === 1
                  ? "w-[77px]"
                  : "w-[89px]"
              }
              ${index === 2 ? "text-black" : "text-white"}
              rounded-lg  ${index === 2 ? "bg-white" : "bg-[#1F1F1F]"}`}
            >
              <img src={item.icon} alt="" />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-8 py-5 flex justify-between w-full">
        <div className="flex gap-14">
          <img src="/images/main-logo.png" alt="" />
          <div className="bg-[#2E2E2E] p-2 rounded-lg flex gap-4 w-[375px] h-[39px]">
            <Search className="text-[#909090]" />
            <input
              className="border-none font-[400] text-[15px] outline-none bg-transparent w-full text-white placeholder-[#909090]"
              placeholder="Search by Address, Validator or Txn Hash"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex gap-14 text-white text-[16px] font-[500] sm:gap-3 md:gap-3 lg:gap-10 sm:flex-col md:flex-col lg:flex-row">
            {menuArr.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-1 cursor-pointer"
                onClick={() =>
                  setSelectedMenu(selectedMenu === item.id ? 0 : item.id)
                }
              >
                <div>{item.title}</div>
                {item.id === selectedMenu ? <ChevronUp className="h-5 w-10" /> : <ChevronDown className="h-5 w-10"/>}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 text-white rounded-lg px-4 py-2 bg-[#1F1F1F]">
            <span>5xdabgos...</span>
            <CreditCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
