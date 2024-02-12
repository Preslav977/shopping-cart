import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

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
});
