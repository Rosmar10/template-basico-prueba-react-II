import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Pizzas() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("/pizzas.json")
      .then((response) => response.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <div>
      <h1>Pizzas</h1>
      <div className="row">
        {pizzas.map((item) => (
          <Card
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
