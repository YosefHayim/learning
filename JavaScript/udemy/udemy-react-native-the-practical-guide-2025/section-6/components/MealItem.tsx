import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import MealsDetails from "./MealsDetails";
import { useNavigation } from "@react-navigation/native";

const MealItem: React.FC<{
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
  onPress: () => void;
}> = ({ title, imageUrl, duration, affordability, complexity, onPress }) => {

  return (
    <View style={styles.mealItem}>
      <View style={styles.innerContainer}>
        <Pressable onPress={onPress} style={({ pressed }) => (pressed ? styles.buttonPressed : null)} android_ripple={{ color: "#ccc" }}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealsDetails affordability={affordability} duration={duration} complexity={complexity} />
        </Pressable>
      </View>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 200,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
});
