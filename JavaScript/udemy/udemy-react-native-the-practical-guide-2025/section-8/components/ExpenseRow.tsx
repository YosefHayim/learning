import { Pressable, StyleSheet, Text, View } from "react-native";

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
            <Text style={styles.title}>{title}</Text>
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
