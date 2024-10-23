import { lazy, Suspense } from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import SumCard from "../../components/Cards/SumCard";
import Carousel from "../../components/Carousel";
import { sumDetails } from "./data";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { LuDownload } from "react-icons/lu";

import EventTable from "../../components/EventTable";
import {
  dateArry,
  nameArry,
  sortArry,
  statusArry,
} from "../../components/EventTable/data";

const Chart = lazy(() => import("../../components/Chart"));

export default function Home(): JSX.Element {
  return (
    <div>
      <div>
        <h3 className="text-2xl text-black font-normal dark:text-white">
          Welcome! here’s your summary
        </h3>
      </div>

      <div className="py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
          {sumDetails.map((sum) => (
            <SumCard
              key={sum.title}
              title={sum.title}
              value={sum.value}
              icon={sum.icon}
              percentage={sum.percentage}
              color={sum.color}
            />
          ))}
        </div>
      </div>

      <div className="py-5 space-y-3">
        <h3 className="text-xl text-black font-medium dark:text-white">
          Event Registrations per month{" "}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Chart />
            </Suspense>
          </div>
          <div>
            <Carousel />
          </div>
        </div>
      </div>

      <div className="py-5">
        <h3 className="text-xl text-black font-medium dark:text-white">
          Events History
        </h3>

        <div className="py-2">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <Input
                  variant="faded"
                  startContent={<IoIosSearch />}
                  placeholder="Search..."
                  type="text"
                />
                <Select placeholder="Date">
                  {dateArry.map((date) => (
                    <SelectItem key={date.key}>{date.label}</SelectItem>
                  ))}
                </Select>
                <Select placeholder="Status">
                  {statusArry.map((status) => (
                    <SelectItem key={status.key}>{status.label}</SelectItem>
                  ))}
                </Select>
                <Select placeholder="Name">
                  {nameArry.map((name) => (
                    <SelectItem key={name.key}>{name.label}</SelectItem>
                  ))}
                </Select>
              </div>
              <div>
                <p className="text-lg text-black font-medium dark:text-white">
                  Displaying 100 results
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row  justify-between items-center gap-4">
              <div className="flex items-center gap-1 w-full md:w-[200px]">
                <span>Sort:</span>
                <Select placeholder="Sort" className="max-w-xs">
                  {sortArry.map((sortA) => (
                    <SelectItem key={sortA.key}>{sortA.label}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex justify-between md:justify-normal w-full gap-2">
                <Button isIconOnly className="bg-white dark:bg-bgDark" variant="bordered">
                  <HiOutlineDotsVertical className="text-xl text-gray2  dark:text-white" />
                </Button>

                <Button
                  variant="bordered"
                  className="bg-white dark:text-white dark:bg-bgDark"
                  startContent={<LuDownload className="text-xl text-gray2 dark:text-white" />}
                >
                  Export
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-2">
          <EventTable />
        </div>
      </div>
    </div>
  );
}
