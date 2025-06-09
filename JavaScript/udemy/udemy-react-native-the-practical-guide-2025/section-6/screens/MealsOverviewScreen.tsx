import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native/Libraries/Lists/FlatList";

const MealsOverviewScreen = () => {
  const route = useRoute();
  const categoryId = route.params?.categoryId;
  const displayMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
  return (
    <View style={styles.container}>
      <FlatList data={displayMeals} keyExtractor={(item) => item.id} renderItem={{item} => }/>
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
