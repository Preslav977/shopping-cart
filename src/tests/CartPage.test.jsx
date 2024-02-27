import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartPage from "../components/CartPage";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Homepage from "../components/Homepage";
import ProductsPage from "../components/ProductsPage";
import FetchProducts from "../api/FetchProducts";
import { UserEvent } from "@testing-library/user-event";

describe("CartPage component", () => {
  it("should render empty cart page if products are not added", () => {
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
      initialIndex: 2,
    });

    render(<RouterProvider router={router} />);

    expect(screen.queryByText("Your cart is empty !").textContent).toMatch(
      /your cart is empty !/i,
    );

    expect(
      screen.queryByText("Click the button to start shopping !").textContent,
    ).toMatch(/click the button to start shopping !/i);
  });

  it("renders HomePage, when the button is clicked", async () => {
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

  it("should able to render a product in the cart", async () => {
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

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    render(
      <ProductsPage
        productName="Mens Casual Premium Slim Fit T-Shirts"
        productPrice={22.3}
        productRating={4.1}
        productCount={259}
      />,
    );
  });

  it("should able to add a product to the cart and render it", async () => {
    const user = userEvent.setup();

    render(
      <ProductsPage
        productName="Mens Casual Premium Slim Fit T-Shirts"
        productPrice={22.3}
        productRating={4.1}
        productCount={259}
      />,
    );

    const addToCartBtn = screen.getByRole("button", { name: "Add to Cart" });

    await user.click(addToCartBtn);

    expect(
      screen.queryByText("Mens Casual Premium Slim Fit T-Shirts").textContent,
    ).toMatch(/mens casual premium slim fit t-shirts/i);
  });

  it("the cart should be empty, when the product is removed", async () => {
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
      initialIndex: 2,
    });

    render(<RouterProvider router={router} />);

    render(
      <ProductsPage
        productName="Mens Casual Premium Slim Fit T-Shirts"
        productPrice={22.3}
        productRating={4.1}
        productCount={259}
      />,
    );

    const removeProductBtn = screen.queryByTestId("remove-product-btn");

    await user.click(removeProductBtn);

    expect(screen.queryByText("Your cart is empty !").textContent).toMatch(
      /your cart is empty !/i,
    );

    expect(
      screen.queryByText("Click the button to start shopping !").textContent,
    ).toMatch(/click the button to start shopping !/i);
  });

  it("should display property the number of items in the cart", async () => {
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
      initialIndex: 2,
    });

    render(<RouterProvider router={router} />);

    screen.debug();

    expect(screen.queryByText("Your shopping Cart").textContent).toMatch(
      /your shopping cart/i,
    );
  });
});
