import routes from "../router/routes";
import { screen, render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

describe("it should render AboutPage component", () => {
  it("should render About page content", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/products", "/products/cart", "/about"],
      initialIndex: 3,
    });

    render(<RouterProvider router={router} />);

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
