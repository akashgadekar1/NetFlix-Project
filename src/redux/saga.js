import { watchGetTrendingMovieAsync } from "./TrendingMovies/saga";
import { all, fork } from "redux-saga/effects";
import { watchGetDetailsAsync } from "./details/saga";
import { watchGetRelsesMovieAsync } from "./Rel/saga";
import { watchGetRecommendedAsync } from "./recombededMovie/saga";

export function* rootSaga() {
  yield all([
    fork(watchGetTrendingMovieAsync),

    fork(watchGetRelsesMovieAsync),
    fork(watchGetDetailsAsync),
    fork(watchGetRecommendedAsync),
  ]);
}
