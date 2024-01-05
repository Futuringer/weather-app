import { Card, SearchForm } from "@/components";

import styles from "./page.module.scss";

export default function WeatherPage(): JSX.Element {
  return (
    <div className={styles.content}>
      <div className={styles.header}>Weather</div>
      <SearchForm />
      {[1, 2, 3].map((item) => (
        <Card key={item} />
      ))}
    </div>
  );
}
