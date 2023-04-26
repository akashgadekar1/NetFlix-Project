import { call, put, takeLatest } from "redux-saga/effects";

import { doGetDetailsAPI } from "../../api/detailsapi";
import { getPostDetailsSuccess, getPostDetalisError } from "./action";
import { GET_POST_DETAILS } from "./actionTypes";

function* getDetailsAsync(action) {
  try {
    const result = yield call(doGetDetailsAPI, action.id);
    console.log(result.data);
    if (result) {
      yield put(getPostDetailsSuccess(result.data));
    }
  } catch (error) {
    yield put(getPostDetalisError(error));
  }
}

export function* watchGetDetailsAsync() {
  yield takeLatest(GET_POST_DETAILS, getDetailsAsync);
}
