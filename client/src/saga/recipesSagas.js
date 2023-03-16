import {call, put, takeLatest} from 'redux-saga/effects';

import {callApi} from 'Src/utils/apiCaller';
import * as Types from 'Src/constants/ActionTypes';

// actions
import {fetchRecipesRequestSuccess, fetchRelationRecipesRequestSuccess} from 'Src/actions/recipesActions';

// utils
import {HTTP_STATUS} from 'Src/constants/httpStatus';
import {handleApiCallerError} from 'Src/utils/handleApiCallerError';

// Sagas
export function* recipesSagas() {
  yield takeLatest(Types.FETCH_RECIPES, onFetchRecipes);
  yield takeLatest(Types.FETCH_RELATION_RECIPES, onFetchRelationRecipes);
}

function* onFetchRecipes(action) {
  const result = yield call(getRecipesApi, action.filter);

  if (result.status === HTTP_STATUS.http_200) {
    const {data} = result;
    yield put(fetchRecipesRequestSuccess(data));

    return;
  }

  handleApiCallerError(result);
  console.error('[ERROR] onFetchRecipes error')
}

function* onFetchRelationRecipes(action) {
  const result = yield call(getRelationRecipesApi, action.id);

  if (result.status === HTTP_STATUS.http_200) {
    const {data} = result;
    yield put(fetchRelationRecipesRequestSuccess(data.data));

    return;
  }

  handleApiCallerError(result);
  console.error('[ERROR] onFetchRelationRecipes error')
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

const getRelationRecipesApi = (id) => callApi(`api/user/recipes/${id}/relations`)
  .then(response => response)
  .catch(error => error.response);
