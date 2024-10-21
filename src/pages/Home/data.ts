import { IconType } from "react-icons";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownRight } from "react-icons/go";

interface SumDetailsI {
  title: string;
  icon: IconType;
  value: string;
  percentage: string;
  color: string;
}

export const sumDetails: SumDetailsI[] = [
  {
    title: "Total Events",
    icon: GoArrowUpRight,
    value: "100,000",
    percentage: "+5.0%",
    color: "text-green",
  },
  {
    title: "Active Speakers",
    icon: GoArrowDownRight,
    value: "25",
    percentage: "-5.0%",
    color: "text-danger",
  },
  {
    title: "Total Registrations",
    icon: GoArrowUpRight,
    value: "300",
    percentage: "+5.0%",
    color: "text-green",
  },
  {
    title: "Total Revenue",
    icon: GoArrowUpRight,
    value: "$500,000",
    percentage: "+5.0%",
    color: "text-green",
  },
];
