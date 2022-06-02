import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Button } from "../Button";

describe("Button", () => {
  it("renders correctly", () => {
    const tree = render(<Button />);
    expect(tree).toMatchSnapshot();
  });

  it("Calls onClick when clicked", () => {
    const click = jest.fn();
    const tree = render(<Button onClick={click} />);
    fireEvent.click(tree.getByRole("button"));
    expect(click).toHaveBeenCalledTimes(1);
  });
});
