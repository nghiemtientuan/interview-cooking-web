import * as Types from 'Src/constants/ActionTypes';

export const fetchRecipesRequest = (filter) => {
  return {
    type: Types.FETCH_RECIPES,
    filter
  };
}

export const fetchRecipesRequestSuccess = (recipes) => {
  return {
    type: Types.FETCH_RECIPES_SUCCESS,
    recipes
  };
}
