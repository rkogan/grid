import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title", () => {
  render(<App />);

  expect(screen.queryByTestId("title")?.textContent).toContain("Bounding box");
});
