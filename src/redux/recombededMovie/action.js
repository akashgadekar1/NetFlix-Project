import {
  GET_RECOMMENDED_MOVIE,
  GET_RECOMMENDED_MOVIE_ERROR,
  GET_RECOMMENDED_MOVIE_SUCCESS,
} from "./actionTypes";

export const getRecommendedMovie = (id) => {
  return {
    type: GET_RECOMMENDED_MOVIE,
    id,
  };
};

export const getRecommendedMovieSuccess = (respData) => {
  return {
    type: GET_RECOMMENDED_MOVIE_SUCCESS,
    payload: respData,
  };
};
export const getRecommendedMovieError = (error) => {
  return {
    type: GET_RECOMMENDED_MOVIE_ERROR,
    payload: error,
  };
};
