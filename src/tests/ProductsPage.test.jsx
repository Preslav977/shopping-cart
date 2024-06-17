import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "../components/ProductsPage";

describe("should render ProductPage cart component", () => {
  it("it should the content of this component", () => {
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

    expect(screen.queryByTestId("price")).toBeInTheDocument();

    expect(screen.queryByTestId("rating")).toBeInTheDocument();

    expect(screen.queryByTestId("count")).toBeInTheDocument();

    expect(screen.queryByTestId("decrease-quantity")).toBeInTheDocument();

    expect(screen.queryByTestId("product-quantity")).toBeInTheDocument();

    expect(screen.queryByTestId("increase-quantity")).toBeInTheDocument();

    screen.debug();
  });
});
