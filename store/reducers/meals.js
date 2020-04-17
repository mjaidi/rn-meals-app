import { MEALS } from "../../data/sample_data";
import { TOOGLE_FAVORITE, SET_FILTERS } from "../actions/meals";
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (m) => m.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updateFavMeals = [...state.favoriteMeals];
        updateFavMeals.splice(existingIndex);
        return { ...state, favoriteMeals: updateFavMeals };
      } else {
        const updateFavMeals = [...state.favoriteMeals];
        updateFavMeals.push(state.meals.find((m) => m.id === action.mealId));
        return { ...state, favoriteMeals: updateFavMeals };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter((m) => {
        if (appliedFilters.glutenFree && !m.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !m.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !m.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !m.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
