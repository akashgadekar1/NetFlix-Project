import React from "react";
import { Link } from "react-router-dom";

function MovieCard(props) {
  // console.log(img);
  return (
    <Link
      to={{
        pathname: "/details",
        search: "id=" + props.id,
      }}
    >
      <div className="lg:w-96 w-52 ml-2 relative overflow-hidden rounded-xl">
        <img
          className="lg:h-60 h-28
          hover:scale-125 transition-all duration-300
      cursor-pointer  rounded-xl"
          src={props.img}
        />

        <div className="absolute bottom-0  h-36 w-full   rounded-sm  bg-gradient-to-t from-black to-transparent">
          <div className="lg:mt-10 mt-28 ml-3">
            <h1 className="text-white lg:text-2xl text-sm font-semibold mx-2 font-poppins ">
              {props.title.length > 24
                ? props.title.slice(0, 24) + " .."
                : props.title}
            </h1>
            <h1 className="text-white lg:visible invisible text-sm font-light mx-2 font-poppins ">
              {props.release_date}
            </h1>
            <div className="mx-2 flex items-center ">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/New-imdb-logo.png/1024px-New-imdb-logo.png"
                className="h-6 "
              />
              <span className="text-white mx-2 font-poppins text-xs ">
                {props.vote_average.toFixed(1)} Rating
              </span>
              <div className="flex mx-14 justify-center items-center ">
                <div className="bg-red-600 h-10 w-28 rounded-full text-white text-sm justify-center items-center flex font-poppins">
                  Watch Now
                </div>
                <div className="bg-red-600 h-10 w-10 rounded-full text-white text-xl justify-center items-center flex ml-3">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
