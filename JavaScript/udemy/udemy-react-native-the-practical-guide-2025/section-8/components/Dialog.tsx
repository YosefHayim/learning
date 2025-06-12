import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import PlusIcon from "./PlusIcon";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";
import CustomButton from "./CustomButton";

const Dialog = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [moneySpent, setMoneySpent] = useState<string>("");
  console.log(setMoneySpent);
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
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <TextInput onChangeText={setMoneySpent} value={moneySpent} keyboardType="number-pad" style={styles.input} />
                <View style={{ flexDirection: "row", gap: 20, justifyContent: "center" }}>
                  <CustomButton buttonText="Cancel" />
                  <CustomButton buttonText="Save" />
                </View>
              </View>
              <Pressable style={[styles.closeButton]} onPress={() => setModalVisible(!modalVisible)}>
                <AntDesign name="closesquare" size={30} color={Colors.orange} style={{ padding: 10 }} />
              </Pressable>
            </View>
          </View>
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
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default Dialog;
