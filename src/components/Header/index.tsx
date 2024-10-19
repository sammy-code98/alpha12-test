import React from "react";
import { Link } from "react-router-dom";
import { SidebarRoutes } from "../../types/routes";
import { Button, Image } from "@nextui-org/react";
import { FcMenu } from "react-icons/fc";
import logo from "../../assets/Logo.svg";

type HeaderT = {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
};

export default function Header(props: HeaderT): JSX.Element {
  const handleSidebarOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    props.setSidebarOpen(!props.sidebarOpen);
  };
  return (
    <div className="md:hidden sticky top-0 z-10 flex w-full bg-white drop-shadow-1 dark:bg-darkest dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2">
        <div>
          <Link className="flex-shrink-0" to={SidebarRoutes.home}>
            <Image src={logo} alt="logo" />
          </Link>
        </div>

        <div>
          <Button isIconOnly className="z-10" onClick={handleSidebarOpen}>
            <FcMenu className="text-gray dark:text-white text-xl" />
          </Button>
        </div>
      </div>
    </div>
  );
}
