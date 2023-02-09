import { Button } from "react-bootstrap"
import { useCartContext } from "../context/CartContext"


export default function Boton({ pizza }) {
    const { addMenu } = useCartContext()

    return (
        <Button variant="outline-primary" onclick={() => addMenu(pizza)}>Comprar</Button>
    )
}

