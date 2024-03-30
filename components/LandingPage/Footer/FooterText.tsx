import React from "react";

const FooterText: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2  lg:pt-[35px]">
      <p className="lg:w-[414px] font-medium mb-5 lg:mb-[62px] text-sm text-[#808080]">
        τaostats is a Block Explorer and Analytics Platform for Bittensor, a
        decentralized machine learning network.
        <br />
        <br /> This site is not affiliated with the Opentensor Foundation. The
        content of this website is provided for information purposes only.{" "}
        <br />
        <br /> No claim is made as to the accuracy or currency of the content on
        this site at any time.
        <br />
        <br /> τaosτaτs is created and maintained by{" "}
        <a href="mailto:taostats@mogmachine.com" className="underline">
          mogmachine
        </a>
        . We hope you found it helpful, if you have any suggestions or issues
        please contact us at{" "}
        <a href="mailto:taostats@mogmachine.com" className="underline">
          taostats@mogmachine.com
        </a>
        .
      </p>
      <p className="font-medium hidden lg:block  text-sm text-[#808080]">
        Taostats ©2024
      </p>
    </div>
  );
};

export default FooterText;
