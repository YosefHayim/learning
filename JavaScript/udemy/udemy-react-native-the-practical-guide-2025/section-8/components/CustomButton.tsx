import { Colors } from "@/constants/Colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface CustomButtonProps {
  style: string;
  onPress: () => void;
  buttonText: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ style, onPress, buttonText }) => {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
        ]}
      >
        <Text style={styles.text}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.orange,
    padding: 10,
    justifyContent: "center",
    width: 100,
    alignItems: "center",
    borderRadius: 4,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});
