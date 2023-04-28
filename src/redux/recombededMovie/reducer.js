import {
  GET_RECOMMENDED_MOVIE,
  GET_RECOMMENDED_MOVIE_ERROR,
  GET_RECOMMENDED_MOVIE_SUCCESS,
} from "./actionTypes";

const initialState = {
  respData: null,
  error: null,
  loading: true,
  id: null,
};

export function RecommendedReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECOMMENDED_MOVIE:
      return {
        ...state,
        id: action.id,
        loading: true,
      };
    case GET_RECOMMENDED_MOVIE_SUCCESS:
      return {
        ...state,
        respData: action.payload,
        loading: false,
      };
    case GET_RECOMMENDED_MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
