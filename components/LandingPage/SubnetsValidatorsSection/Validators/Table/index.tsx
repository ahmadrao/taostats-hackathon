import React, { useMemo, useState } from "react";
import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from "@tanstack/react-table";
import Tooltip from "@/components/Tooltip";

import TableHead from "./TableHead";
import Avatar from "@/components/Avatar";

import TableRow from "./TableRow";
import ValidatorData from "@/utils/data/validators.json";
import { Validator } from "@/types/LandingPage/Validators";
import { formatEmission, formatTotal, truncateOwner } from "@/utils/helpers";

const TableComponent = () => {
  const [sorting, setSorting] = useState<SortingState>([
    { id: "network", desc: true },
  ]);

  const columns = useMemo<ColumnDef<Validator>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        cell: (info) => {
          return (
            <div className="flex gap-5">
              <Avatar
                imageUrl={info.row.original.validatorUrl}
                className="bg-[#191919]"
              />
              <span>{info.row.original.name}</span>
            </div>
          );
        },
      },

      {
        accessorKey: "total",
        header: "Total τ",
        cell: (info) => {
          const cellValue = formatTotal(info.cell.getValue() as number);
          return `${cellValue}`;
        },
      },
      {
        accessorKey: "owner",
        header: "Owner",
        cell: (info) => {
          const valueBeforeChange = info.cell.getValue();
          let cellValue = truncateOwner(info.cell.getValue() as string);

          return (
            <Tooltip tooltipText={valueBeforeChange as string}>
              <span>{cellValue}</span>
            </Tooltip>
          );
        },
      },
      {
        accessorKey: "network",
        header: () => <span className="text-teal-action">Network</span>,
        cell: (info) => {
          const cellValue = formatEmission(
            (info.cell.getValue() as number) / 1000000000
          );
          return `${cellValue}`;
        },
        sortType: "number",
        enableSorting: true,
      },
    ],
    []
  );

  const data = useMemo(
    () => ValidatorData.data.validators.nodes.slice(0, 5),
    []
  );

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
    <div className="mt-6 md:mt-[38px]   min-w-[650px] sm:min-w-[683px] font-medium">
      <table className="w-full">
        <TableHead headerGroups={table.getHeaderGroups()} />
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
