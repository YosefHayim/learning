import { Pressable, StyleSheet, Text, View } from "react-native";
import Title from "./Title";

interface ExpenseRowProps {
  date: string;
  title: string;
  amountSpent: number;
  onPress: () => void;
}

const ExpenseRow: React.FC<ExpenseRowProps> = ({ date, title, amountSpent, onPress }) => {
  return (
    <>
      <Pressable onPress={onPress}>
        <View style={styles.rootContainer}>
          <View>
            <Title titleText="example" />
            <Text>{date}</Text>
          </View>
          <View>
            <Text>{amountSpent}</Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default ExpenseRow;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
  },
});
