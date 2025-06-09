import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";

const MealsOverviewScreen = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text>meal is is {route?.params?.categoryId}</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
