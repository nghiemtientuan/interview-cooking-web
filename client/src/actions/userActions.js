import * as Types from 'Src/constants/ActionTypes';

export const fetchUserLoginRequest = () => {
  return {
    type: Types.FETCH_USER,
  };
}

export const fetchUserLoginRequestSuccess = (user) => {
  return {
    type: Types.FETCH_USER_SUCCESS,
    user,
  };
}

export const logoutUserRequest = (callback) => {
  return {
    type: Types.LOGOUT_USER,
    callback,
  };
}

export const logoutUserRequestSuccess = () => {
  return {
    type: Types.LOGOUT_USER_SUCCESS,
  };
}
