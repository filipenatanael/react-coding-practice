import { delay } from 'redux-saga';
import { takeLatest, put, call, select } from 'redux-saga/effects';

import apiGet from './api';

// function* setTodoList(action) { action.payload }
function* getTodoList() {
  try {
    const response = yield call(apiGet);

    yield put({ type: 'SUCCESS_TODO_LIST', payload: { data: response } });
  } catch (err) {
    yield put({ type: 'FAILURE_TODO_LIST' });
  }
}

export default function* root() {
  yield [
    // takeEvery('REQUEST_TODO_LIST', getTodoList),
    takeLatest('REQUEST_TODO_LIST', getTodoList),
  ];
}
