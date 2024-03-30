import React from "react";
import Heading from "@/components/Heading";
import Table from "@/components/LandingPage/SubnetsValidatorsSection/Subnets/Table";
import TextLinkWithArrow from "@/components/TextLinkWithArrow";

const Subnet: React.FC = () => {
  return (
    <div className="w-full ">
      <Heading level={2}>Subnets</Heading>
      <div className="overflow-x-auto">
        <Table />
      </div>
      <TextLinkWithArrow
        text="View All Subnets"
        link="/subnets"
        className="mt-4 ml-3"
      />
    </div>
  );
};

export default Subnet;
