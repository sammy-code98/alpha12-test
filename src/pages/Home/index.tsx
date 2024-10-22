import { lazy, Suspense } from "react";
import { Input } from "@nextui-org/react";
import SumCard from "../../components/Cards/SumCard";
import Carousel from "../../components/Carousel";
import { sumDetails } from "./data";
import { IoIosSearch } from "react-icons/io";

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
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <Input
                variant="faded"
                startContent={<IoIosSearch />}
                placeholder="Search..."
                type="text"
              />
              <Input
                variant="faded"
                startContent={<IoIosSearch />}
                placeholder="Search..."
                type="date"
              />
            </div>
            <div>jeje</div>
          </div>
        </div>
      </div>
    </div>
  );
}
