import { View, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";

const SingleMealScreen: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  if (!selectedMeal) return;
  return (
    <View>
      <Image source={{ uri: selectedMeal?.imageUrl }} />
      <Text>{selectedMeal?.title}</Text>
      <MealsDetails affordablitiy={selectedMeal?.affordablitiy} duration={selectedMeal?.duration} complexcity={selectedMeal?.complexcity} />
      <View></View>
      <Text>Ingrediants</Text>
      <Text>Steps</Text>
    </View>
  );
};

export default SingleMealScreen;
