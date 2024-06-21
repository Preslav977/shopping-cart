import App from "../App";
import NavComponent from "../components/NavComponent";
import Homepage from "../components/Homepage";
import FetchProducts from "../api/FetchProducts";
import CartPage from "../components/CartPage";
import AboutPage from "../components/AboutPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            <NavComponent />
            <Homepage />
          </>
        ),
      },
      {
        path: "/products",
        element: (
          <>
            <NavComponent />
            <FetchProducts />
          </>
        ),
      },
      {
        path: "/products/cart",
        element: (
          <>
            <NavComponent />
            <CartPage />
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <NavComponent />
            <AboutPage />
          </>
        ),
      },
    ],
  },
];

export default routes;
