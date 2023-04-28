import { combineReducers } from "redux";
import { TendingReducer } from "./TrendingMovies/reducer";
import { DetailsReducer } from "./details/reducer";
import { ReleseMovieReducer } from "./Rel/reducer";
import { RecommendedReducer } from "./recombededMovie/reducer";

export const appReducer = combineReducers({
  Trending: TendingReducer,

  Release: ReleseMovieReducer,
  details: DetailsReducer,
  recommended: RecommendedReducer,
});
