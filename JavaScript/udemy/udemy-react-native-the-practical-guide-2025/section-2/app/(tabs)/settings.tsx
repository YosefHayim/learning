import { View, Text, StyleSheet } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>This is the settings page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
