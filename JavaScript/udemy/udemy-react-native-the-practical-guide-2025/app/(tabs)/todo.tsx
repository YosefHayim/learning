import CustomInput from "@/components/CustomInput/CustomInput";
import LineSeperator from "@/components/LineSeperator";
import handleInput from "@/handlers/handle-input";
import handleSubmitBtn from "@/handlers/handle-submit-btn";
import useCurrentDate from "@/hooks/useCurrentDate";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Todo = () => {
  const formattedDate = useCurrentDate();
  const [goals, setGoals] = useState<string[]>([]);
  const [goalText, setGoalText] = useState("");

  return (
    <View style={styles.container}>
      <Text>Goals of today: {formattedDate}</Text>
      <View style={styles.btnAndInput}>
        <CustomInput placeholder="Add a goal" placeholderTextColor="#888" onChangeFn={(newGoalText) => handleInput(setGoalText, newGoalText)} value={goalText} />
        <Button title="Add Goal" onPress={() => handleSubmitBtn(goalText, goals, setGoals, setGoalText)} />
      </View>
      <LineSeperator />
      {goals.map((goal) => (
        <View key={goal}>
          <Text>{goal}</Text>
        </View>
      ))}
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  btnAndInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
