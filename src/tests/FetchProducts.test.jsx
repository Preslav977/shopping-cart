import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import ProductsPage from "../components/ProductsPage";
import { createMemoryRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import routes from "../router/routes";

describe("should render FetchProducts component", () => {
  it("should render Loading while the API fetches", async () => {
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

  it("should render one product on the page", () => {
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
