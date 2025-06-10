import { StyleSheet, View, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";

const MealsOverviewScreen: React.FC = () => {
  const route = useRoute();
  const categoryId = route?.params?.categoryId;

  const displayMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem title={item.title} imageUrl={item.imageUrl} affordablitiy={item.affordability} complexcity={item.complexity} duration={item.duration} />
        )}
      />
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
