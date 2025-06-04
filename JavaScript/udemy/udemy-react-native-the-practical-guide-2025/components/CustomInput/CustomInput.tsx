import React from "react";
import { StyleSheet, TextInput } from "react-native";

type Props = {
  placeholder: string;
  placeholderTextColor: string;
  onChangeFn: (text: string) => void;
  value: string;
};

const CustomInput: React.FC<Props> = ({ placeholder, placeholderTextColor, onChangeFn, value }) => {
  return <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={placeholderTextColor} onChangeText={onChangeFn} value={value} />;
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
