import React from "react";

function NumberCard(props) {
  return (
    <div className="relative flex  ">
      <div className="lg:-mt-20   lg:text-[200px] text-[180px]  font-bold h-12 w-32 text-white  ml-5 ">
        {props.id}
      </div>
      <img
        src={props.img}
        alt="Image"
        className="lg:w-36  lg:h-36  w-24 h-24 -ml-8   bg-red-500 rounded-sm cursor-pointer hover:scale-105 ease-in-out duration-300 bg-cover "
      />
    </div>
  );
}

export default NumberCard;
