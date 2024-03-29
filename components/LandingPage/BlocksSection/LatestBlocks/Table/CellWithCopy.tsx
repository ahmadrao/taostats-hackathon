import Tooltip from '@/components/Tooltip';
import React,{ useState } from 'react';
import {biCopySvg} from '@/utils/svgs';


type CellWithCopyProps = {
    value: string;
  };
const CellWithCopy:  React.FC<CellWithCopyProps>  = ({ value }) => {
    const [tooltipText, setTooltipText] = useState('Copy');

  
    const copyToClipboard = async (text : string) => {
      try {
        await navigator.clipboard.writeText(text);
        setTooltipText('Copied!');
        setTimeout(() => setTooltipText('Copy'), 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    };
  
    return (
  
        <Tooltip tooltipText={tooltipText}>
          <div className='cursor-pointer' onClick={() => copyToClipboard(value)}>
            {biCopySvg}
          </div>
        </Tooltip>
    );
  };
export default CellWithCopy;