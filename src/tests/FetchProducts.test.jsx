import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import FetchProducts from "../api/FetchProducts";
import ProductsPage from "../components/ProductsPage";

describe("testing the FetchProducts API", () => {
  it("loading test is shown while API request is in progress", async () => {
    render(<FetchProducts />);

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
