import { call, put, takeLatest } from "redux-saga/effects";
import { doGetReleseMovieApi } from "../../api/RelsesMovie";
import { getRelaeseMovieError, getRelaeseMovieSuccess } from "./action";
import { GET_RELEASE_MOVIE } from "./actionTypes";

function* getReleseMovieAsync() {
  try {
    const result = yield call(doGetReleseMovieApi);
    // console.log(result.data.results);
    if (result) {
      yield put(getRelaeseMovieSuccess(result.data.results));
    }
  } catch (error) {
    yield put(getRelaeseMovieError);
  }
}

export function* watchGetRelsesMovieAsync() {
  yield takeLatest(GET_RELEASE_MOVIE, getReleseMovieAsync);
}
