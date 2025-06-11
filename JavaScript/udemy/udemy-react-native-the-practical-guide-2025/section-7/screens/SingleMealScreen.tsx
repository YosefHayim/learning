import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";
import SubTitle from "../components/SubTitle";
import List from "../components/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const SingleMealScreen: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
  // const favoriteCtx = useContext(FavoritesContext);
  const favoriteMeals = useSelector((state) => state.favoriteMeals);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMeals.ids.includes(mealId);

  const changeFavoriteStatus = () => {
    if (mealIsFavorite) {
      // favoriteMeals.removeFavorite(mealId);
      dispatch(removeFavorite(mealId));
    } else {
      // favoriteMeals.addFavorite(mealId);
      dispatch(addFavorite(mealId));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={changeFavoriteStatus} color="white" size={24} icon={mealIsFavorite ? "star" : "star-outline"} />;
      },
    });
  }, [navigation, changeFavoriteStatus]);

  if (!selectedMeal) return;

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealsDetails
        affordability={selectedMeal?.affordability}
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        textStyle={styles.detailStyle}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal?.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleMealScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 30,
  },
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
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
