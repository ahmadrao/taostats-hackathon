import React from "react";

import LatestBlocks from "@/components/LandingPage/BlocksSection/LatestBlocks";

const Subnet: React.FC = () => {
  return (
    <div className="bg-[#121212] pt-4 sx:pt-[30px] sm:pt-12 md:pt-16 xl:pt-[90px] px-4 sx:px-[30px] sm:px-12 md:px-16 xl:px-[68px] w-full items-center ">
      <LatestBlocks />
    </div>
  );
};

export default Subnet;
