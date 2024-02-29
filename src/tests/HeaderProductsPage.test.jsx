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
  });
});
