export function Card(): JSX.Element {
  return (
    <article>
      <div>
        <h2>Москва</h2>
        <span>-20°</span>
      </div>
      <div>
        <div>
          <p>переменная облачность</p>
          <p>Макс.: -19°, мин.: -21°</p>
        </div>
        <img src="https://openweathermap.org/img/wn/03n@2x.png" alt="" />
      </div>
      <button type="button">x</button>
    </article>
  );
}
