import React from 'react';
import Heading from '@/components/Heading'; 
import Table from '@/components/LandingPage/SubnetsValidatorsSection/Validators/Table'; 
import { ArrowUpRight } from 'lucide-react';
import TextLinkWithArrow from '@/components/TextLinkWithArrow';

const Subnet: React.FC = () => {
  return (
    <div className='w-1/2'>
     
      <Heading level={2}>Validators</Heading>
      <Table/>
      <TextLinkWithArrow text="View All Validators" className='mt-4 ml-3' link="/validators" />
    </div>

  );
};

export default Subnet;
