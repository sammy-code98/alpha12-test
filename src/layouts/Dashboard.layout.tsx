import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout(): JSX.Element {
  return (
    <div className="dark:bg-bgDark dark:text-white">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <div>header component</div>
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
