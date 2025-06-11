import { StyleSheet, Text, View } from "react-native";

const AllExpenses = () => {
  return (
    <>
      <View style={styles.rootContainer}>
        <Text>all expenses</Text>
      </View>
    </>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});
