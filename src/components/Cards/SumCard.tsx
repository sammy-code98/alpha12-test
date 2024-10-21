import { IconType } from "react-icons";
import { BiInfoCircle } from "react-icons/bi";

interface SumCardI {
  title: string;
  icon: IconType;
  value: string;
  percentage: string;
  color: string;
}
export default function SumCard({
  title,
  icon: Icon,
  value,
  percentage,
  color,
}: SumCardI): JSX.Element {
  return (
    <div className="p-4 border border-blueLight rounded-md shadow-sm">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <p className="text-gray2 text-lg font-medium dark:text-white">
            {title}
          </p>
          <BiInfoCircle className="text-gray2 text-base dark:text-white" />
        </div>

        <div className="flex items-center gap-2">
          <h3 className="text-2xl text-black dark:text-white font-semibold">
            {value}
          </h3>
          <div className="flex items-center gap-1">
            <Icon className={`text-base ${color}`} />
            <span className={`text-sm font-medium ${color}`}>{percentage}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
