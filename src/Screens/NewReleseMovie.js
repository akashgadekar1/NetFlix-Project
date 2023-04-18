import React from "react";
import Card from "../CardCompoent/Card";

function NewReleseMovie() {
  const data = [
    {
      img: "https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTwNBoEdZ1NvgnhQguIRrlOCl26E8tmwBB7zCRp6FTyrvmHIuo00XK6CRU_XjMJmFvhbiDZqLIcNCkneiAW7v1G8PfoYkE6h1fLbfYkTqRG2nIxWHLac6eAH56X3I1SB-0l9Gw.jpg?r=71f",
    },
    {
      img: "https://i.ytimg.com/vi/rgULl9Qi2WM/maxresdefault.jpg",
    },
    {
      img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/2e88e769-5c2c-4c89-87c0-0a325b4408dd.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    },
    {
      img: "https://i.pinimg.com/originals/42/6f/08/426f08deddcab7156b621266fc6710c2.jpg",
    },
    {
      img: "https://i.pinimg.com/originals/42/6f/08/426f08deddcab7156b621266fc6710c2.jpg",
    },
    {
      img: "https://i.pinimg.com/originals/42/6f/08/426f08deddcab7156b621266fc6710c2.jpg",
    },
    {
      img: "https://i.pinimg.com/originals/42/6f/08/426f08deddcab7156b621266fc6710c2.jpg",
    },
    {
      img: "https://i.pinimg.com/originals/42/6f/08/426f08deddcab7156b621266fc6710c2.jpg",
    },
  ];
  return (
    <>
      <div className="   ">
        <div className=" box-border">
          <h1 className="text-white text-2xl font-medium font-poppins lg:p-3 inline-block m-3 ">
            Top 10 Movies
          </h1>
          <div className="relative flex rounded-lg">
            <div className="overflow-x-scroll scroll  whitespace-nowrap scroll-smooth  scrollbar-hide flex ">
              {data.map((val, index) => {
                return <Card key={index} img={val.img} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewReleseMovie;
