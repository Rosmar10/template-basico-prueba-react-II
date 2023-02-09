import Card from "../components/Card";
import { usePizzasContext } from "../context/PizzasContext";

export default function Pizzas() {
  const { pizzas } = usePizzasContext()

  return (
    <div>
      <h1>Pizzas</h1>
      <div className="row">
        {
          pizzas.map((item) => {
            return (
              <Card key={item.id} item={item} />
            )

          })}
      </div>
    </div>
  );
}
