import { Link } from "@nextui-org/react";
import { NavLink, useLocation } from "react-router-dom";
import CustomTooltip from "./CustomTooltip";
import { SidebarLinkT } from "./sidebarLinks";

type SidebarProps = {
  isSnapped: boolean;
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
};

export default function SidebarLink(
  props: SidebarProps & Omit<SidebarLinkT, "">
) {
  const Icon = props.icon;
  const location = useLocation();

  const exactLocation =
    props.pathname.split("/").length > 2
      ? location.pathname === props.pathname ||
        location.pathname.includes(props.pathname)
      : props.pathname === "/" && location.pathname.split("/").length === 2;

  const closeSidebar = () => {
    if (props.sidebarOpen) {
      props.setSidebarOpen(false);
    }
  };
  return (
    <CustomTooltip isSnapped={props.isSnapped} title={props.title}>
      <Link
        as={NavLink}
        to={props.pathname}
        end={true}
        onClick={closeSidebar}
        className={`z-10 group relative flex w-full items-center gap-2 rounded-md py-3 px-4  font-medium text-gray dark:text-white  duration-400 ease-in-out transition-width ${
          exactLocation ? "text-primary bg-primaryLight dark:bg-primary" : ""
        }`}
      >
        {Icon && (
          <Icon
            width={4}
            height={4}
            className={`text-gray dark:text-white text-xl text-center ${
              exactLocation && "text-primary bg-primaryLight dark:bg-primary"
            }`}
          />
        )}
        <div
          className={`font-medium text-base text-gray dark:text-white ${
            exactLocation ? "text-primary bg-primaryLight dark:bg-primary" : ""
          } ${
            !props.isSnapped
              ? "animate-sidebar-text-show"
              : "animate-sidebar-text-hide"
          }`}
        >
          {props.title}
        </div>
      </Link>
    </CustomTooltip>
  );
}
