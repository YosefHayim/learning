import { Text, View } from "react-native";
import { StyleSheet } from "react-native/Libraries/StyleSheet/StyleSheet";

const MealsDetails: React.FC<{ duration: number; complexcity: string; affordablitiy: string }> = ({ duration, complexcity, affordablitiy }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration && duration}m</Text>
      <Text style={styles.detailItem}>{complexcity?.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordablitiy?.toUpperCase()}</Text>
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
