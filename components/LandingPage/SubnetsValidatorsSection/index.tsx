import React from 'react';
import Subnets from '@/components/LandingPage/SubnetsValidatorsSection/Subnets'; 
import Validators from '@/components/LandingPage/SubnetsValidatorsSection/Validators'; 

const Subnet: React.FC = () => {
  return (
    <div className='bg-[#121212] px-[68px] py-[90px] flex w-full gap-[61px]'>
     <Subnets/>
     <Validators/>
      
    </div>
  );
};

export default Subnet;
