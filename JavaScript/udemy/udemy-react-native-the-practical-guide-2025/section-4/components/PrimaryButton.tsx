import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

const PrimaryButton: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <View style={{ width: "100%", padding: 10 }}>
      <Text style={{ color: "white", backgroundColor: "orange", textAlign: "center", borderRadius: 4, padding: 8 }}>{children}</Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
