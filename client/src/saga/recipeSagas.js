import {call, put, takeLatest} from 'redux-saga/effects';

import {callApi} from 'Src/utils/apiCaller';
import * as Types from 'Src/constants/ActionTypes';

// actions
import {
  fetchSingleRecipeRequestSuccess,
  createNewCommentRecipesRequestSuccess,
  updateCommentRecipeRequestSuccess,
  deleteCommentRecipeRequestSuccess,
} from 'Src/actions/recipeActions';

// utils
import {HTTP_STATUS} from 'Src/constants/httpStatus';
import {handleApiCallerError} from 'Src/utils/handleApiCallerError';
import {toast} from "react-toastify";

// Sagas
export function* recipeSagas() {
  yield takeLatest(Types.FETCH_SINGLE_RECIPE, onFetchSingleRecipe);
  yield takeLatest(Types.CREATE_COMMENT_RECIPE, onCreateCommentRecipe);
  yield takeLatest(Types.UPDATE_COMMENT_RECIPE, onUpdateCommentRecipe);
  yield takeLatest(Types.DELETE_COMMENT_RECIPE, onDeleteCommentRecipe);
}

function* onFetchSingleRecipe(action) {
  const result = yield call(getRecipeApi, action.id);

  if (result.status === HTTP_STATUS.http_200) {
    const {data} = result;
    yield put(fetchSingleRecipeRequestSuccess(data.data));

    return;
  }

  handleApiCallerError(result);
  console.error('[ERROR] onFetchSingleRecipe error')
}

function* onCreateCommentRecipe(action) {
  const {id, comment, callback} = action;
  const result = yield call(createCommentRecipeApi, id, {content: comment});

  if (result.status === HTTP_STATUS.http_200) {
    const {data} = result;
    yield put(createNewCommentRecipesRequestSuccess(data.data));
    if (callback) {
      callback(true);
    }
    toast.success('Bình luận thành công!');

    return;
  }

  if (callback) {
    callback(false);
  }
  handleApiCallerError(result);
  console.error('[ERROR] createCommentRecipe error')
}

function* onUpdateCommentRecipe(action) {
  const {id, commentId, content, callback} = action;
  const result = yield call(updateCommentRecipeApi, id, commentId, {content});

  if (result.status === HTTP_STATUS.http_200) {
    const {data} = result;
    yield put(updateCommentRecipeRequestSuccess(data.data));
    if (callback) {
      callback(true);
    }
    toast.success('Cập nhật bình luận thành công!');

    return;
  }

  if (callback) {
    callback(false);
  }
  handleApiCallerError(result);
  console.error('[ERROR] updateCommentRecipe error')
}

function* onDeleteCommentRecipe(action) {
  const {id, commentId} = action;
  const result = yield call(deleteCommentRecipeApi, id, commentId);

  if (result.status === HTTP_STATUS.http_200) {
    const {data} = result;
    yield put(deleteCommentRecipeRequestSuccess(data.data));
    toast.success('Xóa bình luận thành công!');

    return;
  }

  handleApiCallerError(result);
  console.error('[ERROR] deleteCommentRecipe error')
}

// Call APIs
const getRecipeApi = (id) => callApi(`api/user/recipes/${id}`)
  .then(response => response)
  .catch(error => error.response);
const createCommentRecipeApi = (id, data) => callApi(`api/user/recipes/${id}/comments`, 'POST', data)
  .then(response => response)
  .catch(error => error.response);
const updateCommentRecipeApi = (id, commentId, data) => callApi(
  `api/user/recipes/${id}/comments/${commentId}`,
  'PATCH',
  data
).then(response => response)
  .catch(error => error.response);
const deleteCommentRecipeApi = (id, commentId) => callApi(
  `api/user/recipes/${id}/comments/${commentId}`,
  'DELETE'
)
  .then(response => response)
  .catch(error => error.response);
