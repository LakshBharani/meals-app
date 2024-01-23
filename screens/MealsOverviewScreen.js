import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import RenderMealItem from "../components/RenderMealItem";

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

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
