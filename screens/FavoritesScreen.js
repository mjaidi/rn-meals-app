import React from "react";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import colors from "../constants/colors";
import { MEALS } from "../data/sample_data";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((m) => m.id === "m1" || m.id === "m2");
  return <MealList navigation={props.navigation} displayedMeals={favMeals} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "My Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          color={colors.accentColor}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
