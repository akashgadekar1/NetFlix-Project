import { combineReducers } from "redux";
import { TendingReducer } from "./TrendingMovies/reducer";
import { DetailsReducer } from "./details/reducer";
import { ReleseMovieReducer } from "./Rel/reducer";

export const appReducer = combineReducers({
  Trending: TendingReducer,
  // details: DetailsReducer,
  Release: ReleseMovieReducer,
  details: DetailsReducer,
});
