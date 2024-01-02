import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./pages/routes";

import "./common/styles/index.scss";

createRoot(document.getElementById("root") as Element).render(
  <RouterProvider router={router} />,
);
