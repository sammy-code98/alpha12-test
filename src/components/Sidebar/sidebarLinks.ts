import { IconType } from "react-icons";
import { SidebarRoutes } from "../../types/routes";
import { FiHome, FiCalendar } from "react-icons/fi";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { GoNote } from "react-icons/go";
import { FaRegBell, FaCog } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";

export type SidebarLinkT = {
  title: string;
  icon: IconType;
  pathname: SidebarRoutes;
};

export const sidebarLinks: SidebarLinkT[] = [
  { title: "Home", icon: FiHome, pathname: SidebarRoutes.home },
  { title: "Events", icon: FiCalendar, pathname: SidebarRoutes.events },
  {
    title: "Speakers",
    icon: MdOutlineRecordVoiceOver,
    pathname: SidebarRoutes.speakers,
  },
  { title: "Reports", icon: GoNote, pathname: SidebarRoutes.reports },
  {
    title: "Notifications",
    icon: FaRegBell,
    pathname: SidebarRoutes.notification,
  },
  {
    title: "Messages",
    icon: IoChatbubblesOutline,
    pathname: SidebarRoutes.messages,
  },
  { title: "Settings", icon: FaCog, pathname: SidebarRoutes.settings },
];
