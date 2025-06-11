import { StyleSheet, Text, View } from "react-native";

const Recent = () => {
  return (
    <>
      <View style={styles.rootContainer}>
        <View style={styles.totalSpentContainer}>
          <Text style={{ fontWeight: "light" }}>Last 7 Days</Text>
          <Text style={{ fontWeight: "bold" }}>$10</Text>
        </View>
      </View>
    </>
  );
};

export default Recent;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  totalSpentContainer: {
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10,
  },
});
