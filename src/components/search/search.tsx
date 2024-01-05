import { useState } from "react";

import { SearchIcon } from "@/assets/images/search-icon";

import styles from "./search.module.scss";

export function SearchForm(): JSX.Element {
  const [value, setValue] = useState("");

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    //fetchWeatherByCity(value);
    setValue("");
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="city"
        onChange={handleChange}
        value={value}
        placeholder=" Search for a city or airport"
      />
      <button className={styles.button} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
