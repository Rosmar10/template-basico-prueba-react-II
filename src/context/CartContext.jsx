import React, { createContext, useState } from 'react'



const CartContext = createContext()

export default function CartProvider({ children }) {
    const [menu, setMenu] = useState([])
    const [sumar, setSumar] = useState(0)

    const addMenu = (pizza) => {
        let suma = 0
        const checkIndex = menu.findIndex(item => item.id === pizza.id)

        if (checkIndex < 0) {
            setMenu([...menu,
            {
                desc: pizza.desc,
                id: pizza.id,
                img: pizza.img,
                ingredientes: pizza.ingredients,
                name: pizza.name,
                pice: pizza.price,
                amount: 1
            }]
            )
        } else {
            menu[checkIndex].amount++
        }
        for (const item of menu) {
            suma += item.price * item.amount
        }
        setSumar(suma)

    }

    const removemenu = (pizza) => {
        let suma = 0
        const checkIndex = menu.findIndex(item => item.id === pizza.id)
        !(menu[checkIndex].amount === 1) ? menu[checkIndex].amount-- : null
        for (const item of menu) {
            suma += item.price * item.amount
        }
        setSumar(suma)

    }


    return (
        <CartContext value={{ menu, setMenu, addMenu, sumar, removemenu }}>
            {children}
        </CartContext>
    )
}

export const useCartContext = () => useContext(CartContext)

