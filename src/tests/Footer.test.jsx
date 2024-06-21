import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Footer from "../components/Footer";
import userEvent from "@testing-library/user-event";
import routes from "../router/routes";
import { expect } from "vitest";

describe("should render Footer component with Links", () => {
  it("should render the component correctly and get the textContents", () => {
    const routes = [
      {
        path: "/",
        element: <Footer />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    expect(screen.queryByText("Home").textContent).toMatch(/home/i);

    expect(screen.queryByText("Products").textContent).toMatch(/products/i);

    expect(screen.queryByText("About").textContent).toMatch(/about/i);

    expect(screen.queryByTestId("footer-paragraph")).toBeInTheDocument();

    const shop = screen.queryAllByRole("heading", { level: 6 });

    expect(shop[0].textContent).toMatch(/shop/i);

    expect(screen.queryByText("Jewelery").textContent).toMatch(/jewelery/i);

    expect(screen.queryByText("Mens Clothing").textContent).toMatch(
      /mens clothing/i,
    );

    expect(screen.queryByText("Womens Clothing").textContent).toMatch(
      /womens clothing/i,
    );

    expect(screen.queryByText("Electronics").textContent).toMatch(
      /electronics/i,
    );

    const usefulLinks = screen.queryAllByRole("heading", { level: 6 });

    expect(usefulLinks[1].textContent).toMatch(/useful links/i);

    expect(screen.queryByText("Home").textContent).toMatch(/home/i);

    expect(screen.queryByText("Products").textContent).toMatch(/products/i);

    expect(screen.queryByText("Cart").textContent).toMatch(/cart/i);

    expect(screen.queryByText("About").textContent).toMatch(/about/i);
  });

  it("should navigate  to HomePage", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/products", "/products/cart", "/about"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const user = userEvent.setup();

    const footerLink = screen.getByTestId("footer-home");

    await user.click(footerLink);

    expect(screen.getByTestId("footer-products")).toBeInTheDocument();

    expect(screen.getByTestId("footer-about")).toBeInTheDocument();

    expect(screen.getByTestId("footer-cart")).toBeInTheDocument();
  });

  it("should navigate to ProductsPage", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/products", "/products/cart", "/about"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const user = userEvent.setup();

    const productLink = screen.getByTestId("products");

    await user.click(productLink);

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

  it("should navigate to CartPage", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/products", "/products/cart", "/about"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const user = userEvent.setup();

    const cartLink = screen.getByTestId("cart");

    await user.click(cartLink);

    // screen.debug();

    expect(screen.queryByText("Your cart is empty !").textContent).toMatch(
      /your cart is empty !/i,
    );

    expect(
      screen.queryByText("Click the button to start shopping !").textContent,
    ).toMatch(/click the button to start shopping !/i);

    expect(
      screen.queryByRole("button", { name: "Shop Now" }),
    ).toBeInTheDocument();
  });

  it("should nagivate to AboutPage", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/products", "/products/cart", "/about"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const user = userEvent.setup();

    const aboutLink = screen.getByTestId("about");

    await user.click(aboutLink);

    screen.debug();

    expect(
      screen.queryByText("This store is real, and the products are not fake."),
    ).toBeInTheDocument();

    expect(
      screen.queryByText(
        "Products images and information is provided by FakeStore API.",
      ),
    ).toBeInTheDocument();

    expect(
      screen.queryByText(
        "Home page background photo by charlesdeluvio on Unsplash.",
      ).textContent,
    ).toMatch(/home page background photo by charlesdeluvio on unsplash./i);

    expect(
      screen.queryByText(
        "Home page store logo photo by Manny Becerra on Unsplash.",
      ).textContent,
    ).toMatch(/home page store logo photo by manny becerra on unsplash./i);
  });
});
