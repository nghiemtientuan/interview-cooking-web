import * as Types from 'Src/constants/ActionTypes';

export const postSubscriberRequest = (email) => {
  return {
    type: Types.POST_SUBSCRIBER,
    email
  };
}

export const postSubscriberRequestSuccess = () => {
  return {
    type: Types.POST_SUBSCRIBER_SUCCESS
  };
}
