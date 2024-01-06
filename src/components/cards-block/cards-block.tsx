import { useUnit } from "effector-react";
import { AnimatePresence, motion } from "framer-motion";

import { $cardsList } from "@/models/model";

import { Card } from "../../components";

import styles from "./cards-block.module.scss";

export function CardsBlock(): JSX.Element {
  const [cardsList] = useUnit([$cardsList]);
  return (
    <ul className={styles.cardsList}>
      {/* TODO сделать Card изоморфным и урать лишшнюю li обертку */}
      <AnimatePresence>
        {cardsList.length > 0 &&
          cardsList.map((item) => (
            <motion.li
              key={item.city_id}
              transition={{
                delay: 0,
              }}
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: -400 }}
            >
              <Card
                city_id={item.city_id}
                description={item.description}
                icon={item.icon}
                name={item.name}
                temp={item.temp}
                temp_max={item.temp_max}
                temp_min={item.temp_min}
              />
            </motion.li>
          ))}
      </AnimatePresence>
    </ul>
  );
}
