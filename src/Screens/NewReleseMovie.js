import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getRelaeseMovie } from "../redux/Rel/action";
import { LandScapeImageBaseURL } from "../config/config";
import MovieCard from "../CardCompoent/MovieCard";

function NewReleseMovie() {
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);
  const RelseseMovie = useSelector((state) => state.Release.respData);

  useEffect(() => {
    dispatch(getRelaeseMovie());
  }, []);

  return (
    <>
      <div className="   ">
        <div className=" box-border">
          <h1 className="text-white text-2xl font-medium font-poppins lg:p-3 inline-block m-3 ">
            Top 10 Movies
          </h1>
          <div className="relative flex rounded-lg">
            <div className="overflow-x-scroll scroll  whitespace-nowrap scroll-smooth  scrollbar-hide flex ">
              {RelseseMovie &&
                RelseseMovie.map((val, index) => {
                  return (
                    <MovieCard
                      id={val.id}
                      key={index}
                      img={LandScapeImageBaseURL + val.backdrop_path}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewReleseMovie;
