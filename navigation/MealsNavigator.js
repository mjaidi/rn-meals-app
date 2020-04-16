// Stack Navigator - to go back and forth between screens
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

const navigationDefaults = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerTintColor: Platform.OS === "android" ? "white" : colors.primaryColor,
};
// this returns a simple react component
const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  { defaultNavigationOptions: navigationDefaults }
);
const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      ...navigationDefaults,
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? colors.accentColor : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : colors.accentColor,
    },
  }
);
const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  { defaultNavigationOptions: navigationDefaults }
);

const TabScreenConfig = {
  // we can use any other navigator within this navigator,
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: "All Meals",
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-restaurant" color={tabInfo.tintColor} size={25} />
      ),
      tabBarColor: colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? <DefaultText>Meals</DefaultText> : "Meals",
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-star" color={tabInfo.tintColor} size={25} />
      ),
      tabBarColor: colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <DefaultText>Favorites</DefaultText>
        ) : (
          "Favorites"
        ),
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(TabScreenConfig, {
        shifting: true,
        barStyle: {
          // if not using shifting
          backgroundColor: colors.primaryColor,
        },
      })
    : createBottomTabNavigator(TabScreenConfig, {
        tabBarOptions: {
          activeTintColor: colors.accentColor,
          labelStyle: {
            fontFamily: "open-sans",
          },
        },
      });

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals & Favorites",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
