import { Card } from "@/components/card/card";
import { SearchForm } from "@/components/search/search";

export default function WeatherPage(): JSX.Element {
  return (
    <div>
      <h1>Погода</h1>
      <SearchForm />
      {[1, 2, 3].map((item) => (
        <Card key={item} />
      ))}
    </div>
  );
}
