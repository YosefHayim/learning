import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const generateRandomBetween = (min: number, max: number, exclude: number) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: React.FC<{ userNumber: string; setGameOver: React.Dispatch<React.SetStateAction<boolean>> }> = ({ userNumber, setGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, Number(userNumber));
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction: string) => {
    // direction => 'lower', 'greater'
    if ((direction === "lower" && currentGuess < Number(userNumber)) || (direction === "greater" && currentGuess > Number(userNumber))) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: "Sorry!", style: "cancel" }]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
  };

  useEffect(() => {
    if (currentGuess === Number(userNumber)) setGameOver(true);
  }, []);

  return (
    <View style={styles.screen}>
      <Title titleText="Opponents Guess" />
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>+</PrimaryButton>
        </View>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
