import React from "react";
import { render } from "@testing-library/react-native";
import TextInputs from "../src/components/Inputs";

describe("Components TextInputs", () => {
  it("should render correctly", () => {
    const { getAllByTestId } = render(<TextInputs />);
    const TextInput = getAllByTestId("TextInput");
    
    expect(TextInput).toBeTruthy();
    expect(TextInput.length).toBe(3);

    expect(TextInput[0].props.placeholder).toBe("Name");
    expect(TextInput[1].props.placeholder).toBe("Email");
    expect(TextInput[2].props.placeholder).toBe("Password");

    expect(TextInput[0].props.returnKeyType).toBe("next");
    expect(TextInput[1].props.returnKeyType).toBe("next");

    expect(TextInput[2].props.onSubmitEditing).toBeDefined();
    expect(TextInput[2].props.onSubmitEditing).toBeInstanceOf(Function);
  }),

  it("Checking if all TextInput is default", () => {
    const { getAllByTestId } = render(<TextInputs />);
    const TextInput = getAllByTestId("TextInput");
 
    for (let i = 0; i < TextInput.length; i++) {
      expect(TextInput[i].props.style).toBeDefined();
      expect(TextInput[i].props.style.width).toBe("100%");
      expect(TextInput[i].props.style.alignItems).toBe("flex-start");
      expect(TextInput[i].props.style.justifyContent).toBe("center");
      expect(TextInput[i].props.style.paddingHorizontal).toBe(8);
      expect(TextInput[i].props.style.paddingVertical).toBe(8);
      expect(TextInput[i].props.style.borderRadius).toBe(4);
      expect(TextInput[i].props.style.borderWidth).toBe(1);
      expect(TextInput[i].props.style.borderColor).toBe("#ddd");
      expect(TextInput[i].props.style.backgroundColor).toBe("#fff");

      expect(TextInput[i].props.placeholder).toBeDefined();
      expect(TextInput[i].props.placeholderTextColor).toBeDefined();

      expect(TextInput[i].props.keyboardType).toBeDefined();

      expect(TextInput[i].props.autoCapitalize).toBeDefined();
      expect(TextInput[i].props.autoCorrect).toBeDefined();

      expect(TextInput[i].props.value).toBeDefined();
      expect(TextInput[i].props.onChangeText).toBeDefined();
      expect(TextInput[i].props.returnKeyType).toBeDefined();
    }
  });
});