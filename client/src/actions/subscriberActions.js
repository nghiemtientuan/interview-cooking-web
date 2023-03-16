import * as Types from 'Src/constants/ActionTypes';

export const postSubscriberRequest = (email, callback = null) => {
  return {
    type: Types.POST_SUBSCRIBER,
    email,
    callback,
  };
}
