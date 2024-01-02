import { Layout } from "@/components/layout";
import { Collection } from "./collection/page";
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/collection",
        element: <Collection />,
      },
    ],
  },
]);