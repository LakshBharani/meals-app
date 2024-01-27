import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const FavoritesScreen = () => {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={style.rootScreen}>
        <Text style={style.text}>You dont have any favorites yet</Text>
      </View>
    );
  } else {
    return <MealsList data={favoriteMeals} />;
  }
};

export default FavoritesScreen;

const style = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
