// Subnet.tsx
import React from "react";

interface SubnetProps {
  id: string;
  name: string;
  description: string;
  selected?: boolean;
}

const SubnetResult: React.FC<SubnetProps> = ({
  id,
  name,
  description,
  selected = false,
}) => {
  return (
    <div
      className={`hover:bg-[#D9D9D9] hover:bg-opacity-10 ${
        selected && "bg-[#D9D9D9] bg-opacity-10"
      } pt-[17px] pb-[27px] cursor-pointer h-fit pl-[25px] pr-[32px] rounded-lg shadow-sm`}
    >
      <div className="text-teal-action text-[15px]">Subnet</div>
      <h3 className="text-white text-xl uppercase mt-2">
        <strong>{name}</strong> - SUBNET {id}
      </h3>
      <p className="text-[#8B8B8B] text-[15px] mt-3">{description}</p>
    </div>
  );
};

export default SubnetResult;
