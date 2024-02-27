import { screen, render, waitFor, within } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Homepage from "../components/Homepage";
import CartPage from "../components/CartPage";
import FetchProducts from "../api/FetchProducts";
import ProductsPage from "../components/ProductsPage";

describe("it shoud render the correct number of products in the cart", () => {
  it("the amount of the cart should be one", async () => {
    const user = userEvent.setup();

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

    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    const addToCartBtn = await screen.findAllByRole("button");

    const amountOfProducts = screen.queryByTestId("products-amount");

    await user.click(addToCartBtn[0]);

    expect(amountOfProducts.textContent).toEqual("1");

    screen.debug();
  });
});
