import { getByTestId, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartPage from "../components/CartPage";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

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

    const shopNowBtn = screen.getByTestId("button");

    expect(shopNowBtn).toBeInTheDocument();
  });
});
