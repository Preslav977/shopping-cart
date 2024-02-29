import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Footer from "../components/Footer";
import userEvent from "@testing-library/user-event";
import routes from "../router/routes";

describe("should render Footer component with Links", () => {
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

  it("should navigate  to HomePage", async () => {
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
