import "../app/globals.css";
import React, { useEffect, useState } from "react";
import HeroSection from "@/components/LandingPage/HeroSection";
import AccountsAndIssuanceGraphs from "@/components/LandingPage/AccountsAndIssuanceGraphs";
import BlocksSection from "@/components/LandingPage/BlocksSection";
import SubnetsValidatorsSection from "@/components/LandingPage/SubnetsValidatorsSection";
import Footer from "@/components/LandingPage/Footer";
import Head from "next/head";

const TradingViewChart: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [screenHeight, setScreenHeight] = useState<number>(0);

  useEffect(() => {
    const updateDimensions = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  return (
    <div>
      <Head>
        <title>τaostats</title>
      </Head>

      <HeroSection width={screenWidth} height={0.5 * screenHeight} />
      <SubnetsValidatorsSection />
      <AccountsAndIssuanceGraphs />
      <BlocksSection />
      <Footer />
    </div>
  );
};

export default TradingViewChart;
