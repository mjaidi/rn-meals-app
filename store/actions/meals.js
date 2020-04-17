export const TOOGLE_FAVORITE = "TOOGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = (payload) => {
  return {
    type: TOOGLE_FAVORITE,
    mealId: payload,
  };
};

export const setFilters = (payload) => {
  return {
    type: SET_FILTERS,
    filters: payload,
  };
};
