import { View, Text, StyleSheet } from "react-native";

const List: React.FC<{ data: string[] }> = ({ data }) => {
  return data.map((dataP) => (
    <View key={dataP} style={styles.listItem}>
      <Text style={styles.itemText}>{dataP}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
