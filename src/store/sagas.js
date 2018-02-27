import { fork, all } from 'redux-saga/effects';
import { getGameList } from '../sagas/';

export default function* rootSagas() {
  yield all([fork(getGameList)]);
}
