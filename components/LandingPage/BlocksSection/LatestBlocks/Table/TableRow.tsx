import React from "react";
import { Row, flexRender } from "@tanstack/react-table";
import { Block } from "@/types/LandingPage/Blocks";

type TableRowProps = {
  row: Row<Block>;
};

const TableRow: React.FC<TableRowProps> = ({ row }) => {
  return (
    <tr className="hover:bg-[#d9d9d90d]">
      {row.getVisibleCells().map((cell) => {
        return (
          <td
            key={cell.id}
            className={`${
              cell.column.id === "hash"
                ? "text-dark-gray 2xl:w-[528px]"
                : cell.column.id === "height"
                ? "text-white"
                : "text-dark-white"
            } text-sm sm:text-base  font-medium py-[14px] px-[10px]  border-y-[1px] border-[#333] `}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
