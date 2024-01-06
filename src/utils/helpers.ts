import { CardDataType } from "@/types/types";

export const replaceObjectById = (
  obj: CardDataType,
  arr: CardDataType[],
): CardDataType[] => {
  const index = arr.findIndex((item) => item.city_id === obj.city_id);
  if (index !== -1) {
    arr[index] = obj;
  } else {
    arr.push(obj);
  }
  return arr;
};
