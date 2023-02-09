import CartItem from "../components/CartItem";
import { useCartContext } from "../context/CartContext";

export default function Cart() {
  const { sumar, Menu } = useCartContext()

  return (
    <div>
      <h1 className="text-center my-5">Cart</h1>
      <ul className="list-group">
        {Menu.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <li className="list-group-item list-group-item-action active text-end">
          <b>Total: ${sumar}</b>
        </li>
      </ul>
    </div>
  );
}
