import * as Types from 'Src/constants/ActionTypes';

export const fetchCategoriesRequest = () => {
  return {
    type: Types.FETCH_CATEGORIES
  };
}

export const fetchCategoriesRequestSuccess = (categories) => {
  return {
    type: Types.FETCH_CATEGORIES_SUCCESS,
    categories
  };
}
