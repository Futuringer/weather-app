import { createRoot } from "react-dom/client";

import WeatherPage from "./pages/weather/page";

import "./common/styles/index.scss";

createRoot(document.getElementById("root") as Element).render(<WeatherPage />);
