import { useUnit } from "effector-react";

import { DeleteIcon } from "@/assets";
import { cityDeleted } from "@/models/model";
import { CardDataType } from "@/types/types";

import styles from "./card.module.scss";

type Props = CardDataType;

export function Card({
  description,
  icon,
  name,
  temp,
  temp_max,
  temp_min,
  city_id,
}: Props): JSX.Element {
  const deleteCity = useUnit(cityDeleted);
  const getTemp = (temp: number) => Math.round(temp - 273);
  const onDeleteClick = () => {
    deleteCity(city_id);
  };

  return (
    <article className={styles.card}>
      <div className={styles.rowContainer}>
        <span className={styles.temperature}>{getTemp(temp)}°</span>
        <img
          className={styles.image}
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt=""
        />
      </div>
      <div className={styles.descriptionRow}>
        <div>
          <p className={styles.maxTemperatures}>
            H: {getTemp(temp_max)}°, L: {getTemp(temp_min)}°
          </p>
          <p className={styles.city}>{name}</p>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <button className={styles.button} onClick={onDeleteClick} type="button">
        <DeleteIcon className={styles.icon} />
      </button>
    </article>
  );
}
