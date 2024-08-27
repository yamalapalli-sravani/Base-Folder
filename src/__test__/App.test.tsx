import React from "react";
import App from "../Components/App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("render Appp component", () => {
  test("rednn", () => {
    render(<App title="hello" subtitle="world" />);
    const element = screen.getByText(/hello/i);
    expect(element).toBeInTheDocument();
  });
});
