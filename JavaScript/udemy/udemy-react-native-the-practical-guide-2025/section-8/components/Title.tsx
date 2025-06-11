import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title: React.FC<{ titleText: string }> = ({ titleText }) => {
  return (
    <>
      <View style={styles.rootContainer}>
        <Text style={styles.title}>{titleText}</Text>
      </View>
    </>
  );
};

export default Title;

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
