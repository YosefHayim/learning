import { ReactNode } from "react";
import { View, Text, StyleSheet, Pressable, PressableProps } from "react-native";

const PrimaryButton: React.FC<{ children: ReactNode; onPress: () => void }> = ({ children, onPress }) => {
  return (
    <View style={{ width: "100%", padding: 10 }}>
      <Pressable onPress={onPress}>
        <Text style={{ color: "white", backgroundColor: "orange", textAlign: "center", borderRadius: 4, padding: 8 }}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
