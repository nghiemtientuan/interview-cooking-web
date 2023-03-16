import * as Types from 'Src/constants/ActionTypes';

export const fetchSingleRecipeRequest = (id) => {
  return {
    type: Types.FETCH_SINGLE_RECIPE,
    id,
  };
}

export const fetchSingleRecipeRequestSuccess = (recipe) => {
  return {
    type: Types.FETCH_SINGLE_RECIPE_SUCCESS,
    recipe,
  };
}
