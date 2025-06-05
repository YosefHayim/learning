import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";

const generateRandomBetween = (min: number, max: number, exclude: number) => {
  let rndNum = Math.floor(Math.random() * (max - min)) + min;

  while (rndNum === exclude && max - min > 1) {
    rndNum = Math.floor(Math.random() * (max - min)) + min;
  }

  return rndNum;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: React.FC<{ userNumber: number | null; setGameOver: React.Dispatch<React.SetStateAction<boolean>> }> = ({ userNumber, setGameOver }) => {
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
    if (currentGuess === Number(userNumber)) {
      setGameOver(true);
      minBoundary = 1;
      maxBoundary = 100;
    }
  }, [currentGuess]);

  return (
    <View style={styles.screen}>
      <Title titleText="Opponents Guess" />
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text style={styles.higherOrLowerText}>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Entypo name="squared-minus" size={24} color={Colors.accent500} />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Entypo name="squared-plus" size={24} color={Colors.accent500} />
          </PrimaryButton>
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
  higherOrLowerText: { fontSize: 18, textAlign: "center", fontWeight: 800, color: "white", marginBottom: 20, fontFamily: "open-sans-bold" },
});
