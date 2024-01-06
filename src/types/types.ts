export type WeatherRequestResponse = {
  id: number;
  name: string;
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  cod: number;
};

export type CardDataType = {
  city_id: number;
  name: string;
  description: string;
  icon: string;
  temp: number;
  temp_min: number;
  temp_max: number;
};

export type CardStorageType = Record<string, Omit<CardDataType, "city_id">>;
