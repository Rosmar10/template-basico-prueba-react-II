import { useCartContext } from "../context/CartContext";



export default function CartItem({ item }) {

  const { addMenu, removeMenu } = useCartContext()

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            className="me-3"
            src={item.img}
            alt="Pizza"
            width="100"
          />
          <div>
            <h5 className="mb-0">{item.name[0].toUpperCase()}{item.name.substring(1)}</h5>
            <small className="text-muted">${item.price}</small>
          </div>
        </div>
        <div className="d-flex gap-1">
          <button className="btn btn-outline-danger btn-sm" onClick={() => removeMenu(item)}>-</button>
          <button className="btn btn-outline-dark btn-sm disabled">{item.amount}</button>
          <button className="btn btn-outline-primary btn-sm" onClick={() => addMenu(item)}>+</button>
        </div>
      </div>
    </li>
  );
}
