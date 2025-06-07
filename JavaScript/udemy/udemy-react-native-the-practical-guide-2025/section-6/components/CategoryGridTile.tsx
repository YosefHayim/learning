import { Pressable, Text, View } from "react-native";

const CategoryGridTile: React.FC<{ title: string; color: string }> = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
