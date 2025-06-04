import React from "react";
import { StyleSheet, TextInput } from "react-native";

const CustomInput: React.FC<{ placeholder: string; placeholderTextColor: string }> = ({ placeholder, placeholderTextColor }) => {
  return <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={placeholderTextColor} />;
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    width: "70%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CustomInput;
