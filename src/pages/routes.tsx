import { createBrowserRouter } from "react-router-dom";

import WeatherPage from "./weather/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WeatherPage />,
  },
]);
