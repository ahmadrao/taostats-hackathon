import React from 'react';
import Heading from '@/components/Heading'; 
import Table from '@/components/LandingPage/BlocksSection/LatestBlocks/Table'; 
import TextLinkWithArrow from '@/components/TextLinkWithArrow';

const Subnet: React.FC = () => {
  return (
    <div className='w-full relative'>
     <div className="flex gap-[20px] items-center">
      <Heading level={2}>Latest Blocks</Heading>
      <TextLinkWithArrow text="View Recent Blocks" className="m-0" link="/recent-blocks" />
     </div >
      <Table/>
    </div>

  );
};

export default Subnet;
