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

export const fetchRelationRecipesRequest = (id) => {
  return {
    type: Types.FETCH_RELATION_RECIPES,
    id
  };
}

export const fetchRelationRecipesRequestSuccess = (recipes) => {
  return {
    type: Types.FETCH_RELATION_RECIPES_SUCCESS,
    recipes
  };
}
