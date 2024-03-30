import React from "react";
import Heading from "@/components/Heading";
import Table from "@/components/LandingPage/BlocksSection/LatestBlocks/Table";
import TextLinkWithArrow from "@/components/TextLinkWithArrow";

const LatestBlocks: React.FC = () => {
  return (
    <div className="w-full  relative border-b-[1px] pb-8 sm:pb-16 pb-16 xl:pb-[90px] border-[#333]">
      <div className="flex gap-2 sm:gap-[20px] items-center">
        <Heading level={2} className="text-lg sm:text-xl pl-[10px]">
          Latest Blocks
        </Heading>
        <TextLinkWithArrow
          text="View Recent Blocks"
          className="m-0"
          link="/recent-blocks"
        />
      </div>
      <div className="overflow-x-auto">
        <Table />
      </div>
    </div>
  );
};

export default LatestBlocks;
