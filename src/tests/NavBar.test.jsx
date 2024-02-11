import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe("NavBar component, if it gets rendered correctly", () => {
  it("should render NavBar properly", () => {
    const routes = [
      {
        path: "/",
        element: <NavBar />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    expect(screen.queryByText("Home").textContent).toMatch(/home/i);
  });
});
