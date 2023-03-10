import { call, put, takeLatest } from 'redux-saga/effects';

import { callApi } from 'Src/utils/apiCaller';
import * as Types from 'Src/constants/ActionTypes';

// actions
import { fetchRecipesRequestSuccess } from 'Src/actions/recipesActions';

// utils
import { HTTP_STATUS } from 'Src/constants/httpStatus';
import {object} from "prop-types";

// Sagas
export function* recipesSagas() {
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
const getRecipesApi = (filter) => {
  let endPoint = 'api/user/recipes';
  const params = Object.keys(filter)
    .map(key => filter[key] ? `${key}=${filter[key]}` : '')
    .filter(n => n)
    .join('&');
  if (params) {
    endPoint += `?${params}`;
  }

  return callApi(endPoint)
    .then(response => response)
    .catch(error => error.response);
}
