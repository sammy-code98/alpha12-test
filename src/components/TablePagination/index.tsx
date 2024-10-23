/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Pagination, Select, SelectItem } from "@nextui-org/react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const filterLimits = [
  { value: "10", label: "10 rows" },
  { value: "15", label: "15 rows" },
  { value: "30", label: "30 rows" },
  { value: "45", label: "45 rows" },
];

interface PaginationI {
  currentPage: number;
  totalPages: number;
  onPageChange: (arg: number) => void;
  rowsPerPage: number;
  onRowsPerPageChange: any;
  loading: boolean;
}
export default function TablePagination({
  currentPage,
  totalPages,
  onPageChange,
  onRowsPerPageChange,
  rowsPerPage,
  loading,
}: PaginationI): JSX.Element {
  return (
    <div className="flex justify-between items-center w-full md:px-4 mt-4">
      <div className="flex items-center gap-2 md:gap-4">
        <Button
          isIconOnly
          className="bg-white dark:bg-bgDark"
          variant="bordered"
          onClick={() => onPageChange(currentPage - 1)}
          isDisabled={currentPage === 1 || loading}
        >
          <MdOutlineKeyboardArrowLeft className="text-xl text-gray2  dark:text-white" />
        </Button>
        <Pagination
          total={totalPages}
          initialPage={1}
          onChange={onPageChange}
          page={currentPage}
          isDisabled={loading}
        />
        <Button
          isIconOnly
          className="bg-white dark:bg-bgDark"
          variant="bordered"
          onClick={() => onPageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages || loading}
        >
          <MdOutlineKeyboardArrowRight className="text-xl text-gray2  dark:text-white" />
        </Button>
      </div>
      <div className="flex  items-center gap-2">
        <span className="text-lg text-black dark:text-white">Show:</span>

        <Select
          items={filterLimits}
          defaultSelectedKeys={[String(rowsPerPage)]}
          variant="bordered"
          size="sm"
          className="w-[100px] h-fit"
          classNames={{
            base: "border bg-white dark:bg-darkest dark:border-dark rounded-lg h-full",
          }}
          aria-label="filter-table-data"
          onSelectionChange={onRowsPerPageChange}
        >
          {(limit) => (
            <SelectItem key={limit.value} value={limit.value}>
              {limit.label}
            </SelectItem>
          )}
        </Select>
      </div>
    </div>
  );
}
