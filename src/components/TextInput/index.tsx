import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";

const TextInputComponent = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      console.log("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      console.log("Keyboard Hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.txt}>TextInput</Text>
      <TextInput 
        style={styles.input}
        placeholder="Test TextInput"
        placeholderTextColor="#999"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={true}
        value={value}
        onChangeText={(text) => setValue(text)}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => Keyboard.dismiss()}
      >
        <Text style={[styles.txt, {color: '#fff', textTransform: 'uppercase'}]}>enviar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  txt: {
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  btn: {
    width: "100%",
    height: 40,
    backgroundColor: "#4286f4",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginTop: 16,
  }
})

export default TextInputComponent;