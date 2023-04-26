import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { ImageBaseURL, LandScapeImageBaseURL } from "../config/config";
import { getTrendingMovie } from "../redux/TrendingMovies/action";
import MovieCard from "../CardCompoent/MovieCard";

function TrendingMovie() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const trendingMovies = useSelector((state) => state.Trending.respData);

  useEffect(() => {
    dispatch(getTrendingMovie());
  }, []);

  return (
    <>
      <h1 className="text-white text-2xl font-medium font-poppins  inline-block  m-4">
        Trending Movies
      </h1>
      <div className="relative flex rounded-lg">
        <div className="overflow-x-scroll  scroll-smooth  scrollbar-hide flex ">
          {trendingMovies &&
            trendingMovies.map((val, index) => {
              return (
                <MovieCard
                  title={val.title}
                  key={index}
                  img={LandScapeImageBaseURL + val.backdrop_path}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default TrendingMovie;
