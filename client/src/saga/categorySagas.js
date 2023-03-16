import { call, put, takeLatest } from 'redux-saga/effects';

import { callApi } from 'Src/utils/apiCaller';
import * as Types from 'Src/constants/ActionTypes';
import { fetchCategoriesRequestSuccess } from 'Src/actions/categoryActions';

// utils
import { HTTP_STATUS } from 'Src/constants/httpStatus';

// Sagas
export function* categorySagas() {
  yield takeLatest(Types.FETCH_CATEGORIES, onFetchCategories);
}

function* onFetchCategories() {
  const result = yield call(getCategoriesApi);

  if (result?.status === HTTP_STATUS.http_200) {
    const { data } = result?.data;
    yield put(fetchCategoriesRequestSuccess(data));

    return;
  }

  console.error('[ERROR] onFetchCategories error')
}

// Call APIs
const getCategoriesApi = () => callApi('api/user/categories')
    .then(response => response)
    .catch(error => error.response);
