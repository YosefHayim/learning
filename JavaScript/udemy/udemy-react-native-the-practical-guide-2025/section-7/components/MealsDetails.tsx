import { Text, View, StyleSheet } from "react-native";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type MealsDetailsProps = {
  duration: number;
  complexity: string;
  affordability: string;
  style?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const MealsDetails: React.FC<MealsDetailsProps> = ({ duration, complexity, affordability, style, textStyle }) => {
  if (!duration && complexity && affordability) return;

  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity?.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability?.toUpperCase()}</Text>
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
