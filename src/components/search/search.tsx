import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <button type="submit">1</button>
      <input
        type="text"
        name="city"
        onChange={handleChange}
        value={value}
        placeholder="Введите город..."
      />
    </form>
  );
}
