import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const RenderMealItem = (itemData) => {
  const mealItemProps = {
    title: itemData.item.title,
    imageUrl: itemData.item.imageUrl,
    duration: itemData.item.duration,
    complexity: itemData.item.complexity,
    affordability: itemData.item.affordability,
  };

  return (
    <View>
      <MealItem {...mealItemProps} />
    </View>
  );
};

export default RenderMealItem;

const styles = StyleSheet.create({});
