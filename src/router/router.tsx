import { createBrowserRouter } from "react-router-dom";
import ToolDetail from "../ToolDetail";
import Home from "../Home";
import MainLayout from "@/layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "tools",
        element: <ToolDetail />,
      },
    ],
  },
]);
