import { TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View
      style={{
        padding: 16,
        marginTop: 100,
        backgroundColor: "#72063c",
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      }}
    >
      <TextInput
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={2}
        style={{
          height: 50,
          fontSize: 32,
          borderBottomColor: "#ddb52f",
          borderBottomWidth: 2,
          color: "#ddb52f",
          marginVertical: 8,
          fontWeight: "bold",
          textAlign: "center",
        }}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;
