import { screen, render } from "@testing-library/react";
import HeaderProductsPage from "../components/HeaderProductsPage";

describe("Should render HeaderProductsPage component", () => {
  it("should render HeaderProductsPage content", () => {
    render(<HeaderProductsPage />);

    screen.debug();

    expect(screen.queryByRole("heading", { level: 2 }).textContent).toMatch(
      /shop/i,
    );

    expect(screen.queryByText("Home").textContent).toMatch(/home/i);

    expect(screen.queryByText("Products").textContent).toMatch(/products/i);

    expect(screen.queryByText("All").textContent).toMatch(/All/i);

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
