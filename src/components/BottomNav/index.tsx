import { CgProfile } from "react-icons/cg";
import { FiCalendar, FiHome } from "react-icons/fi";
import { GoNote } from "react-icons/go";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { SidebarRoutes } from "../../types/routes";

export default function BottomNav(): JSX.Element {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white  dark:bg-bgDark shadow-md md:hidden z-40">
      <div className="flex justify-around p-2">
        <NavLink
          to={SidebarRoutes.home}
          className="text-gray-600 dark:text-white flex flex-col items-center space-y-2"
        >
          <FiHome className="text-xl text-gray dark:text-white" />
          <span
            className={`${
              location.pathname === SidebarRoutes.home
                ? "text-primary"
                : "text-gray"
            }`}
          >
            Home
          </span>
          <div
            className={`h-1  w-16 bg-primary rounded absolute left-0 right-0 -top-3 ${
              location.pathname === SidebarRoutes.home ? "block" : "hidden"
            }`}
          ></div>
        </NavLink>

        <NavLink
          to={SidebarRoutes.events}
          className="text-gray-600 dark:text-white flex flex-col items-center space-y-2"
        >
          <FiCalendar className="text-xl text-gray dark:text-white" />
          <span
            className={`${
              location.pathname === SidebarRoutes.events
                ? "text-primary"
                : "text-gray"
            }`}
          >
            Events
          </span>
          <div
            className={`h-1  w-16 bg-primary rounded absolute left-1/4 transform -translate-x-1/3 -top-3 ${
              location.pathname === SidebarRoutes.events ? "block" : "hidden"
            }`}
          ></div>
        </NavLink>

        <NavLink
          to={SidebarRoutes.speakers}
          className="text-gray-600 dark:text-white flex flex-col items-center space-y-2"
        >
          <MdOutlineRecordVoiceOver className="text-xl text-gray dark:text-white" />
          <span>Speakers</span>
          <div
            className={`h-1  bg-primary rounded absolute  left-1/2 transform -translate-x-1/2  -top-3 ${
              location.pathname === SidebarRoutes.speakers ? "block" : "hidden"
            }`}
          ></div>
        </NavLink>

        <NavLink
          to={SidebarRoutes.reports}
          className="text-gray-600 dark:text-white flex flex-col items-center space-y-2"
        >
          <GoNote className="text-xl text-gray dark:text-white" />
          <span>Reports</span>
          <div
            className={`h-1  bg-primary rounded absolute left-1/2 transform -translate-x-1/2   -top-3 ${
              location.pathname === SidebarRoutes.reports ? "block" : "hidden"
            }`}
          ></div>
        </NavLink>

        <NavLink
          to={SidebarRoutes.profile}
          className="text-gray-600 dark:text-white flex flex-col items-center space-y-2"
        >
          <CgProfile className="text-xl text-gray dark:text-white" />

          <span>Profile</span>
          <div
            className={`h-1  bg-primary rounded absolute left-1/2 transform -translate-x-1/2   -top-3 ${
              location.pathname === SidebarRoutes.profile ? "block" : "hidden"
            }`}
          ></div>
        </NavLink>
      </div>
    </div>
  );
}
