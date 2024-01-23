import { View, StyleSheet } from "react-native";
import CategoriesScreens from "./screens/CategoriesScreens";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.screen}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MealsCategories">
            <Stack.Screen
              name="MealsCategories"
              component={CategoriesScreens}
              options={{ headerTitle: "Meal Categories" }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={{
                headerTitle: "Meal Overview",
                headerBackTitle: "Back",
              }}
            />
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
