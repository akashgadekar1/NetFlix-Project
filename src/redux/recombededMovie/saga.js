import { call, put, takeLatest } from "redux-saga/effects";
import { doGetRecommendedsAPI } from "../../api/RecommendedMovie";
import { getRecommendedMovieError, getRecommendedMovieSuccess } from "./action";
import { GET_RECOMMENDED_MOVIE } from "./actionTypes";

function* getRecommendedsAsync(action) {
  try {
    const result = yield call(doGetRecommendedsAPI, action.id);
    console.log({ result });
    if (result) {
      yield put(getRecommendedMovieSuccess(result.data.results));
    }
  } catch (error) {
    yield put(getRecommendedMovieError(error));
  }
}

export function* watchGetRecommendedAsync() {
  yield takeLatest(GET_RECOMMENDED_MOVIE, getRecommendedsAsync);
}
