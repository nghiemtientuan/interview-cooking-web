import { call, put, takeLatest } from 'redux-saga/effects';

import { callApi } from 'Src/utils/apiCaller';
import * as Types from 'Src/constants/ActionTypes';

// actions
import { fetchRecipesRequestSuccess } from 'Src/actions/recipesActions';

// utils
import { HTTP_STATUS } from 'Src/constants/httpStatus';

// Sagas
export function* subscriberSagas() {
  yield takeLatest(Types.POST_SUBSCRIBER, onPostSubscriber);
}

function* onPostSubscriber(action) {
  const result = yield call(postSubscriberApi, action.email);

  if (result.status === HTTP_STATUS.http_200) {
    const { data } = result;
    yield put(fetchRecipesRequestSuccess(data));

    return;
  }

  console.error('[ERROR] onPostSubscriber error')
}

// Call APIs
const postSubscriberApi = (email) => callApi('api/user/subscribers', 'POST', {email: email})
    .then(response => response)
    .catch(error => error.response);
