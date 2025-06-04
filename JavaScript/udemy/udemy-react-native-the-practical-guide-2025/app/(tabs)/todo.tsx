import CustomInput from "@/components/CustomInput/CustomInput";
import LineSeperator from "@/components/LineSeperator";
import handleDeleteTask from "@/handlers/handle-delete";
import handleInput from "@/handlers/handle-input";
import handleSubmitBtn from "@/handlers/handle-submit-btn";
import useCurrentDate from "@/hooks/useCurrentDate";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { Button, Modal, Pressable, Text, View } from "react-native";

const Todo = () => {
  const formattedDate = useCurrentDate();
  const [goals, setGoals] = useState<string[]>(["finish react native app"]);
  const [goalText, setGoalText] = useState<string>("");
  const [editGoalText, setEditGoalText] = useState<string | undefined>("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleEditTask = (goalToEdit: string) => {
    setModalVisible(true);
    if (!goalToEdit) return;
    setEditGoalText(goals.find((goal) => goal === goalToEdit));
  };

  return (
    <>
      <Text style={{ width: "100%", textAlign: "center" }}>Goals of today: {formattedDate}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <CustomInput
          placeholder="Add a goal"
          placeholderTextColor="#888"
          onChangeFn={(newGoalText) => handleInput(setGoalText, newGoalText)}
          value={goalText}
          style={{ flex: 1, borderRadius: 10, height: 40, margin: 12, borderWidth: 1, padding: 10 }}
        />
        <Button title="Add Goal" onPress={() => handleSubmitBtn(goalText, goals, setGoals, setGoalText)} />
      </View>
      <LineSeperator />
      <Modal visible={modalVisible} animationType="fade" backdropColor={"#DADADA"}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", height: "100%" }}>
          <FontAwesome name="close" color={"black"} style={{ position: "absolute", top: 100, right: 50 }} size={28} onPress={() => setModalVisible(false)} />
          <CustomInput
            placeholder="Edit your goal"
            value={editGoalText}
            onChangeFn={(updatedGoalText) => setEditGoalText(updatedGoalText)}
            placeholderTextColor="#888"
            style={{ borderRadius: 10, height: 40, margin: 12, borderWidth: 1, padding: 10, width: "50%" }}
          />
          <Pressable style={{ backgroundColor: "gray", padding: 10, borderRadius: 10 }}>
            <Text>Save Goal</Text>
          </Pressable>
        </View>
      </Modal>
      <View style={{ marginTop: 10, flexDirection: "column", gap: 20, justifyContent: "center", alignContent: "center" }}>
        {goals.map((goal) => (
          <View
            key={goal}
            style={{
              backgroundColor: "red",
              width: "100%",
              padding: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              borderWidth: 1,
            }}
          >
            <Text style={{ color: "white", width: "80%" }}>{goal}</Text>
            <FontAwesome size={28} name="trash" color={"white"} onPress={() => handleDeleteTask(goal, setGoals)} />
            <Pressable onPress={() => handleEditTask(goal)}>
              <FontAwesome size={28} name="edit" color={"white"} />
            </Pressable>
          </View>
        ))}
      </View>
    </>
  );
};

export default Todo;
