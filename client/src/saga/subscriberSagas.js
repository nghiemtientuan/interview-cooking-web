import {call, takeLatest} from 'redux-saga/effects';
import {toast} from 'react-toastify';

import {callApi} from 'Src/utils/apiCaller';
import * as Types from 'Src/constants/ActionTypes';

// utils
import {HTTP_STATUS} from 'Src/constants/httpStatus';
import {handleApiCallerError} from 'Src/utils/handleApiCallerError';

// Sagas
export function* subscriberSagas() {
  yield takeLatest(Types.POST_SUBSCRIBER, onPostSubscriber);
}

function* onPostSubscriber(action) {
  const result = yield call(postSubscriberApi, action.email);

  if (result.status === HTTP_STATUS.http_200) {
    toast.success('Subscribe success!');
    if (action?.callback) {
      action?.callback();
    }

    return;
  }

  handleApiCallerError(result);
  console.error('[ERROR] onPostSubscriber error')
}

// Call APIs
const postSubscriberApi = (email) => callApi('api/user/subscribers', 'POST', {email: email})
  .then(response => response)
  .catch(error => error.response);
