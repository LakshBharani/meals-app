import { View, StyleSheet } from "react-native";
import CategoriesScreens from "./screens/CategoriesScreens";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.screen}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={{
              headerTitle: "All Categories",
              headerStyle: {
                backgroundColor: "#351401",
              },
              contentStyle: { backgroundColor: "#3f2f25" },
              headerTintColor: "white",
              headerBackTitle: "Back",
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={CategoriesScreens}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
