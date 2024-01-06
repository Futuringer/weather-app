import { CardDataType, WeatherRequestResponse } from "@/types/types";

export const TransformCardData = (
  data: WeatherRequestResponse,
): CardDataType => {
  return {
    city_id: data.id,
    name: data.name,
    description: data.weather?.[0].description,
    icon: data.weather?.[0].icon,
    temp: data.main.temp,
    temp_min: data.main.temp_min,
    temp_max: data.main.temp_max,
  };
};
