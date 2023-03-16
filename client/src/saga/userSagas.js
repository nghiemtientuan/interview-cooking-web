import {call, put, takeLatest} from 'redux-saga/effects';
import {signOut} from 'firebase/auth';

import {callApi} from 'Src/utils/apiCaller';
import * as Types from 'Src/constants/ActionTypes';

// actions
import {fetchUserLoginRequestSuccess, logoutUserRequestSuccess, updateUserRequestSuccess} from 'Src/actions/userActions';

// utils
import {HTTP_STATUS} from 'Src/constants/httpStatus';
import {handleApiCallerError} from 'Src/utils/handleApiCallerError';

// auth
import {auth} from 'Src/auth';
import {toast} from "react-toastify";

// Sagas
export function* userSagas() {
  yield takeLatest(Types.FETCH_USER, onFetchUserLogin);
  yield takeLatest(Types.LOGOUT_USER, onLogoutUser);
  yield takeLatest(Types.UPDATE_USER, onUpdateUser);
}

function* onFetchUserLogin() {
  const result = yield call(getUsersApi);

  if (result.status === HTTP_STATUS.http_200) {
    const {data} = result;
    yield put(fetchUserLoginRequestSuccess(data.data));

    return;
  }

  handleApiCallerError(result);
  console.error('[ERROR] onFetchUserLogin error')
}

function* onLogoutUser(action) {
  const {callback} = action;
  try {
    yield signOut(auth);
    yield put(logoutUserRequestSuccess());
    if (callback) {
      callback();
    }
  } catch (error) {
    console.error('[LOGOUT] Error: ', error);
  }
}

function* onUpdateUser(action) {
  const result = yield call(updateUserApi, action.user);

  if (result.status === HTTP_STATUS.http_200) {
    const {data} = result;
    yield put(updateUserRequestSuccess(data.data));
    toast.success('Cập nhật thông tin người dùng thành công!');

    return;
  }

  handleApiCallerError(result);
  console.error('[ERROR] updateUser error')
}

// Call APIs
const getUsersApi = () => callApi(`api/user`)
  .then(response => response)
  .catch(error => error.response);

const updateUserApi = (user) => callApi(`api/user`, 'POST', user)
  .then(response => response)
  .catch(error => error.response);
