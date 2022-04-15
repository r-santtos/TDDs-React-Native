import React from "react";
import { render } from "@testing-library/react-native";
import ComponentText from "../src/components/Text";

describe("Components Text", () => {
  it("Render RN component Text", () => {
    const { getByText } = render(<ComponentText />);
    const Text = getByText("Hello Text");

    expect(Text).toBeTruthy();
  });
});