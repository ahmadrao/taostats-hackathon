import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual'
import Tooltip from '@/components/Tooltip';

import TableHead from './TableHead';
import TableRow from './TableRow';
import blockData from '@/utils/blocks.json';
import { Block } from '@/types/LandingPage/Blocks';
import { truncateHash } from '@/utils/helpers';
import TextLinkWithArrow from '@/components/TextLinkWithArrow';
import CellWithCopy from './CellWithCopy';
import TimeAgo from './TimeAgo';
import {infiniteScrollTableGradient} from '@/utils/svgs'


const fetchSize = 50; 

const TableComponent = () => {
  const [data, setData] = useState<Block[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [sorting, setSorting] = useState<SortingState>([
    {id: "height", desc: true}
  ]);


  const columns = useMemo<ColumnDef<Block>[]>(() => [
    {
      accessorKey: 'height',
      header: () => <span className="text-table-teal">Height</span>,
    },
    {
      accessorKey: 'specVersion',
      header: 'Spec Version',
    },
    {
      accessorKey: 'eventCount',
      header: 'Events',
    },
    {
      accessorKey: 'hash',
      header: 'Hash',
      cell:(info)=>{
        const valueBeforeChange = info.cell.getValue();
        let cellValue = truncateHash(info.cell.getValue() as string,34);  

      return  <div className="flex w-fit gap-[22px]">
           <Tooltip tooltipText={valueBeforeChange as string}>
            <span className='w-[320px]'>{cellValue}</span>
          </Tooltip>
       <CellWithCopy value={truncateHash(info.cell.getValue() as string, 34)} />
      </div>
      }
    },
    {
      accessorKey: 'extrinsicCount',
      header: 'Extrinsics',
    },

    {
      accessorKey: 'timestamp',
      header: 'Time',
      cell: (info) => <TimeAgo dateString={info.cell.getValue() as string} />,
    },
    {
      accessorKey: 'id',
      header: '',
      cell:(info)=>{
   
        let id = info.cell.getValue()  

      return  <TextLinkWithArrow text="View Block" className="m-0" link={`/${id}`} />
      }
    },

  ], []);
  
  // const data = useMemo(() => blockData.data.blocks.nodes.slice(0,7), []);
  const blocks: Block[] = useMemo(() => blockData.data.blocks.nodes, []);
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

 


  useEffect(() => {
    setData(blocks.slice(0, fetchSize));
  }, [blocks]);



  const fetchMoreData = () => {
    const nextPageIndex = pageIndex + 1;
    const moreData = blocks.slice(0, fetchSize * (nextPageIndex + 1));
    if (moreData.length > data.length) {
      setData(moreData);
      setPageIndex(nextPageIndex);
    }
  };


  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 50, // Adjust based on your row height
    overscan: 5,
  });

  // Handle scroll to fetch more data
  useEffect(() => {
    const handleScroll = () => {
      const scrollElement = tableContainerRef.current;
      console.log('fetchMoreData',scrollElement)
      if (!scrollElement) return;
      const { scrollTop, clientHeight, scrollHeight } = scrollElement;
      const isBottom = scrollHeight - scrollTop <= clientHeight * 1.5;
      if (isBottom) {
        fetchMoreData();
      }
    };

    const scrollElement = tableContainerRef.current;
    scrollElement?.addEventListener('scroll', handleScroll);

    return () => scrollElement?.removeEventListener('scroll', handleScroll);
  }, [data.length]);

  return (
    <>
      {infiniteScrollTableGradient}
    <div   ref={tableContainerRef} className="mt-[38px] relative max-h-[371px] overflow-auto font-medium ">
    
      <table className="w-full ">
        <TableHead 
         headerGroups={table.getHeaderGroups()} />
        <tbody className='relative' >

          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id} row={row} />
            ))}
        </tbody>
      </table>
    
    </div>
    </>
  );
};

export default TableComponent;


