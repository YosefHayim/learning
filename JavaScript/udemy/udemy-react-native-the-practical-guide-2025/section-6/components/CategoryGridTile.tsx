import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

const CategoryGridTile: React.FC<{ title: string; color: string }> = ({ title, color }) => {
  return (
    <View style={styles.gridItem}>
      {/* Makes effect on clicking button without android mobile */}
      <Pressable style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]} android_ripple={{ color: "#ccc" }}>
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    backgroundColor: "white",
    elevation: 4,
    borderRadius: 8,

    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,

    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
