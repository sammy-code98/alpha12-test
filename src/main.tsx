import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { router } from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <RouterProvider router={router} />
      </ThemeProvider>
    </NextUIProvider>
  </StrictMode>
);
