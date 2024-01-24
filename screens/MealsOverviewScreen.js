import { FlatList, StyleSheet, View } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import RenderMealItem from "../components/RenderMealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      headerTitle: categoryTitle,
    });
  }, [catId, navigation]);

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={RenderMealItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
});
