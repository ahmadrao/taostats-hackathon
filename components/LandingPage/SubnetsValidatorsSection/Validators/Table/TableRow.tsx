import React from "react";
import { Row, flexRender } from "@tanstack/react-table";
import { Validator } from "@/types/LandingPage/Validators";

type TableRowProps = {
  row: Row<Validator>;
};

const TableRow: React.FC<TableRowProps> = ({ row }) => {
  return (
    <tr className="hover:bg-[#d9d9d90d]">
      {row.getVisibleCells().map((cell) => {
        return (
          <td
            key={cell.id}
            className={`${
              cell.column.id === "owner" ? "text-dark-gray" : "text-dark-white"
            } text-sm sm:text-base  font-medium py-[12px] px-[10px]  border-y-[1px] border-[#333]`}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
