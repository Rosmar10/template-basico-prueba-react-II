import { Link } from "react-router-dom";
import Pizza from "../pages/Pizza";
import Pizzas from "../pages/Pizzas";
import Boton from "./Boton";



export default function Card(pizza) {
  return (
    <article className="mb-2 col-12 col-md-6 col-xl-3">
      <div className="card">
        <img
          src={Pizza.item.img}
          className="card-img-top"
          alt="card description"
        />
        <div className="card-body">
          <h2>
            <b>{Pizza.item.name[0].toUpperCase()}{Pizza.item.name.substring(1)}</b>
          </h2>
          <h6>Ingrediente</h6>
          <ul>
            {Pizza.item.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h5>
            <b>Precio:${Pizza.item.price}</b>
          </h5>
          <div className="d-flex gap-2">
            <Boton pizza={pizza.item} />
            <Link
              to={`/pizzas/${pizza.item.id}`}
              className="btn btn-outline-danger"
            >
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
