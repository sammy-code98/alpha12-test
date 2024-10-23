import { createBrowserRouter } from "react-router-dom";
import { SidebarRoutes } from "./types/routes";

import DashboardLayout from "./layouts/Dashboard.layout";

import Home from "./pages/Home";
import Events from "./pages/Events";
import ErrorPage from "./modules/ErrorPage";

export const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: SidebarRoutes.home,
        element: <Home />,
      },
      {
        path: SidebarRoutes.events,
        element: <Events />,
      },
    ],
  },
]);
