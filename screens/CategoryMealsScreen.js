import React from "react";
import { CATEGORIES, MEALS } from "../data/sample_data";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter((m) => m.categoryIds.indexOf(catId) >= 0);

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
