import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean | null>(false);
  const [roundsNumber, setRoundsNumber] = useState(0);

  if (!fontsLoaded) return <AppLoading />;
  let screen = <StartGameScreen setUserNumber={setUserNumber} />;

  if (userNumber && !gameOver) {
    screen = <GameScreen userNumber={userNumber} setGameOver={setGameOver} setRoundsNumber={setRoundsNumber} />;
  } else if (gameOver) {
    screen = (
      <>
        <StatusBar style="light" />
        <GameOverScreen
          roundsNumber={roundsNumber}
          userNumber={userNumber}
          onStartNewGame={() => {
            setGameOver(null);
            setUserNumber(null);
            setRoundsNumber(0);
          }}
        />
      </>
    );
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
