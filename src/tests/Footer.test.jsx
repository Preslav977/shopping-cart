import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Footer from "../components/Footer";
import App from "../App";
import Homepage from "../components/Homepage";
import CartPage from "../components/CartPage";
import userEvent from "@testing-library/user-event";

describe("Footer component with Links elements and other elements textContents", () => {
  it("should render the component correctly and get the textContents", () => {
    const routes = [
      {
        path: "/",
        element: <Footer />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    expect(screen.queryByText("Home").textContent).toMatch(/home/i);

    expect(screen.queryByText("Products").textContent).toMatch(/products/i);

    expect(screen.queryByText("About").textContent).toMatch(/about/i);

    expect(screen.getByRole("heading", { level: 2 }).textContent).toMatch(
      /useful links/i,
    );

    expect(screen.getByRole("heading", { level: 3 }).textContent).toMatch(
      /contact us/i,
    );

    expect(screen.getByRole("heading", { level: 4 }).textContent).toMatch(
      /social networks/i,
    );

    expect(screen.queryByText("Location").textContent).toMatch(/location/i);

    expect(screen.queryByText("Somewhere in EU").textContent).toMatch(
      /somewhere in eu/i,
    );

    expect(screen.queryByText("Phone").textContent).toMatch(/phone/i);

    expect(screen.queryByText("Email").textContent).toMatch(/email/i);
  });

  it("should go to other pages, when the Link is clicked", async () => {
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

    const footerLink = screen.getByTestId("footer-home");

    await user.click(footerLink);

    expect(screen.getByTestId("footer-products")).toBeInTheDocument();

    expect(screen.getByTestId("footer-about")).toBeInTheDocument();
  });
});
