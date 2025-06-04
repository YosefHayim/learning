import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

const PrimaryButton: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
