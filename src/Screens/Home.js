import React from "react";
import MovieCard from "../CardCompoent/MovieCard";
import NewReleseMovie from "../CardCompoent/NewReleseMovie";
import TrendingMovie from "../CardCompoent/TrendingMovie";
import NumberMovie from "../CardCompoent/NumberMovie";

function Home() {
  return (
    <>
      <div className=" bg-black h-full w-full  ">
        <NewReleseMovie />
        <TrendingMovie />
        <NewReleseMovie />
        <TrendingMovie />
        <NumberMovie />
      </div>
    </>
  );
}

export default Home;
