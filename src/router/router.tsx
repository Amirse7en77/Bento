import { createBrowserRouter } from "react-router-dom";
import ToolDetail from "./../pages/ToolDetail";
import Home from "./../pages/Home";
import MainLayout from "@/layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "tools/:toolsId",
        element: <ToolDetail />,
      },
    ],
  },
]);
