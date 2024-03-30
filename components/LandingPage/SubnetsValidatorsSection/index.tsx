import React from "react";
import Subnets from "@/components/LandingPage/SubnetsValidatorsSection/Subnets";
import Validators from "@/components/LandingPage/SubnetsValidatorsSection/Validators";

const Subnet: React.FC = () => {
  return (
    <div className="bg-[#121212] px-4 sx:px-[30px] sm:px-12 md:px-16 xl:px-[68px] py-16 xl:py-[90px] grid grid-cols-1 lg:grid-cols-2  w-full gap-[61px]">
      <Subnets />
      <Validators />
    </div>
  );
};

export default Subnet;
