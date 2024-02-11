import { render, screen } from "@testing-library/react";
import { Test } from "../components/Test";

describe("Test component", () => {
  it("rendeers correct heading", () => {
    render(<Test />);
    expect(screen.getByRole("heading").textContent).toMatch(/test/i);
  });
});
