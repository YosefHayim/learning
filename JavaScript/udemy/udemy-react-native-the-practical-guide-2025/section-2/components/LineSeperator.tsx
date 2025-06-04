import { StyleSheet, View } from "react-native";

const LineSeperator = () => {
  return <View style={styles.separator} />;
};

export default LineSeperator;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
});
