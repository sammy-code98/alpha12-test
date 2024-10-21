import SumCard from "../../components/Cards/SumCard";
import { sumDetails } from "./data";
import Chart from "../../components/Chart/index";
import Carousel from "../../components/Carousel";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div>
            <Chart />
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
      </div>
    </div>
  );
}
