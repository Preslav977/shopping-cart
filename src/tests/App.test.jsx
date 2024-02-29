import { screen, render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import routes from "../router/routes";

describe("it shoud render the correct number of products in the cart", () => {
  it("the amount of the cart should be one", async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    screen.debug();

    const addToCartBtn = await screen.findAllByRole("button");

    const amountOfProducts = screen.queryByTestId("products-amount");

    await user.click(addToCartBtn[0]);

    expect(amountOfProducts.textContent).toEqual("1");
  });
});
