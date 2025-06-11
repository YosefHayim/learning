import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorite-context";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = ({ navigation }) => {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.noMealsContainer}>
        <Text>You dont have any favorite meals added.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteMeals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MealItem
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          affordability={item.affordability}
          complexity={item.complexity}
          duration={item.duration}
          onPress={() => navigation.navigate("MealDetail", { mealId: item.id })}
        />
      )}
    />
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  noMealsContainer: {
    flex: 1,
    marginTop: 10,
    textAlign: "center",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
