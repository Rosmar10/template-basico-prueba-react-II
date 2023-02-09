import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext"
import PizzasProvider from "./context/PizzasContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <PizzasProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PizzasProvider>
    </CartProvider>
  </React.StrictMode>
);
