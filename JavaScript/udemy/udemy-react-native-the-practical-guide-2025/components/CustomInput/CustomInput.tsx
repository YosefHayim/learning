import React from "react";
import { ImageStyle, StyleProp, TextInput, TextStyle, ViewStyle } from "react-native";

type Props = {
  placeholder: string;
  placeholderTextColor: string;
  onChangeFn: (text: string) => void;
  value: string | undefined;
  style?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
};

const CustomInput: React.FC<Props> = ({ placeholder, placeholderTextColor, onChangeFn, value, style }) => {
  return <TextInput placeholder={placeholder} placeholderTextColor={placeholderTextColor} onChangeText={onChangeFn} value={value} style={style} />;
};

export default CustomInput;
