import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux"; // hook, alternative to connect
import { CATEGORIES } from "../data/sample_data";
import MealList from "../components/MealList";
import Text from "../components/DefaultText";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (m) => m.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <Text>No meals found, maybe check your filters</Text>
      </View>
    );
  }

  return (
    <MealList displayedMeals={displayedMeals} navigation={props.navigation} />
  );
};

export default CategoryMealsScreen;

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
