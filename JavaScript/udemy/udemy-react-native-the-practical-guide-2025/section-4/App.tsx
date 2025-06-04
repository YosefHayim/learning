import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  return (
    <LinearGradient style={styles.rootScreen} colors={["#4c669f", "#3b5998", "#192f6a"]}>
      <ImageBackground source={require("./assets/image.png")} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage} />
      <StartGameScreen />
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
