// Subnet.tsx
import Tooltip from "@/components/Tooltip";
import { truncateOwner } from "@/utils/helpers";
import React from "react";

interface SubnetProps {
  address: string;
  balanceToken: string;
  delegatedPercentage: string;
  selected?: boolean;
}

const AccountResult: React.FC<SubnetProps> = ({
  address,
  balanceToken,
  delegatedPercentage,
  selected = false,
}) => {
  return (
    <div
      className={`hover:bg-[#D9D9D9] hover:bg-opacity-10 ${
        selected && "bg-[#D9D9D9] bg-opacity-10"
      } pt-[17px] cursor-pointer pb-[27px] h-fit pl-[25px] pr-[30px] rounded-lg shadow-sm`}
    >
      <div className="flex gap-4 sm:gap-0">
        <div className="sm:mr-[116px] text-[15px]">
          <div className="text-teal-action  ">Account</div>
          <div className="mt-3">
            {" "}
            <Tooltip tooltipText={address as string}>
              <span>{truncateOwner(address as string, 31)}</span>
            </Tooltip>
          </div>
        </div>
        <div className="sm:mr-[40px]">
          <div className="text-[#6E6E6E]  ">Token Balance</div>
          <div className="mt-3 text-[16px] text-dark-white">
            {(+balanceToken).toFixed(2)}τ
          </div>
        </div>
        <div>
          <div className="text-[#6E6E6E]">% Delegated</div>
          <div className="mt-3 text-[16px] text-dark-white">
            {(+delegatedPercentage).toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountResult;
