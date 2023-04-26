import React, { useEffect } from "react";
import Navbar from "../HomeComponent/Navbar";

import { FaBeer } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetails } from "../redux/details/action";
import { LandScapeImageBaseURL } from "../config/config";

function DetailsPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const detailsData = useSelector((state) => state.details.respData);

  useEffect(() => {
    const id = searchParams.get("id");
    console.log({ id });
    dispatch(getPostDetails(id));
  }, []);

  const data = [
    {
      img: "https://i.pinimg.com/736x/06/fc/ba/06fcbaa756ca3bf730c15372fe986dfe.jpg",
      name: "Akash Gadekar",
      title: "folvi",
      episode: "73 Episode",
    },
    {
      img: "https://w0.peakpx.com/wallpaper/948/778/HD-wallpaper-la-casa-de-papel-berlin-jonymendia-money-heist-netflix.jpg",
      name: "Akash Gadekar",
      title: "folvi",
      episode: "73 Episode",
    },
    {
      img: "https://i.pinimg.com/736x/06/fc/ba/06fcbaa756ca3bf730c15372fe986dfe.jpg",
      name: "Akash Gadekar",
      title: "folvi",
      episode: "73 Episode",
    },
    {
      img: "https://w0.peakpx.com/wallpaper/528/504/HD-wallpaper-berlin-money-heist-shirt.jpg",
      name: "Akash Gadekar",
      title: "folvi",
      episode: "73 Episode",
    },
    {
      img: "https://i.pinimg.com/736x/06/fc/ba/06fcbaa756ca3bf730c15372fe986dfe.jpg",
      name: "Akash Gadekar",
      title: "folvi",
      episode: "73 Episode",
    },
    {
      img: "https://i.pinimg.com/736x/06/fc/ba/06fcbaa756ca3bf730c15372fe986dfe.jpg",
      name: "Akash Gadekar",
      title: "folvi",
      episode: "73 Episode",
    },
    {
      img: "https://i.pinimg.com/736x/06/fc/ba/06fcbaa756ca3bf730c15372fe986dfe.jpg",
      name: "Akash Gadekar",
      title: "folvi",
      episode: "73 Episode",
    },
    {
      img: "https://i.pinimg.com/736x/06/fc/ba/06fcbaa756ca3bf730c15372fe986dfe.jpg",
      name: "Akash Gadekar",
      title: "folvi",
      episode: "73 Episode",
    },
    {
      img: "https://w0.peakpx.com/wallpaper/528/504/HD-wallpaper-berlin-money-heist-shirt.jpg",
      name: "Akash Gadekar",
      title: "folvi",
      episode: "73 Episode",
    },
    {
      img: "https://w0.peakpx.com/wallpaper/528/504/HD-wallpaper-berlin-money-heist-shirt.jpg",
      name: "Akash Gadekar",
      title: "folvi",
      episode: "73 Episode",
    },
  ];
  return (
    <>
      <div className="">
        <Navbar />
        <div className="flex justify-center mb-3">
          <ul class="flex flex-col  md:p-0  font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            <li>
              <a
                href="#"
                class="block py-1 pl-1 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  dark:text-black dark:hover:bg-gray-700 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-1 pl-1 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  dark:text-black  "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-1 pl-1 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  dark:text-black dark:hover:bg-gray-700 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-1 pl-1 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  dark:text-black  "
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/8a6a68144592045.628efcd3e77b5.jpg')]   w-screen  bg-no-repeat opacity-100">
          <div className="h-min  bg-black bg-opacity-80">
            <div className="grid grid-cols-2 justify-between p-12">
              <div class="max-w-xs rounded overflow-hidden shadow-lg h-[430px] bg-white mx-32 ">
                {detailsData && (
                  <img
                    class="w-full h-96"
                    src={LandScapeImageBaseURL + detailsData.poster_path}
                    alt="Sunset in the mountains"
                  />
                )}
                <div class="px-1 py-2">
                  <div class="font-bold text-black font-poppins text-xl mb-2">
                    {detailsData && detailsData.title}
                  </div>
                </div>
              </div>
              <div className="">
                <div className="mt-10">
                  <h1 className="text-white text-3xl font-bold font-poppins">
                    {detailsData && detailsData.title}
                  </h1>
                  <p className="text-white text-sm mt-2">
                    Action,Advature&drama
                  </p>
                </div>
                <div className="flex mt-5  items-center">
                  <div
                    className="radial-progress bg-primary text-white border-2 p-4 rounded-full"
                    style={{ "--value": 70 }}
                  >
                    70%
                  </div>
                  <h1 className="text-white text-2xl mx-3 font-serif  ">
                    User <span className="block">Score</span>
                  </h1>
                  <button className="bg-blue-950 h-10 w-10  mx-2 rounded-full ">
                    <span className="text-white">+</span>
                  </button>
                  <button className="bg-blue-950 h-10 w-10 mx-2 rounded-full ">
                    <span className="text-white">-</span>
                  </button>
                  <button className="bg-blue-950 h-10 w-10 mx-2 rounded-full ">
                    <span className="text-white">*</span>
                  </button>
                  <button className="bg-blue-950 h-10 w-10 mx-2 rounded-full ">
                    <span className="text-white">*</span>
                  </button>
                  <button className=" h-10 w-10 items-center  ">
                    <span className="text-white text-2xl ">*</span>
                  </button>
                  <p className="text-white flex items-center font-poppins">
                    play Now
                  </p>
                </div>
                <div className="mt-3">
                  <h1 className="text-2xl text-white">overflow</h1>
                  <p className="text-base text-white ">
                    The adventures of Ragnar Lothbrok, the greatest hero of his
                    age. The series tells the sagas of Ragnar's band of Viking
                    brothers and his family, as he rises to become King of the
                    Viking tribes. As well as being a fearless warrior, Ragnar
                    embodies the Norse traditions of devotion to the gods.
                    Legend has it that he was a direct descendant of Odin, the
                    god of war and warriors.
                  </p>
                </div>
                <div className="mt-3">
                  <h1 className="text-white">Akash Gadekar</h1>
                  <p className="text-white">creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex ">
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
          <div className="bg-white w-full h-96">
            <div className="flex m-6">
              <h6 className="  mx-4 ">
                <SocialIcon
                  network="twitter"
                  bgColor="#ff5a01"
                  className="mx-2"
                />
                <SocialIcon
                  network="twitter"
                  bgColor="#ff5a01"
                  className="mx-2"
                />
                <SocialIcon
                  network="twitter"
                  bgColor="#ff5a01"
                  className="h-7"
                />
              </h6>
            </div>
            <div className="mx-12">
              <h1 className="text-xl font-poppins">facts</h1>
              <h1 className="text-xl font-poppins mt-1">
                stustu<span className="block text-sm">Ended</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
