import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import Homepage from "../components/Homepage";

describe("Homepage component with Link element and other elements", () => {
  it("should render the componen correctly and get the textContents", () => {
    const routes = [
      {
        path: "/",
        element: <Homepage />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router}></RouterProvider>);

    expect(screen.queryByRole("heading").textContent).toMatch(
      /welcome to excalibur clothing store/i,
    );

    expect(
      screen.queryByText(
        "Start shopping now, by clicking the button and see all the available products in the store",
      ).textContent,
    ).toMatch(
      /start shopping now, by clicking the button and see all the available products in the store/i,
    );

    expect(
      screen.queryByText("Why wait for tomorrow, when you can do this now!")
        .textContent,
    ).toMatch(/why wait for tomorrow, when you can do this now!/i);
  });

  it("should render a button with Shop Now text", () => {
    const routes = [
      {
        path: "/",
        element: <Homepage />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router}></RouterProvider>);

    const button = screen.getByTestId("button");

    expect(button).toBeInTheDocument();
  });
});
