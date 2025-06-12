import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Recent from "./index";
import AllExpenses from "./expenses";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import Dialog from "@/components/Dialog";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="recent"
      screenOptions={{
        animation: "fade",
      }}
    >
      <Tab.Screen
        name="recent"
        component={Recent}
        options={{
          headerStyle: {
            backgroundColor: Colors.orange,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarLabelStyle: { fontWeight: "bold", color: "black" },
          tabBarIcon: () => <MaterialCommunityIcons name="timer-sand" size={24} color="black" />,
          headerRight: () => <Dialog />,
        }}
      />
      <Tab.Screen
        name="all-expenses"
        component={AllExpenses}
        options={{
          headerStyle: {
            backgroundColor: Colors.orange,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          title: "All Expenses",
          tabBarLabelStyle: { fontWeight: "bold", color: "black" },
          tabBarIcon: () => <AntDesign name="calendar" size={24} color="black" />,
          headerRight: () => <AntDesign name="plussquareo" size={24} color="white" style={{ padding: 10 }} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
