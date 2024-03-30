import React from "react";
import FooterText from "@/components/LandingPage/Footer/FooterText";
import FooterLinks from "@/components/LandingPage/Footer/FooterLinks";
import Heading from "@/components/Heading";
import { footerGradientSvg, logo } from "@/utils/svgs";
const Footer: React.FC = () => {
  return (
    <div className="bg-[#121212] overflow-hidden relative px-4 sx:px-[30px] sm:px-12 md:px-16 lg:px-[79px] pt-4 sx:pt-[30px] sm:pt-12 md:pt-16 xl:pt-[87.3px] pb-4 sx:pb-[30px] sm:pb-12 xl:pb-[70px] flex w-full gap-2 lg:gap-[30px] xl:gap-[61px] z-50">
      <div className="z-[-1] scale-[4] sm:scale-[2] md:scale-[1.5] lg:scale-125 xl:scale-100 absolute top-[19%] lg:top-[0] left-[0] w-full h-full">
        {footerGradientSvg}
      </div>
      <div className="xl:pl-[35px] w-full">
        {/* Footer Heading */}
        <div className="pb-8 sm:pb-16  xl:pb-20 flex gap-[30px] items-center">
          <div className="translate-y-[4px]">{logo}</div>
          <Heading level={2} className="text-5xl">
            <div className="flex relative items-center">
              <img
                src="/images/footer-t.png"
                className="absolute top-[-5%] left-[-40px] "
                alt=""
              />{" "}
              aostats
            </div>
          </Heading>
        </div>
        <div className="flex flex-col lg:flex-row max-xl:gap-5 w-full">
          <FooterText />
          <FooterLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
