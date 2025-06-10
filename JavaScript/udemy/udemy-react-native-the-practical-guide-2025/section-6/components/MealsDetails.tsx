import { Text, View, StyleSheet } from "react-native";

const MealsDetails: React.FC<{ duration: number; complexity: string; affordability: string }> = ({ duration, complexity, affordability }) => {
  if (!duration && complexity && affordability) return;

  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{complexity?.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability?.toUpperCase()}</Text>
    </View>
  );
};

export default MealsDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
