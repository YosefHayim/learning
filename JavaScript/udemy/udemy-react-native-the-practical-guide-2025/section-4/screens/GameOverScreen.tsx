import { StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";

const GameOverScreen = () => {
  return (
    <View style={styles.container}>
      <Title titleText="Game Over" />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginVertical: 12,
  },
});
