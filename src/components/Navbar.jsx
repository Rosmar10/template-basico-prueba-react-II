import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";


export default function Navbar() {

  const { sumar } = useCartContext()

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
        >
          MamaMía 😋
        </Link>
        <div className="d-flex gap-2">
          <Link
            className="btn btn-outline-light"
            to="/pizzas"
          >
            Pizzas
          </Link>
          <Link
            className="btn btn-outline-info me-2"
            to="/cart"
          >
            Cart: ${sumar}
          </Link>
        </div>
      </div>
    </nav>
  );
}
