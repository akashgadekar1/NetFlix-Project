import {
  GET_TRENDING_MOVIE,
  GET_TRENDING_MOVIE_ERROR,
  GET_TRENDING_MOVIE_SUCCESS,
} from "./actionTypes";

export const getTrendingMovie = () => {
  return {
    type: GET_TRENDING_MOVIE,
  };
};

export const getTrendingMovieSuccess = (respData) => {
  return {
    type: GET_TRENDING_MOVIE_SUCCESS,
    payload: respData,
  };
};

export const getTrendingMovieError = (error) => {
  return {
    type: GET_TRENDING_MOVIE_ERROR,
    payload: error,
  };
};
