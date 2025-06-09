import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryGridTile color={item.color} title={item.title} onPress={() => navigation.navigate("MealsOverview", { categoryId: item.id })} />
      )}
    />
  );
};

export default CategoriesScreen;
