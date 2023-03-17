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

export const createNewCommentRecipesRequest = (id, comment, callback) => {
  return {
    type: Types.CREATE_COMMENT_RECIPE,
    id,
    comment,
    callback,
  };
}

export const createNewCommentRecipesRequestSuccess = (recipe) => {
  return {
    type: Types.CREATE_COMMENT_RECIPE_SUCCESS,
    recipe,
  };
}

export const updateCommentRecipeRequest = (id, commentId, content, callback) => {
  return {
    type: Types.UPDATE_COMMENT_RECIPE,
    id,
    commentId,
    content,
    callback,
  };
}

export const updateCommentRecipeRequestSuccess = (recipe) => {
  return {
    type: Types.UPDATE_COMMENT_RECIPE_SUCCESS,
    recipe,
  };
}

export const deleteCommentRecipeRequest = (id, commentId) => {
  return {
    type: Types.DELETE_COMMENT_RECIPE,
    id,
    commentId,
  };
}

export const deleteCommentRecipeRequestSuccess = (recipe) => {
  return {
    type: Types.DELETE_COMMENT_RECIPE_SUCCESS,
    recipe,
  };
}

