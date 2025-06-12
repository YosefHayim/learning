import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import PlusIcon from "./PlusIcon";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";
import CustomButton from "./CustomButton";
import DateTimePicker, { DateType, useDefaultStyles } from "react-native-ui-datepicker";

const Dialog = () => {
  const defaultStyles = useDefaultStyles("dark");
  const [modalVisible, setModalVisible] = useState(false);
  const [chosenDate, setChosenDate] = useState<DateType>(new Date());
  const [moneySpent, setMoneySpent] = useState<string>("");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View>
                  <DateTimePicker
                    initialView="day"
                    timeZone="Asia/Tehran"
                    mode="single"
                    date={chosenDate}
                    onChange={({ date }) => setChosenDate(date)}
                    styles={{
                      ...defaultStyles,
                      selected: { backgroundColor: Colors.lightOrange, borderColor: Colors.lightOrange },
                      day: { color: "white", backgroundColor: Colors.orange, borderRadius: 4 },
                    }}
                  />

                  <TextInput
                    onChangeText={setMoneySpent}
                    value={moneySpent}
                    keyboardType="decimal-pad"
                    style={styles.input}
                    placeholder="Add Amount..."
                    placeholderTextColor={"white"}
                  />
                  <View style={styles.viewDateContainer}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Chosen Date:</Text>
                    <Text style={{ color: "white", fontWeight: "bold" }}>{chosenDate?.toLocaleDateString()}</Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 20, justifyContent: "center" }}>
                    <CustomButton buttonText="Cancel" onPress={() => setModalVisible(false)} />
                    <CustomButton buttonText="Save" onPress={() => setModalVisible(false)} />
                  </View>
                </View>

                <Pressable style={[styles.closeButton]} onPress={() => setModalVisible(!modalVisible)}>
                  <AntDesign name="closesquare" size={34} color={"black"} style={{ padding: 10 }} />
                </Pressable>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <Pressable style={[styles.button]} onPress={() => setModalVisible(true)}>
          <PlusIcon />
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    flex: 1,
    backgroundColor: "white",
    padding: 35,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    elevation: 2,
  },
  closeButton: {
    position: "absolute",
    top: "10%",
    right: "10%",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderRadius: 4,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
  },
  viewDateContainer: {
    justifyContent: "space-around",
    backgroundColor: "black",
    flexDirection: "row",
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
  },
});

export default Dialog;
