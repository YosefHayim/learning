import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import SingleMealScreen from "./screens/SingleMealScreen";
import React from "react";
import { FavoritesContextProvider } from "./store/context/favorite-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteMeals from "./screens/FavoriteMeals";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: "#351401" }, headerTintColor: "white", contentStyle: { backgroundColor: "#3f2f25" } }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorite" component={FavoriteMeals} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            id={undefined}
            screenOptions={{ headerStyle: { backgroundColor: "#351401" }, headerTintColor: "white", contentStyle: { backgroundColor: "#3f2f25" } }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                title: " All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              // Example to settings options dynamiclly options
              // options={({ route, navigation }) => {
              //   const categoryId = route?.params?.categoryId;
              //   return {
              //     title: categoryId,
              //   };
              // }}
            />
            <Stack.Screen name="MealDetail" component={SingleMealScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
