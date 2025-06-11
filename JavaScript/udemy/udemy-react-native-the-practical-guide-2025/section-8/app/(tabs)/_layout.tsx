import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native";

export default function TabLayout() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, padding: 10 }}>
        <Tabs>
          <Tabs.Screen
            name="index"
            options={{
              title: "Recent",
              tabBarIcon: () => <MaterialCommunityIcons name="timer-sand" size={24} color="black" />,
            }}
          />
          <Tabs.Screen
            name="expenses"
            options={{
              title: "All Expenses",
              tabBarIcon: () => <AntDesign name="calendar" size={24} color="black" />,
            }}
          />
        </Tabs>
      </SafeAreaView>
    </>
  );
}
