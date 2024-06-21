import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../router/routes";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

describe("should render HomePage component", () => {
  it("should render HomePage content", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart", "/about"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    screen.debug();

    expect(screen.queryByText("Check our").textContent).toMatch(/check our/i);

    expect(screen.queryByText("collection of").textContent).toMatch(
      /collection of/i,
    );

    expect(screen.queryByText("products").textContent).toMatch(/products/i);

    expect(
      screen.queryByText("Step into the world of clothes.").textContent,
    ).toMatch(/step into the world of clothes/i);

    expect(
      screen.queryByText(
        "Experience immersive clothes quality like never before. Embrace the next level of clothes.",
      ).textContent,
    ).toMatch(
      /experience immersive clothes quality like never before. embrace the next level of clothes/i,
    );

    expect(screen.queryByText("Start shopping").textContent).toMatch(
      /start shopping/i,
    );

    expect(screen.queryByText("Meet the new age").textContent).toMatch(
      /meet the new age/i,
    );

    const heading = screen.queryAllByRole("heading", { level: 3 });

    expect(heading[0].textContent).toEqual("Clothes are the new age.");

    expect(screen.queryByTestId("homepage-paragraph")).toBeInTheDocument();

    expect(
      screen.queryByText("Unleash their power. Unleash yours.").textContent,
    ).toMatch(/unleash their power. unleash yours./i);

    expect(screen.queryByRole("heading", { level: 4 }).textContent).toMatch(
      /best clothes quality/i,
    );

    expect(screen.queryByRole("heading", { level: 5 }).textContent).toMatch(
      /world-class composable business./i,
    );

    expect(
      screen.queryByTestId("homepage-description-paragraph"),
    ).toBeInTheDocument();
  });

  it("should render a button with Shop Now text", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart", "/about"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    expect(screen.queryByText("Start shopping").textContent).toMatch(
      /start shopping/i,
    );
  });

  it("should navigate to ProductsPage", async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart", "/about"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const button = screen.queryByText("Start shopping");

    await user.click(button);

    screen.debug();

    const product = await screen.findByText(
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    );

    expect(product).toBeInTheDocument();

    expect(screen.queryAllByText("Shop")[0]).toBeInTheDocument();

    expect(screen.queryByTestId("products-select")).toBeInTheDocument();

    expect(screen.queryByText("All").textContent).toMatch(/all/i);

    expect(screen.queryAllByText("Jewelery")[0].textContent).toMatch(
      /jewelery/i,
    );

    expect(screen.queryByText("Men's Clothing").textContent).toMatch(
      /men's clothing/i,
    );

    expect(screen.queryByText("Women's Clothing").textContent).toMatch(
      /women's clothing/i,
    );

    expect(screen.queryAllByText("Electronics")[0].textContent).toMatch(
      /electronics/i,
    );
  });

  it("should navigate to ProductsPage by clicking the second link", async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart", "/about"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const button = screen.queryByText("Meet the new age");

    await user.click(button);

    screen.debug();

    const product = await screen.findByText(
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    );

    expect(product).toBeInTheDocument();

    expect(screen.queryAllByText("Shop")[0]).toBeInTheDocument();

    expect(screen.queryByTestId("products-select")).toBeInTheDocument();

    expect(screen.queryByText("All").textContent).toMatch(/all/i);

    expect(screen.queryAllByText("Jewelery")[0].textContent).toMatch(
      /jewelery/i,
    );

    expect(screen.queryByText("Men's Clothing").textContent).toMatch(
      /men's clothing/i,
    );

    expect(screen.queryByText("Women's Clothing").textContent).toMatch(
      /women's clothing/i,
    );

    expect(screen.queryAllByText("Electronics")[0].textContent).toMatch(
      /electronics/i,
    );
  });
});
