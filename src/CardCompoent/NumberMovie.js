import React from "react";
import Numbercard from "./Numbercard";

function NumberMovie(props) {
  const data = [
    {
      id: 1,
      img: "https://i.pinimg.com/originals/f6/35/fd/f635fda7eac6e9315006ecfba15db2b6.jpg",
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/51dHGU+3x-L.jpg",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq5rxEoHN-cIt3riFX2Kwfb_lKCO9FWZXiNQ&usqp=CAU",
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/51dHGU+3x-L.jpg",
    },
    {
      id: 5,
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPun_5G7AFJS38W9_7OFbfhoKJDUpzKJ__5T1lP2VLq3cEtwpp",
    },
    {
      id: 6,
      img: "https://i.pinimg.com/originals/42/6f/08/426f08deddcab7156b621266fc6710c2.jpg",
    },
    {
      id: 7,
      img: "https://i.pinimg.com/originals/42/6f/08/426f08deddcab7156b621266fc6710c2.jpg",
    },
    {
      id: 8,
      img: "https://i.pinimg.com/originals/42/6f/08/426f08deddcab7156b621266fc6710c2.jpg",
    },
  ];
  return (
    <>
      <h1 className="text-white lg:text-2xl font-medium lg:p-3 inline-block mb-3 font-poppins ">
        Top 10 Movies
      </h1>

      <div className=" relative flex rounded-lg  ">
        <div className="overflow-x-scroll scroll  whitespace-nowrap scroll-smooth  scrollbar-hide flex   ">
          {data.slice(0, 6).map((val, index) => {
            return <Numbercard key={index} img={val.img} id={val.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default NumberMovie;
