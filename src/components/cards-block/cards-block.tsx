import { useUnit } from "effector-react";

import { $cardsList } from "@/models/model";

import { Card } from "../../components";

import styles from "./cards-block.module.scss";

export function CardsBlock(): JSX.Element {
  const [cardsList] = useUnit([$cardsList]);

  return (
    <ul className={styles.cardsList}>
      {/* TODO сделать Card изоморфным и урать лишшнюю li обертку */}

      {cardsList.map((item) => (
        <li key={item.city_id}>
          <Card
            city_id={item.city_id}
            description={item.description}
            icon={item.icon}
            name={item.name}
            temp={item.temp}
            temp_max={item.temp_max}
            temp_min={item.temp_min}
          />
        </li>
      ))}
    </ul>
  );
}
