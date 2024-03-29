import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "../components/ProductsPage";
import routes from "../router/routes";

describe("should render CartPage component", () => {
  it("should render empty cart page if products are not added", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart", "/about"],
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

  it("should navigate to HomePage", async () => {
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

  it("Should nagivate to ProductsPage, when cart is emtpy", async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart", "/about"],
      initialIndex: 2,
    });

    render(<RouterProvider router={router} />);

    expect(screen.queryByText("Your cart is empty !").textContent).toMatch(
      /your cart is empty !/i,
    );

    expect(
      screen.queryByText("Click the button to start shopping !").textContent,
    ).toMatch(/click the button to start shopping !/i);

    const shopNowBtn = screen.queryByTestId("shop-now-btn");

    await user.click(shopNowBtn);

    screen.debug();
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

    screen.debug();

    expect(
      screen.queryByText("Mens Casual Premium Slim Fit T-Shirts").textContent,
    ).toMatch(/mens casual premium slim fit t-shirts/i);

    const productPrice = screen.queryByTestId("price");

    const productRating = screen.queryByTestId("rating");

    const productCount = screen.queryByTestId("count");

    expect(productPrice.textContent).toEqual("22.3$");

    expect(productRating.textContent).toEqual("4.1");

    expect(productCount.textContent).toEqual("259");
  });

  it("the cart should be empty, when the product is removed", async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart", "/about"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    const addToCartBtn = await screen.findAllByRole("button");

    const cartIcon = screen.queryByTestId("cart");

    await user.click(addToCartBtn[0]);

    await user.click(cartIcon);

    screen.debug();

    const removeProductBtn = screen.queryByTestId("remove-product-btn");

    await user.click(removeProductBtn);

    screen.debug();

    expect(screen.queryByText("Your cart is empty !").textContent).toMatch(
      /your cart is empty !/i,
    );

    expect(
      screen.queryByText("Click the button to start shopping !").textContent,
    ).toMatch(/click the button to start shopping !/i);
  });

  it("should display property the number of items in the cart", async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart", "/about"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    const addToCartBtn = await screen.findAllByRole("button");

    const cartIcon = screen.queryByTestId("cart");

    await user.click(addToCartBtn[0]);

    await user.click(cartIcon);

    const cartItems = screen.queryByTestId("product-items");

    expect(screen.queryByText("Your cart is empty !")).not.toBeInTheDocument();

    expect(
      screen.queryByText("Click the button to start shopping !"),
    ).not.toBeInTheDocument();

    expect(screen.queryByText("Your shopping Cart")).toBeInTheDocument();

    expect(cartItems.textContent).toEqual("1 items");

    expect(screen.queryByText("Estimated Total")).toBeInTheDocument();

    expect(screen.queryByTestId("checkout-button")).toBeInTheDocument();

    // screen.debug();
  });

  it("should render increased quantity of a product", async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart", "/about"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    const addToCartBtn = await screen.findAllByRole("button");

    const cartIcon = screen.queryByTestId("cart");

    const increaseQuantity = screen.queryAllByTestId("increase-quantity");

    const productQuantity = screen.queryAllByTestId("product-quantity");

    await user.click(addToCartBtn[0]);

    await user.click(increaseQuantity[0]);

    await user.click(increaseQuantity[0]);

    screen.debug();

    expect(productQuantity[0].value).toEqual("3");

    await user.click(cartIcon);
  });

  it("should update the price when the quantity is increased", async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    const addToCartBtn = await screen.findAllByRole("button");

    const cartIcon = screen.queryByTestId("cart");

    const increaseQuantity = screen.queryAllByTestId("increase-quantity");

    const productQuantity = screen.queryAllByTestId("product-quantity");

    await user.click(addToCartBtn[0]);

    await user.click(increaseQuantity[0]);

    expect(productQuantity[0].value).toEqual("2");

    await user.click(cartIcon);

    const productPrice = screen.queryByTestId("total-price");

    expect(productPrice.textContent).toEqual("219.90$");

    screen.debug();
  });

  it("it shouldn't decrease the quantity to 0", async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart", "/about"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    const addToCartBtn = await screen.findAllByRole("button");

    const cartIcon = screen.queryByTestId("cart");

    const decreaseQuantity = screen.queryAllByTestId("decrease-quantity");

    const productQuantity = screen.queryAllByTestId("product-quantity");

    await user.click(addToCartBtn[0]);

    await user.click(decreaseQuantity[0]);

    expect(productQuantity[0].value).toEqual("1");

    expect(productQuantity[0].value).not.toEqual("0");

    await user.click(cartIcon);

    screen.debug();
  });
});
