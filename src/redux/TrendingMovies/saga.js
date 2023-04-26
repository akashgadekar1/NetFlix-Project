import { doGetTrendingMovieApi } from "../../api/TrendingMovie";
import { getTrendingMovieError, getTrendingMovieSuccess } from "./action";
import { call, put, takeLatest } from "redux-saga/effects";
import { GET_TRENDING_MOVIE } from "./actionTypes";

function* getTrendingMovieAsync() {
  try {
    const result = yield call(doGetTrendingMovieApi);
    console.log({ result });
    if (result) {
      yield put(getTrendingMovieSuccess(result.data.results));
    }
  } catch (error) {
    yield put(getTrendingMovieError);
  }
}

export function* watchGetTrendingMovieAsync() {
  yield takeLatest(GET_TRENDING_MOVIE, getTrendingMovieAsync);
}
