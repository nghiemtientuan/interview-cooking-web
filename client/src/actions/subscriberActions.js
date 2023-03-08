import * as Types from 'Src/constants/ActionTypes';

export const postSubscriberRequest = (email) => {
  return {
    type: Types.FETCH_RECIPES,
    email
  };
}

export const postSubscriberRequestSuccess = () => {
  return {
    type: Types.FETCH_RECIPES_SUCCESS
  };
}
