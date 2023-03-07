import { call, put, takeLatest } from 'redux-saga/effects';

import { callApi } from 'Src/utils/apiCaller';
import * as Types from 'Src/constants/ActionTypes';
import { fetchVideosRequestSuccess } from 'Src/actions/videoActions';

// utils
import { HTTP_STATUS } from 'Src/constants/httpStatus';

// Sagas
export function* videoSagas() {
  yield takeLatest(Types.FETCH_VIDEOS, onFetchVideos);
}

function* onFetchVideos() {
  const result = yield call(getVideosApi);

  if (result.status === HTTP_STATUS.http_200) {
    const { data } = result;
    yield put(fetchVideosRequestSuccess(data));

    return;
  }

  console.error('[ERROR] onFetchVideos error')
}

// Call APIs
const getVideosApi = () => callApi('videos')
    .then(response => response)
    .catch(error => error.response);
