import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ProjectDetail from "../Pages/Home/Project/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/projects/:id',
        Component: ProjectDetail
      }
    ],
  },
  
]);
