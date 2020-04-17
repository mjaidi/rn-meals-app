import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { View, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { setFilters } from "../store/actions/meals";
import HeaderButton from "../components/HeaderButton";
import colors from "../constants/colors";
import Text from "../components/DefaultText";

const CustomSwitch = ({ label, value, setValue }) => (
  <View style={styles.filterContainer}>
    <Text>{label}</Text>
    <Switch
      value={value}
      trackColor={{ true: colors.primaryColor }}
      thumbColor={Platform.OS === "android" ? colors.primaryColor : ""}
      onValueChange={(newValue) => setValue(newValue)}
    />
  </View>
);

const FiltersScreen = (props) => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  dispatch = useDispatch();

  // useCallBack prevents an infinite loop that would happen because the saveFilters Function is a dependency of use Effect -
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions </Text>
      <CustomSwitch
        label="Gluten Free"
        value={isGlutenFree}
        setValue={(newValue) => setIsGlutenFree(newValue)}
      />
      <CustomSwitch
        label="Vegan"
        value={isVegan}
        setValue={(newValue) => setIsVegan(newValue)}
      />
      <CustomSwitch
        label="Vegetarian"
        value={isVegetarian}
        setValue={(newValue) => setIsVegetarian(newValue)}
      />
      <CustomSwitch
        label="Lactose Free"
        value={isLactoseFree}
        setValue={(newValue) => setIsLactoseFree(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          color={colors.primaryColor}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          color={colors.primaryColor}
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    marginVertical: 15,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
