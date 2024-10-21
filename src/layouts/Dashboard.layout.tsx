import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Header from "../components/Header";

export default function DashboardLayout(): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <div className="dark:bg-bgDark dark:text-white">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          sidebarOpen={isSidebarOpen}
          setSidebarOpen={setIsSidebarOpen}
        />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />
          <main>
            <div className="mx-auto md:mx-2 max-w-screen-2xl p-4 md:p-6 2xl:p-4">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
