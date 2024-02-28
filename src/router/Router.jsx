import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Homepage from "../components/Homepage";
import FetchProducts from "../api/FetchProducts";
import CartPage from "../components/CartPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "/products", element: <FetchProducts /> },
        { path: "/products/cart", element: <CartPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
