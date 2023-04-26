import { watchGetTrendingMovieAsync } from "./TrendingMovies/saga";
import { all, fork } from "redux-saga/effects";
import { watchGetDetailsAsync } from "./details/saga";
import { watchGetRelsesMovieAsync } from "./Rel/saga";

export function* rootSaga() {
  yield all([
    fork(watchGetTrendingMovieAsync),
    // fork(watchGetDetailsAsync),
    fork(watchGetRelsesMovieAsync),
    fork(watchGetDetailsAsync),
  ]);
}
