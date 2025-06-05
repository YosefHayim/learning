import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

const Title: React.FC<{ titleText: string }> = ({ titleText }) => {
  return <Text style={styles.title}>{titleText}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    marginHorizontal: 24,
    marginVertical: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    width: "100%",
  },
});
