import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Tile from "./Tile";

test("renders unselected tile", () => {
  const onClickMock = jest.fn();
  render(<Tile isSelected={false} onClick={onClickMock} />);
  const tileEl = screen.getByTestId("tile");

  expect(tileEl).toHaveClass("Tile");
  expect(tileEl).not.toHaveClass("Tile--selected");
});

test("renders selected tile", () => {
  const onClickMock = jest.fn();
  render(<Tile isSelected={true} onClick={onClickMock} />);
  const tileEl = screen.getByTestId("tile");

  expect(tileEl).toHaveClass("Tile");
  expect(tileEl).toHaveClass("Tile--selected");
});

test("calls onClick method when clicked", () => {
  const onClickMock = jest.fn();
  render(<Tile isSelected={false} onClick={onClickMock} />);
  const tileEl = screen.getByTestId("tile");

  expect(onClickMock).not.toHaveBeenCalled();

  fireEvent.click(tileEl);

  expect(onClickMock).toHaveBeenCalled();
});
