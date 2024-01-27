import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import RenderMealItem from "../RenderMealItem";

const List = ({data}) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={RenderMealItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
});
