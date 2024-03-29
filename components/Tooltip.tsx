import React, { useState, useEffect, ReactElement } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

interface CustomTooltipProps {
  children: ReactElement;
  tooltipText: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ children, tooltipText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    setIsOpen(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 2000);
    setTimeoutId(id);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => setIsOpen(true), 0); 
    }
  }, [tooltipText]);

  return (
    <Tooltip.Provider>
      <Tooltip.Root open={isOpen} onOpenChange={setIsOpen}>
        <Tooltip.Trigger asChild onClick={handleClick}>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            key={tooltipText}
            className="radix-side-top:animate-slideDownAndFade radix-side-right:animate-slideLeftAndFade radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade bg-black text-white px-3 py-2 rounded-md text-base"
            sideOffset={5}
          >
            {tooltipText}
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default CustomTooltip;
