import { View, Text } from "react-native";

const SingleMealScreen: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
  return (
    <View>
      <Text>current meal id is {route.params.mealId}</Text>
    </View>
  );
};

export default SingleMealScreen;
