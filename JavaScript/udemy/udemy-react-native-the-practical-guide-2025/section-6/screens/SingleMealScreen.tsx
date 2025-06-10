import { View, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";

const SingleMealScreen: React.FC<{ affordability: string; duration: number; route: any; navigation: any }> = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal?.imageUrl }} />
      <Text>{selectedMeal?.title}</Text>
      <MealsDetails affordability={selectedMeal?.affordability} duration={selectedMeal?.duration} complexcity={selectedMeal?.complexity} />
      <View></View>
      <Text>Ingrediants</Text>
      {selectedMeal?.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal?.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default SingleMealScreen;
