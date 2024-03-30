import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface TextLinkWithArrowProps {
  text: string;
  link: string;
  className?: string;
}

const TextLinkWithArrow: React.FC<TextLinkWithArrowProps> = ({
  text,
  link,
  className,
}) => {
  return (
    <Link href={link} passHref>
      <div
        className={`hover:underline cursor-pointer w-fit block  gap-2  text-[#8A8989] font-medium flex items-center ${className}`}
      >
        <div className="text-sm sm:text-base ">{text}</div>
        <ArrowUpRight />
      </div>
    </Link>
  );
};

export default TextLinkWithArrow;
