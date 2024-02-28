import App from "../App";
import Homepage from "../components/Homepage";
import FetchProducts from "../api/FetchProducts";
import CartPage from "../components/CartPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/products", element: <FetchProducts /> },
      { path: "/products/cart", element: <CartPage /> },
    ],
  },
];

export default routes;
