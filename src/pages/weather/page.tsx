import { CardsBlock, SearchForm } from "@/components";

import styles from "./page.module.scss";

export default function WeatherPage(): JSX.Element {
  return (
    <div className={styles.content}>
      <h1 className={styles.header}>Weather</h1>
      <SearchForm />
      <CardsBlock />
    </div>
  );
}
