import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../router/routes";
import userEvent from "@testing-library/user-event";

describe("should render HomePage component", () => {
  it("should render HomePage content", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart", "/about"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    screen.debug();

    expect(
      screen.queryByText("Welcome to Excalibur Clothing Store").textContent,
    ).toMatch(/welcome to excalibur clothing store/i);

    expect(
      screen.queryByText(
        "Start shopping now, by clicking the button and see all the available products in the store",
      ).textContent,
    ).toMatch(
      /start shopping now, by clicking the button and see all the available products in the store/i,
    );
  });

  it("should render a button with Shop Now text", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart", "/about"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const button = screen.getByTestId("button");

    expect(button).toBeInTheDocument();
  });

  it("should navigate to ProductsPage", async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart", "/about"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const button = screen.queryByTestId("shop-now-btn");

    await user.click(button);

    screen.debug();

    const product = await screen.findByText(
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    );

    expect(product).toBeInTheDocument();

    expect(screen.queryByText("Shop")).toBeInTheDocument();

    expect(screen.queryByTestId("products-select")).toBeInTheDocument();

    expect(screen.queryByText("All").textContent).toMatch(/all/i);

    expect(screen.queryByText("Jewelery").textContent).toMatch(/jewelery/i);

    expect(screen.queryByText("Men's Clothing").textContent).toMatch(
      /men's clothing/i,
    );

    expect(screen.queryByText("Women's Clothing").textContent).toMatch(
      /women's clothing/i,
    );

    expect(screen.queryByText("Electronics").textContent).toMatch(
      /electronics/i,
    );
  });
});
