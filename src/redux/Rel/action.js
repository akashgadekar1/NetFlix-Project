import {
  GET_RELEASE_MOVIE,
  GET_RELEASE_MOVIE_ERROR,
  GET_RELEASE_MOVIE_SUCCESS,
} from "./actionTypes";

export const getRelaeseMovie = () => {
  return {
    type: GET_RELEASE_MOVIE,
  };
};

export const getRelaeseMovieSuccess = (respData) => {
  return {
    type: GET_RELEASE_MOVIE_SUCCESS,
    payload: respData,
  };
};

export const getRelaeseMovieError = (error) => {
  return {
    type: GET_RELEASE_MOVIE_ERROR,
    payload: error,
  };
};
