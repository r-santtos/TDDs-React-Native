import React from "react";
import { render } from "@testing-library/react-native";
import Image from "../src/components/Images";

describe("Components Images", () => {
  it("Should render RN Image", () => {
    const { getByTestId } = render(<Image />);
    const image = getByTestId("logo");

    expect(image.props.testID).toBe("logo");
    expect(image.props.accessibilityLabel).toBe("logo");
    expect(image.props.style.width).toBe(200);
    expect(image.props.style.height).toBe(200);
    expect(image.props.resizeMode).toBe("contain");
    expect(image.props.source.uri).toBe("https://reactnative.dev/img/tiny_logo.png");
  });
});