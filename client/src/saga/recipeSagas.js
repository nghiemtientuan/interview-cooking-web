import { call, put, takeLatest } from 'redux-saga/effects';

import { callApi } from 'Src/utils/apiCaller';
import * as Types from 'Src/constants/ActionTypes';

// actions
import { fetchSingleRecipeRequestSuccess } from 'Src/actions/recipeActions';

// utils
import { HTTP_STATUS } from 'Src/constants/httpStatus';

// Sagas
export function* recipeSagas() {
  yield takeLatest(Types.FETCH_SINGLE_RECIPE, onFetchSingleRecipe);
}

function* onFetchSingleRecipe(action) {
  const result = yield call(getRecipeApi, action.id);

  if (result.status === HTTP_STATUS.http_200) {
    const { data } = result;
    yield put(fetchSingleRecipeRequestSuccess(data.data));

    return;
  }

  console.error('[ERROR] onFetchSingleRecipe error')
}

// Call APIs
const getRecipeApi = (id) => callApi(`api/user/recipes/${id}`)
    .then(response => response)
    .catch(error => error.response);
