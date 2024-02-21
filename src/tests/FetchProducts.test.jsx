import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import FetchProducts from "../api/FetchProducts";
import ProductsPage from "../components/ProductsPage";
import { createMemoryRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import App from "../App";
import Homepage from "../components/Homepage";
import CartPage from "../components/CartPage";

describe("testing the FetchProducts API", () => {
  it("loading test is shown while API request is in progress", async () => {
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
      initialEntries: ["", "/products", "/products/cart"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    screen.debug();

    const loadingText = screen.getByText("Loading...");

    expect(loadingText).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
  });

  it("should display one rendered product on the screen", () => {
    render(
      <ProductsPage
        productName="Mens Casual Premium Slim Fit T-Shirts"
        productPrice={22.3}
        productRating={4.1}
        productCount={259}
      />,
    );

    expect(
      screen.queryByText("Mens Casual Premium Slim Fit T-Shirts").textContent,
    ).toMatch(/mens casual premium slim fit t-shirts/i);

    const productPrice = screen.getByTestId("price");

    expect(productPrice.textContent).toEqual("22.3$");

    const productRating = screen.getByTestId("rating");

    expect(productRating.textContent).toEqual("4.1");

    const productCount = screen.getByTestId("count");

    expect(productCount.textContent).toEqual("259");
  });
});
