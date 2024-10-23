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

export default function TablePagination(): JSX.Element {
  return (
    <div className="flex justify-between items-center w-full px-4 mt-4">
      <div className="flex items-center gap-4">
        <Button
          isIconOnly
          className="bg-white dark:bg-bgDark"
          variant="bordered"
        >
          <MdOutlineKeyboardArrowLeft className="text-xl text-gray2  dark:text-white" />
        </Button>
        <Pagination total={10} initialPage={1} />
        <Button
          isIconOnly
          className="bg-white dark:bg-bgDark"
          variant="bordered"
        >
          <MdOutlineKeyboardArrowRight className="text-xl text-gray2  dark:text-white" />
        </Button>
      </div>
      <div className="flex  items-center gap-2">
        <span className="text-lg text-black">Show:</span>

        <Select
          items={filterLimits}
          defaultSelectedKeys={["10"]}
          variant="bordered"
          size="sm"
          className="w-[100px] h-fit"
          classNames={{
            base: "border bg-white dark:bg-darkest dark:border-dark rounded-lg h-full",
          }}
          aria-label="filter-table-data"
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
