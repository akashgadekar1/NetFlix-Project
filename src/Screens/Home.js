import React from "react";
import MovieCard from "../CardCompoent/MovieCard";
import NewReleseMovie from "./NewReleseMovie";
import TrendingMovie from "./TrendingMovie";
import NumberMovie from "./NumberMovie";

function Home() {
  return (
    <>
      <NewReleseMovie />
      <TrendingMovie />
      <NumberMovie />
    </>
  );
}

export default Home;
