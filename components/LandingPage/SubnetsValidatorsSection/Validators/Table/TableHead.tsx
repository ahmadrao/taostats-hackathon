import React from "react";
import { HeaderGroup } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import { Validator } from "@/types/LandingPage/Validators";
import { ChevronUp } from "lucide-react";
type TableHeadProps = {
  headerGroups: HeaderGroup<Validator>[];
};

const TableHead: React.FC<TableHeadProps> = ({ headerGroups }) => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                className="text-dark-gray text-sm sm:text-base  text-left py-[12px] px-[10px]"
              >
                {header.isPlaceholder ? null : (
                  <div
                    className={
                      header.column.getCanSort()
                        ? "cursor-pointer select-none flex  items-center gap-1"
                        : ""
                    }
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                    {header.column.getIsSorted() ? (
                      <ChevronUp
                        size={22}
                        className={`${
                          header.column.getIsSorted() === "desc"
                            ? "rotate-180"
                            : ""
                        } transition-transform text-teal-action`}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default TableHead;
