import Heading from "@/components/Heading";
import Link from "next/link";
import React from "react";

const FooterLinks: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2 ">
      <div className="grid gap-y-[50px] grid-cols-2 sm:grid-cols-3 2xl:pr-[121px] mb-5 md:mb-8 lg:mb-[62px]">
        {/* BlockChain */}
        <div>
          <Heading level={5} className="text-base ">
            Blockchain
          </Heading>
          <div className="mt-7 flex flex-col gap-[10px]">
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Blocks
              </div>
            </Link>
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Transfers
              </div>
            </Link>
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Delegation
              </div>
            </Link>
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Validators
              </div>
            </Link>
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Accounts
              </div>
            </Link>
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Subnets
              </div>
            </Link>
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Tokenomics
              </div>
            </Link>
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Nakamoto
              </div>
            </Link>
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Kusanagi
              </div>
            </Link>
          </div>
        </div>
        {/* Validators & Resources */}
        <div>
          <Heading level={5} className="text-base ">
            Validators
          </Heading>
          <div className="mt-7 mb-[45px] flex flex-col gap-[10px]">
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Verified Validators
              </div>
            </Link>
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Delegation/Staking
              </div>
            </Link>
          </div>
          <Heading level={5} className="text-base ">
            Resources
          </Heading>
          <div className="mt-7  flex flex-col gap-[10px]">
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Links
              </div>
            </Link>
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Media
              </div>
            </Link>
          </div>
        </div>
        {/* Developers & Apps */}
        <div className=" mb-6 sm:mb-0">
          <Heading level={5} className="text-base ">
            Developers
          </Heading>
          <div className="mt-7 mb-[45px] flex flex-col gap-[10px]">
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Corcel API
              </div>
            </Link>
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Taostats API
              </div>
            </Link>
          </div>
          <Heading level={5} className="text-base ">
            Apps
          </Heading>
          <div className="mt-7  flex flex-col gap-[10px]">
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Corcel Chat
              </div>
            </Link>
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Corcel Image Studio
              </div>
            </Link>
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Corcel Translate
              </div>
            </Link>
            <Link href="/blocks" passHref>
              <div
                className={`hover:underline text-sm text-[#ABABAB]  font-medium  `}
              >
                Corcel Mobile
              </div>
            </Link>
          </div>
        </div>
      </div>
      <p className="font-medium  mb-3 lg:hidden  text-sm text-[#808080]">
        Taostats ©2024
      </p>
      <p className="font-medium  text-sm text-white lg:text-right opacity-60">
        Taostats is funded by public delegation. Support us by delegating{" "}
        <a href="http://" className="underline">
          stake to the taostats.io validator.
        </a>
      </p>
    </div>
  );
};

export default FooterLinks;
