import React from 'react';
import { Row, flexRender } from '@tanstack/react-table';
import { Subnet } from '@/types/LandingPage/Subnets';


type TableRowProps = {
  row: Row<Subnet>;
};

const TableRow: React.FC<TableRowProps> = ({ row }) => {


  return (

    <tr  >

      {row.getVisibleCells().map(cell => {
  

        return (
          <td key={cell.id} className={`${ cell.column.id === 'height' ? 'text-table-zeal' : 'text-dark-white'} text-base font-bold py-[14px] px-[10px]  border-y-[1px] border-[#333]`}>
   
   {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
