import { all, spawn, call } from 'redux-saga/effects';
import { taskSagas } from './taskSagas';
import { categorySagas } from './categorySagas';

export default function* rootSaga() {
  const sagas = [
    taskSagas,
    categorySagas
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
