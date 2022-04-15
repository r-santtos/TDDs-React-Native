import React from "react";
import { render } from "@testing-library/react-native";
import TextInputs from "../src/components/TextInputs";

describe("Components TextInput", () => {
  it("Render RN component TextInput", () => {
    const { getByTestId } = render(<TextInputs />);
    const TextInput = getByTestId("TextInput");

    expect(TextInput).toBeTruthy();
    expect(TextInput.props.testID).toBe("TextInput");

    expect(TextInput.props.style).toBeDefined();
    expect(TextInput.props.style.width).toBe("100%");
    expect(TextInput.props.style.alignItems).toBe("flex-start");
    expect(TextInput.props.style.justifyContent).toBe("center");
    expect(TextInput.props.style.paddingHorizontal).toBe(8);
    expect(TextInput.props.style.paddingVertical).toBe(8);
    expect(TextInput.props.style.borderRadius).toBe(4);
    expect(TextInput.props.style.borderWidth).toBe(1);
    expect(TextInput.props.style.borderColor).toBe("#ddd");
    expect(TextInput.props.style.backgroundColor).toBe("#fff");

    expect(TextInput.props.placeholder).toBeDefined();
    expect(TextInput.props.placeholder).toBe("Test TextInput");

    expect(TextInput.props.placeholderTextColor).toBeDefined();
    expect(TextInput.props.placeholderTextColor).toBe("#999");

    expect(TextInput.props.keyboardType).toBeDefined();
    expect(TextInput.props.keyboardType).toBe("default");

    expect(TextInput.props.autoCapitalize).toBeDefined();
    expect(TextInput.props.autoCapitalize).toBe("sentences");

    expect(TextInput.props.autoCorrect).toBeDefined();
    expect(TextInput.props.autoCorrect).toBe(true);

    expect(TextInput.props.value).toBeDefined();
    expect(TextInput.props.value).toBe("");
    expect(TextInput.props.onChangeText).toBeDefined();
    expect(TextInput.props.onChangeText).toBeInstanceOf(Function);

    expect(TextInput.props.returnKeyType).toBeDefined();
    expect(TextInput.props.returnKeyType).toBe("send");

    expect(TextInput.props.onSubmitEditing).toBeDefined();
    expect(TextInput.props.onSubmitEditing).toBeInstanceOf(Function);
    
  });
})