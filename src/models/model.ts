import {
  attach,
  createEffect,
  createEvent,
  createStore,
  Store,
} from "effector";
import persist from "effector-localstorage";
import { createGate } from "effector-react";

import {
  CardDataType,
  CardStorageType,
  WeatherRequestResponse,
} from "@/types/types";

import { API_KEY, URL_API } from "../utils/const";
import { TransformCardData } from "./transformers";

export const fetchFx = createEffect(async (url: string) => {
  const res = await fetch(url, {
    method: "POST",
  });

  return res.json() as Promise<WeatherRequestResponse>;
});

export const AppGate = createGate();
export const cityDeleted = createEvent<number>();

export const $url = createStore(URL_API);
export const $cities = createStore([]);

// запрос данных погоды по одному городу
export const fetchWeatherByCity = attach({
  effect: fetchFx,
  source: $url,
  mapParams: (params, source) =>
    `${source}weather?q=${params}&lang=ru&APPID=${API_KEY}`,
});

// Данные о погоде в городах в виде объекта для быстрого доступа и хранения в localStorage
export const $cards = createStore<CardStorageType>({})
  .on(fetchFx.doneData, (store, dataCity) => {
    return dataCity.cod !== 200
      ? store
      : { ...store, [dataCity.id]: TransformCardData(dataCity) };
  })
  .on(cityDeleted, (store, id) => {
    const newStore = { ...store };
    delete newStore?.[id];

    return newStore;
  });

// Данные о погоде в городах в виде массива
export const $cardsList: Store<CardDataType[]> = $cards.map((cards) => {
  const acc = [];

  for (const key of Object.keys(cards)) {
    acc.push({ ...cards[key], city_id: +key });
  }

  return acc;
});

//сохраняем значения в localStorage
persist({
  store: $cards,
  key: "cards",
});
