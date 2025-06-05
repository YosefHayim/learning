import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);

  if (!fontsLoaded) return <AppLoading />;
  let screen = <StartGameScreen setUserNumber={setUserNumber} />;

  if (userNumber && !gameOver) {
    screen = <GameScreen userNumber={userNumber} setGameOver={setGameOver} />;
  } else if (gameOver) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require("./assets/image.png")} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
