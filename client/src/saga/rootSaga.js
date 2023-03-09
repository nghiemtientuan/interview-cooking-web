import { all, spawn, call } from 'redux-saga/effects';
import { taskSagas } from './taskSagas';
import { categorySagas } from './categorySagas';
import { videoSagas } from './videoSagas';
import { recipesSagas } from './recipesSagas';
import { subscriberSagas } from './subscriberSagas';
import { recipeSagas } from './recipeSagas';

export default function* rootSaga() {
  const sagas = [
    taskSagas,
    categorySagas,
    videoSagas,
    recipesSagas,
    subscriberSagas,
    recipeSagas,
  ];

  yield all(sagas.map(saga => spawn(function* () {
    while (true) {
      try {
        yield call(saga);
        break;
      } catch (e) {
        console.error('[ERROR] Saga error:', e);
      }
    }
  })));
}
