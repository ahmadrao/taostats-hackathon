import React from 'react';
import Heading from '@/components/Heading'; 
import Table from '@/components/LandingPage/SubnetsValidatorsSection/Subnets/Table'; 
import TextLinkWithArrow from '@/components/TextLinkWithArrow';

const Subnet: React.FC = () => {
  return (
    <div className='w-1/2'>
     
      <Heading level={2}>Subnets</Heading>
      <Table/>
      <TextLinkWithArrow text="View All Subnets" link="/subnets" className='mt-4 ml-3' />
    </div>

  );
};

export default Subnet;
