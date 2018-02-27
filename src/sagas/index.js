import { call, put, takeEvery } from 'redux-saga/effects';
import GamesApi from '../api';
import * as actions from '../actions';

export function* fetchGameList() {
  try {
    const result = yield call(GamesApi.getGameList);
    yield put(actions.loadGameListSuccess(result));
  } catch (error) {
    console.error(`!!! ERROR !!!: ${error}`);
  }
}

export function* getGameList() {
  yield takeEvery(actions.LOAD_GAME_LIST_REQUEST, fetchGameList);
}
