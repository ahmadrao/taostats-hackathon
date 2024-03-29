import React from 'react';
import { Row, flexRender } from '@tanstack/react-table';
import { Validator } from '@/types/LandingPage/Validators';


type TableRowProps = {
  row: Row<Validator>;
};

const TableRow: React.FC<TableRowProps> = ({ row }) => {
  return (

    <tr >

      {row.getVisibleCells().map(cell => {
        
        return (
          <td key={cell.id} className={`${ cell.column.id === 'owner' ? 'text-dark-gray' : 'text-dark-white'} text-base font-bold py-[12px] px-[10px]  border-y-[1px] border-[#333]`}>
   
             {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
