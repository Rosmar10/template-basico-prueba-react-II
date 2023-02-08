import { createContext, useContext, useEffect, useState } from "react"


export const PizzasContext = createContext()

export default function PizzasContext({ children }) {

    const [pizzas, setPizzas] = useState(null)

    const getPizzas = async () => {
        const res = await fetch('/pizzas.json')
        const data = await res.json()
        setPizzas(data)
    }

    useEffect(() => {
        getPizzas(data)
    }, [])
    if (!pizzas) return <h1>loading</h1>

    return (
        <PizzasContext.Provider value={{ pizzas }}>
            {children}
        </PizzasContext.Provider>
    )

}

export const usePizzasContext = () => useContext(PizzasContext)