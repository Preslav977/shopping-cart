import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import routes from "../router/routes";

describe("should render NavBar component with Links", () => {
  it("should render NavBar with its content", () => {
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

  it("should navigate to HomePage", async () => {
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
