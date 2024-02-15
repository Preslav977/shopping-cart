import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartPage from "../components/CartPage";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Homepage from "../components/Homepage";

describe("CartPage component", () => {
  it("should render empty cart page if products are not added", () => {
    const routes = [
      {
        path: "/",
        element: <CartPage />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    expect(screen.queryByText("Your cart is empty !").textContent).toMatch(
      /your cart is empty !/i,
    );

    expect(
      screen.queryByText("Click the button to start shopping !").textContent,
    ).toMatch(/click the button to start shopping !/i);
  });

  it("renders other HomePage, when the button is clicked", async () => {
    const routes = [
      {
        path: "/",
        element: <App />,
        children: [
          { index: true, element: <Homepage /> },
          { path: "/products/cart", element: <CartPage /> },
        ],
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/products/cart", "/"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const user = userEvent.setup();

    const button = screen.getByTestId("button");

    await user.click(button);

    expect(screen.getByTestId("home")).toBeInTheDocument();

    expect(screen.getByTestId("products")).toBeInTheDocument();

    expect(screen.getByTestId("about")).toBeInTheDocument();

    expect(screen.getByTestId("cart")).toBeInTheDocument();
  });
});
