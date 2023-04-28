import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendedMovie } from "../redux/recombededMovie/action";
import { LandScapeImageBaseURL } from "../config/config";

function RecombededMovie() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const recommended = useSelector((state) => state.recommended.respData);

  useEffect(() => {
    const id = searchParams.get("id");
    console.log({ id });
    dispatch(getRecommendedMovie(id));
  }, []);

  return (
    <>
      <h1 className="text-white text-2xl lg:p-3  font-medium font-poppins  inline-block  m-4">
        Trending Movies
      </h1>
      <div className="relative flex rounded-lg">
        <div className="overflow-x-scroll scroll  whitespace-nowrap scroll-smooth  scrollbar-hide flex  ">
          {recommended &&
            recommended.length > 0 &&
            recommended.map((val, index) => {
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

export default RecombededMovie;
