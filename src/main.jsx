import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Homepage from "./components/Homepage.jsx";
import CartPage from "./components/CartPage.jsx";
import ProductsPage from "./components/ProductsPage.jsx";
import FetchProducts from "./api/FetchProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      // { path: "/products", element: <ProductsPage /> },
      { path: "/products/cart", element: <CartPage /> },
      { path: "/products", element: <FetchProducts /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
