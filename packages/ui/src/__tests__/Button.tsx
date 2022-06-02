import { render } from "@testing-library/react";
import React from "react";
import { Button } from "../Button";

describe("Button", () => {
  it("renders correctly", () => {
    const tree = render(<Button />);
    expect(tree).toMatchSnapshot();
  });
});
