import {
  GET_RELEASE_MOVIE,
  GET_RELEASE_MOVIE_ERROR,
  GET_RELEASE_MOVIE_SUCCESS,
} from "./actionTypes";

const initialState = {
  respData: null,
  error: null,
  loading: true,
};

export function ReleseMovieReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RELEASE_MOVIE:
      return {
        ...state,
        loading: true,
      };
    case GET_RELEASE_MOVIE_SUCCESS:
      return {
        ...state,
        respData: action.payload,
        loading: false,
      };
    case GET_RELEASE_MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
