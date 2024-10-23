/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Avatar,
  Button,
  Image,
  ScrollShadow,
  Switch,
  User,
} from "@nextui-org/react";
import logo from "../../assets/Logo.svg";
import { sidebarLinks } from "./sidebarLinks";
import SidebarLink from "./SidebarLink";
import { motion } from "framer-motion";
import CustomTooltip from "./CustomTooltip";
import { FiChevronsLeft, FiSun } from "react-icons/fi";
import { GoMoon } from "react-icons/go";
import { useTheme } from "next-themes";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
};

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const [isSnapped, setIsSnapped] = useState<boolean>(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [toggleTheme, setToggleTheme] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const triggerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const handletoggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setToggleTheme(!toggleTheme);
  };

  const toggleSnapped = useCallback(() => {
    setIsSnapped((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(
    () => setSidebarOpen(false),
    [setSidebarOpen]
  );

  useEffect(() => {
    const clickOutsideHandler = ({ target }: MouseEvent) => {
      if (
        sidebarOpen &&
        !sidebarRef.current?.contains(target as Node) &&
        !triggerRef.current?.contains(target as Node) &&
        !backdropRef.current?.contains(target as Node)
      ) {
        closeSidebar();
      }
    };

    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (sidebarOpen && keyCode === 27) {
        closeSidebar();
      }
    };

    document.addEventListener("click", clickOutsideHandler);
    document.addEventListener("keydown", keyHandler);

    return () => {
      document.removeEventListener("click", clickOutsideHandler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, [sidebarOpen, closeSidebar]);

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (sidebarOpen && keyCode === 27) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen, setSidebarOpen]);

  return (
    <>
      {sidebarOpen && (
        <div
          ref={backdropRef}
          className="fixed inset bg-grayLight bg-opacity-50 z-40"
        ></div>
      )}
      <aside
        className={`absolute left-0 top-0 z-50 flex flex-col items-start justify-start overflow-y-clip bg-white shadow-md transition-transform duration-300 ease-linear dark:bg-darkest lg:static lg:translate-x-0 h-screen ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } ${
          isSnapped ? "animate-sidebar-width-snap" : "animate-sidebar-width-inc"
        }`}
      >
        <div className="w-full flex justify-start">
          <div
            className={`flex w-full items-center justify-between px-6 py-4 `}
          >
            <NavLink
              to="/"
              className={`${
                !isSnapped
                  ? "animate-sidebar-text-show"
                  : "animate-sidebar-text-hide"
              }`}
            >
              <Image src={logo} alt="logo" />
            </NavLink>
          </div>
        </div>

        <div className="w-full flex flex-col overflow-y-auto duration-300 ease-linear">
          <ScrollShadow hideScrollBar={true} as={"nav"} className="p-4">
            <div
              className="overflow-x-hidden w-full"
              onMouseLeave={() => setFocused("")}
            >
              <ul
                className={`flex flex-col space-y-1 ${
                  isSnapped ? "space-y-2" : ""
                }`}
              >
                {sidebarLinks.map((link) => (
                  <li
                    key={link.pathname}
                    onMouseEnter={() => setFocused(link.title)}
                    className="group relative"
                  >
                    <SidebarLink
                      pathname={link.pathname}
                      title={link.title}
                      icon={link.icon}
                      isSnapped={isSnapped}
                      sidebarOpen={sidebarOpen}
                      setSidebarOpen={closeSidebar}
                    />
                    {focused === link.title ? (
                      <motion.div
                        transition={{
                          layout: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        }}
                        className="absolute bottom-0 left-0 right-0 w-full group-hover:text-primary bg-primaryLight dark:bg-primary dark:text-white px-5 pr-8 m-0 z-0 rounded-lg space-x-0"
                        layoutId="highlight"
                      />
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollShadow>

          <div
            className={`w-full overflow-hidden p-4 pt-[calc(100vh-55rem)] space-y-4 ${
              !isSnapped && "w-full"
            }`}
          >
            {isSnapped ? (
              <div className="flex items-center justify-center">
                <CustomTooltip title="Collapse" isSnapped={isSnapped}>
                  <Button
                    isIconOnly
                    className="bg-white dark:bg-transparent"
                    onClick={toggleSnapped}
                  >
                    <FiChevronsLeft className="text-gray dark:text-white text-xl" />
                  </Button>
                </CustomTooltip>
              </div>
            ) : (
              <div className="pt-2 " onClick={toggleSnapped}>
                <div className="transition-all cursor-pointer">
                  <div className="flex items-center gap-2">
                    <FiChevronsLeft className="text-gray dark:text-white text-xl" />
                    <span className="text-gray dark:text-white text-base">
                      Collapse
                    </span>
                  </div>
                </div>
              </div>
            )}

            {isSnapped ? (
              <div className="flex items-center justify-center">
                <CustomTooltip title="Toggle Mood" isSnapped={isSnapped}>
                  <Switch
                    defaultSelected={theme === "dark"}
                    size="md"
                    onChange={() => handletoggleTheme()}
                    thumbIcon={({ isSelected, className }) =>
                      isSelected ? (
                        <GoMoon className={className} />
                      ) : (
                        <FiSun className={className} />
                      )
                    }
                  ></Switch>
                </CustomTooltip>
              </div>
            ) : (
              <div className="pt-2">
                <div className="transition-all">
                  <div className="flex items-center gap-2">
                    <Switch
                      defaultSelected={theme === "dark"}
                      size="md"
                      onChange={() => handletoggleTheme()}
                      thumbIcon={({ isSelected, className }) =>
                        isSelected ? (
                          <GoMoon className={className} />
                        ) : (
                          <FiSun className={className} />
                        )
                      }
                    ></Switch>
                    <span className="text-gray dark:text-white text-base">
                      Dark Mode
                    </span>
                  </div>
                </div>
              </div>
            )}

            {isSnapped ? (
              <div className="flex items-center justify-center">
                <CustomTooltip title="Profile" isSnapped={isSnapped}>
                  <Avatar
                    size="md"
                    showFallback
                    src="https://images.unsplash.com/broken"
                  />
                </CustomTooltip>
              </div>
            ) : (
              <div className="pt-2">
                <div className="transition-all">
                  <User
                    name="Rudra Devi"
                    description="rudra.devi@gmail.com"
                    avatarProps={{
                      src: "https://images.unsplash.com/broken",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
