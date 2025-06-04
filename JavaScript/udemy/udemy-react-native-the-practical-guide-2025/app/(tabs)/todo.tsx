import CustomInput from "@/components/CustomInput/CustomInput";
import LineSeperator from "@/components/LineSeperator";
import handleDeleteTask from "@/handlers/handle-delete";
import handleInput from "@/handlers/handle-input";
import handleSubmitBtn from "@/handlers/handle-submit-btn";
import useCurrentDate from "@/hooks/useCurrentDate";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { Button, Text, View } from "react-native";

const Todo = () => {
  const formattedDate = useCurrentDate();
  const [goals, setGoals] = useState<string[]>([]);
  const [goalText, setGoalText] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", padding: 10 }}>
      <Text>Goals of today: {formattedDate}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CustomInput placeholder="Add a goal" placeholderTextColor="#888" onChangeFn={(newGoalText) => handleInput(setGoalText, newGoalText)} value={goalText} />
        <Button title="Add Goal" onPress={() => handleSubmitBtn(goalText, goals, setGoals, setGoalText)} />
      </View>
      <LineSeperator />
      {goals.map((goal) => (
        <View
          key={goal}
          style={{ backgroundColor: "red", width: "100%", padding: 10, borderRadius: 10, flexDirection: "row", justifyContent: "space-between", alignContent: "center" }}
        >
          <Text style={{ color: "white", width: "80%" }}>{goal}</Text>
          <FontAwesome size={28} name="trash" color={"white"} onPress={() => handleDeleteTask(goal, setGoals)} />
        </View>
      ))}
    </View>
  );
};

export default Todo;
