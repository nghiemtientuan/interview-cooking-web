import {call, put, takeLatest} from 'redux-saga/effects';

import {callApi} from 'Src/utils/apiCaller';
import * as Types from 'Src/constants/ActionTypes';

// actions
import {fetchUserLoginRequestSuccess} from 'Src/actions/userActions';

// utils
import {HTTP_STATUS} from 'Src/constants/httpStatus';
import {handleApiCallerError} from 'Src/utils/handleApiCallerError';

// Sagas
export function* userSagas() {
  yield takeLatest(Types.FETCH_USER, onFetchUserLogin);
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

// Call APIs
const getUsersApi = () => callApi(`api/user`)
  .then(response => response)
  .catch(error => error.response);
