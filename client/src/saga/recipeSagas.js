import { call, put, takeLatest } from 'redux-saga/effects';

import { callApi } from 'Src/utils/apiCaller';
import * as Types from 'Src/constants/ActionTypes';
import { fetchRecipesRequestSuccess } from 'Src/actions/recipeActions';

// utils
import { HTTP_STATUS } from 'Src/constants/httpStatus';

// Sagas
export function* recipeSagas() {
  yield takeLatest(Types.FETCH_RECIPES, onFetchRecipes);
}

function* onFetchRecipes(action) {
  const result = yield call(getRecipesApi, action.filter);

  if (result.status === HTTP_STATUS.http_200) {
    const { data } = result;
    yield put(fetchRecipesRequestSuccess(data));

    return;
  }

  console.error('[ERROR] onFetchVideos error')
}

// Call APIs
const getRecipesApi = (filter) => callApi('api/user/recipes', 'GET', filter)
    .then(response => response)
    .catch(error => error.response);
