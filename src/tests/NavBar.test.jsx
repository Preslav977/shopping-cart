import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../components/Homepage";
import CartPage from "../components/CartPage";
import userEvent from "@testing-library/user-event";

describe("NavBar component with Link elements", () => {
  it("should render the component correctly and get the textContent", () => {
    const routes = [
      {
        path: "/",
        element: <NavBar />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    expect(screen.queryByText("Home").textContent).toMatch(/home/i);

    expect(screen.queryByText("Products").textContent).toMatch(/products/i);

    expect(screen.queryByText("About").textContent).toMatch(/about/i);
  });

  it("should go to other pages, when the link is clicked", async () => {
    const routes = [
      {
        path: "/",
        element: <App />,
        children: [
          { index: true, element: <Homepage /> },
          { path: "/products/cart", element: <CartPage /> },
        ],
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/products", "/products/cart"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const user = userEvent.setup();

    const homeLink = screen.getByTestId("home");

    await user.click(homeLink);

    expect(screen.getByTestId("products")).toBeInTheDocument();

    expect(screen.getByTestId("cart")).toBeInTheDocument();

    expect(screen.getByTestId("about")).toBeInTheDocument();
  });
});
