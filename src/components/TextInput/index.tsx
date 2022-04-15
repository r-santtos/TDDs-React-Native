import React, {useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const TextInputComponent = () => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
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
      </KeyboardAvoidingView>
    </View>
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
  }
})

export default TextInputComponent;