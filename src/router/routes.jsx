import App from "../App";
import Homepage from "../components/Homepage";
import FetchProducts from "../api/FetchProducts";
import CartPage from "../components/CartPage";
import AboutPage from "../components/AboutPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/products", element: <FetchProducts /> },
      { path: "/products/cart", element: <CartPage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
];

export default routes;
