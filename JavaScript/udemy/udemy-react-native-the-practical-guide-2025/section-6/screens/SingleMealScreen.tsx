import { View, Text, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";
import SubTitle from "../components/SubTitle";

const SingleMealScreen: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  if (!selectedMeal) return;

  return (
    <View>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealsDetails
        affordability={selectedMeal?.affordability}
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        style=""
        textStyle={styles.detailStyle}
      />
      <View></View>

      <SubTitle>Ingredients</SubTitle>
      {selectedMeal?.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <SubTitle>Steps</SubTitle>
      {selectedMeal?.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default SingleMealScreen;

const styles = StyleSheet.create({
  image: {
    flex: 350,
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    color: "white",
  },
  detailStyle: {
    color: "white",
  },
});
