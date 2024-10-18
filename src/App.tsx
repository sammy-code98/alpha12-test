import { createBrowserRouter } from "react-router-dom";
import { SidebarRoutes } from "./types/routes";


import DashboardLayout from "./layouts/Dashboard.layout";



import Home from "./pages/Home";



export const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [
      {
        path: SidebarRoutes.home,
        element: <Home />,
      },
    ],
  },
]);
