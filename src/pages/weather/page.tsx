import { useGate } from "effector-react";

import { CardsBlock, SearchForm } from "@/components";
import { AppGate } from "@/models/model";

import styles from "./page.module.scss";

export default function WeatherPage(): JSX.Element {
  useGate(AppGate);

  return (
    <div className={styles.content}>
      <div className={styles.header}>Weather</div>
      <SearchForm />
      <CardsBlock />
    </div>
  );
}
