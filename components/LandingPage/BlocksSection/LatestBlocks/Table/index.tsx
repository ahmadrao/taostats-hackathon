import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from "@tanstack/react-table";

import Tooltip from "@/components/Tooltip";

import TableHead from "./TableHead";
import TableRow from "./TableRow";
import blockData from "@/utils/data/blocks.json";
import { Block } from "@/types/LandingPage/Blocks";
import { truncateHash } from "@/utils/helpers";
import TextLinkWithArrow from "@/components/TextLinkWithArrow";
import CellWithCopy from "./CellWithCopy";
import TimeAgo from "./TimeAgo";
import { infiniteScrollTableGradient } from "@/utils/svgs";

const fetchSize = 50;

const TableComponent = () => {
  const [data, setData] = useState<Block[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [sorting, setSorting] = useState<SortingState>([
    { id: "height", desc: true },
  ]);
  // const [screenWidth, setScreenWidth] = useState<number>(0);

  // useEffect(() => {
  //   function handleResize() {
  //     setScreenWidth(window.innerWidth);
  //   }
  //   setScreenWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);

  //   handleResize();

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const columns = useMemo<ColumnDef<Block>[]>(
    () => [
      {
        accessorKey: "height",
        header: () => <span className="text-teal-action">Height</span>,
      },
      {
        accessorKey: "specVersion",
        header: "Spec Version",
      },
      {
        accessorKey: "eventCount",
        header: "Events",
      },
      {
        accessorKey: "hash",
        header: "Hash",
        cell: (info) => {
          const valueBeforeChange = info.cell.getValue();

          let cellValue;

          if (window.innerWidth >= 1280) {
            cellValue = truncateHash(info.cell.getValue() as string, 34);
          } else if (window.innerWidth >= 1024) {
            cellValue = truncateHash(info.cell.getValue() as string, 24);
          } else if (window.innerWidth <= 680) {
            cellValue = truncateHash(info.cell.getValue() as string, 16);
          }

          return (
            <div className="flex w-fit gap-[22px]">
              <Tooltip tooltipText={valueBeforeChange as string}>
                <span className="">{cellValue}</span>
              </Tooltip>
              <CellWithCopy value={valueBeforeChange as string} />
            </div>
          );
        },
      },
      {
        accessorKey: "extrinsicCount",
        header: "Extrinsics",
      },

      {
        accessorKey: "timestamp",
        header: "Time",
        cell: (info) => <TimeAgo dateString={info.cell.getValue() as string} />,
      },
      {
        accessorKey: "id",
        header: "",
        cell: (info) => {
          let id = info.cell.getValue();

          return (
            <TextLinkWithArrow
              text="View Block"
              className="m-0"
              link={`/${id}`}
            />
          );
        },
      },
    ],
    []
  );

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

  // Handle scroll to fetch more data
  useEffect(() => {
    const handleScroll = () => {
      const scrollElement = tableContainerRef.current;

      if (!scrollElement) return;
      const { scrollTop, clientHeight, scrollHeight } = scrollElement;
      const isBottom = scrollHeight - scrollTop <= clientHeight * 1.5;
      if (isBottom) {
        fetchMoreData();
      }
    };

    const scrollElement = tableContainerRef.current;
    scrollElement?.addEventListener("scroll", handleScroll);

    return () => scrollElement?.removeEventListener("scroll", handleScroll);
  }, [data.length]);

  return (
    <>
      {infiniteScrollTableGradient}
      <div
        ref={tableContainerRef}
        className={`customScrollbar mt-6 md:mt-[38px] relative max-h-[371px] overflow-auto min-w-[1000px] sm:min-w-[1100px] font-medium`}
      >
        <table className="w-full ">
          <TableHead headerGroups={table.getHeaderGroups()} />
          <tbody className="relative">
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableComponent;
