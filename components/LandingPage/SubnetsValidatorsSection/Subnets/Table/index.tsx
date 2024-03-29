import React, { useMemo, useState } from 'react';
import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from '@tanstack/react-table';
import Tooltip from '@/components/Tooltip';

import TableHead from './TableHead';
import TableRow from './TableRow';
import subnetData from '@/utils/subnets.json';
import { Subnet } from '@/types/LandingPage/Subnets';
import { formatCreatedAt, formatEmission, truncateOwner } from '@/utils/helpers';

const TableComponent = () => {
  const [sorting, setSorting] = useState<SortingState>([
    {id: "emission", desc: true}
]);

  
  const columns = useMemo<ColumnDef<Subnet>[]>(() => [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'timestamp',
      header: 'Created At',
      cell: info => {
       return formatCreatedAt(info.cell.getValue() as string);
      },
    },
    {
      accessorKey: 'owner',
      header: 'Owner',
      cell:(info)=>{
        const valueBeforeChange = info.cell.getValue();
        let cellValue = truncateOwner(info.cell.getValue() as string);  

      return  <Tooltip tooltipText={valueBeforeChange as string}>
            <span>{cellValue}</span>
          </Tooltip>
      }
    },
    {
      accessorKey: 'emission',
      header: () => <span className="text-table-teal">Emission</span>,
      cell: info => {
        const cellValue = formatEmission(info.cell.getValue() as number / 1000000000);
       return `${ cellValue}`
      },
      sortType: 'number',
      enableSorting: true,
 
    },
  ], []);
  // Prepare the data
  const data = useMemo(() => subnetData.data.subnets.nodes.slice(0,5), []);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },

    enableSortingRemoval: false,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
   

  });

  return (
    <div className="mt-[38px] font-medium">
      <table className='w-full'>
        <TableHead headerGroups={table.getHeaderGroups()} />
        <tbody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
