import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  textColorClass?: string;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  level = 1,
  className = "",
  textColorClass = "text-white",
  ...props
}) => {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  const defatultSize = "text-lg sm:text-xl";
  const baseStyles = "font-medium ";
  let combinedClasses;
  if (!className) {
    combinedClasses = `${baseStyles} ${textColorClass} ${defatultSize} ${className}`;
  } else {
    combinedClasses = `${baseStyles} ${textColorClass}  ${className}`;
  }

  return React.createElement(
    Tag,
    { className: combinedClasses, ...props },
    children
  );
};
export default Heading;
