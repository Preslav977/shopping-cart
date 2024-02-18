import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

import "./style.css";

import React from "react";

function App() {
  const [productsToCart, setProductsToCart] = React.useState([
    {
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: "105$",
    },
  ]);

  const amountOfProductsInCart = productsToCart.filter(
    (product) => product,
  ).length;

  return (
    <>
      <div className="cartItemsAmount">
        <p>{amountOfProductsInCart}</p>
      </div>
      <NavBar />
      <Outlet context={[productsToCart, setProductsToCart]} />
      <Footer />
    </>
  );
}

export default App;
