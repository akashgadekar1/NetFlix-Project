import {
  GET_TRENDING_MOVIE,
  GET_TRENDING_MOVIE_ERROR,
  GET_TRENDING_MOVIE_SUCCESS,
} from "./actionTypes";

const initialState = {
  respData: null,
  error: null,
  loading: true,
};

export function TendingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRENDING_MOVIE:
      return {
        ...state,
        loading: true,
      };
    case GET_TRENDING_MOVIE_SUCCESS:
      return {
        ...state,
        respData: action.payload,
        loading: false,
      };
    case GET_TRENDING_MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
