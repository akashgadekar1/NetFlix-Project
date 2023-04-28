import React, { useEffect } from "react";
import Navbar from "../HomeComponent/Navbar";

import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetails } from "../redux/details/action";
import { LandScapeImageBaseURL } from "../config/config";
import RecombededMovie from "../CardCompoent/RecombededMovie";

function DetailsPage(props) {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const detailsData = useSelector((state) => state.details.respData);

  useEffect(() => {
    const id = searchParams.get("id");
    console.log({ id });
    dispatch(getPostDetails(id));
  }, []);

  return (
    <>
      <div className=" relative overflow-hidden">
        {detailsData && (
          <img
            className="h-screen  w-screen cursor-pointer "
            src={"https://image.tmdb.org/t/p/w1280" + detailsData.backdrop_path}
          />
        )}

        <div className="absolute bottom-0 h-96 w-full   rounded-sm  bg-gradient-to-t from-black to-transparent">
          <h1 className="text-white m-5 text-base font-poppins  tracking-[.30em]">
            <span className="text-4xl text-red-700 font-bold ">N</span>etflix...
          </h1>
          <div className="flex">
            {detailsData.genres.map((item, index) => {
              return (
                <div className="h-10 p-4 ml-2 bg-transparent border border-black  font-poppins text-base text-white rounded-full flex items-center justify-center">
                  {item.name}
                </div>
              );
            })}
          </div>
          <div className="mt-18 ml-3">
            <p className="text-white text-[55px] font-semibold mx-2 font-poppins tracking-tighter ">
              {detailsData && detailsData.original_title}
            </p>
            <h1 className="text-white text-sm w-2/5 font-light mx-2 font-poppins ">
              {detailsData && detailsData.overview}
            </h1>
            <div className="m-2 flex items-center ">
              <div className="flex justify-center items-center ">
                <div className="bg-white p-2 w-20 rounded-lg text-black font-bold justify-center items-center flex font-poppins">
                  play
                </div>
                <div className="bg-red-600 ml-2 p-2 rounded-lg text-white text-sm justify-center items-center flex font-poppins">
                  More info
                </div>
                <div className="bg-red-600 h-10 w-10 rounded-full text-white text-xl justify-center items-center flex ml-3">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-white  mx-5 text-2xl font-poppins">Movie Cast</h1>
      {/* <div className="flex ">
        <div className="relative flex rounded-lg m-6 w-8/12 h-52">
          <div className="overflow-x-scroll scroll  whitespace-nowrap scroll-smooth  scrollbar-hide flex gap-3 ">
            {data.slice(0, 10).map((item, index) => {
              return (
                <div class="w-40  rounded  shadow-2xl    ">
                  <img
                    class="w-40 h-32"
                    src={item.img}
                    alt="Sunset in the mountains"
                  />
                  <div class="px-2 py-2 font-poppins">
                    <div class="font-bold text-black font-poppins text-sm ">
                      {item.name}
                    </div>
                    <p>{item.title}</p>
                    <p className="font-poppins">{item.episode}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
      <RecombededMovie />
    </>
  );
}

export default DetailsPage;
