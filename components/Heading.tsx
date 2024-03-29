import React from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: React.FC<HeadingProps> = ({ children, level = 1, className = '', ...props }) => {
    const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  
    const baseStyles = 'text-white font-medium text-xl'; 
    const combinedClasses = `${baseStyles} ${className}`;
  
    return React.createElement(Tag, { className: combinedClasses, ...props }, children);
  };
export default Heading;
