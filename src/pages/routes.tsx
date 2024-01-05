import { createBrowserRouter } from "react-router-dom";

import WeatherPage from "./weather/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WeatherPage />,
  },
]);
