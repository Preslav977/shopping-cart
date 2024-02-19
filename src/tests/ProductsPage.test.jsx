import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "../components/ProductsPage";

describe("testing if the button is rendered in this component", () => {
  it("it should render a button Add to Cart", () => {
    const routes = [
      {
        path: "/",
        element: <ProductsPage />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router}></RouterProvider>);

    expect(screen.queryByText("Add to Cart").textContent).toMatch(
      /add to cart/i,
    );
  });
});
