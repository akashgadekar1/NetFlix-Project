import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getRelaeseMovie } from "../redux/Rel/action";
import { LandScapeImageBaseURL } from "../config/config";
import MovieCard from "./MovieCard";

function NewReleseMovie() {
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);
  const RelseseMovie = useSelector((state) => state.Release.respData);

  useEffect(() => {
    dispatch(getRelaeseMovie());
  }, []);

  return (
    <>
      <h1 className="text-white lg:text-2xl font-medium font-poppins lg:p-3 inline-block m-3 ">
        Top 10 Movies
      </h1>
      <div className="relative flex rounded-lg">
        <div className="overflow-x-scroll scroll  whitespace-nowrap scroll-smooth  scrollbar-hide flex ">
          {RelseseMovie &&
            RelseseMovie.map((val, index) => {
              return (
                <MovieCard
                  id={val.id}
                  release_date={val.release_date}
                  vote_average={val.vote_average}
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

export default NewReleseMovie;
