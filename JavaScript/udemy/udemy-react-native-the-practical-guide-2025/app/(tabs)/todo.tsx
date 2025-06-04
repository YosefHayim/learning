import CustomInput from "@/components/CustomInput/CustomInput";
import LineSeperator from "@/components/LineSeperator";
import useCurrentDate from "@/hooks/useCurrentDate";
import { Button, StyleSheet, Text, View } from "react-native";

const Todo = () => {
  const formattedDate = useCurrentDate();
  
  return (
    <View style={styles.container}>
      <Text>Goals of today: {formattedDate}</Text>
      <View style={styles.btnAndInput}>
        <CustomInput placeholder="Add a goal" placeholderTextColor="#888" />
        <Button title="Add Goal" />
      </View>
      <LineSeperator />
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
