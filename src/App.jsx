import NavComponent from "./components/NavComponent";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

import "./index.css";

import React from "react";

function App() {
  const [productsToCart, setProductsToCart] = React.useState([]);

  const amountOfProductsInCart = productsToCart.filter(
    (product) => product,
  ).length;

  return (
    <>
      <div className="cartItemsAmount">
        <p data-testid="products-amount">{amountOfProductsInCart}</p>
      </div>
      <NavComponent />
      {/* <Outlet context={[productsToCart, setProductsToCart]} /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
