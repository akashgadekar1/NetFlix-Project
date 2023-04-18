import React from "react";

function Card3(props) {
  return (
    <div className="relative flex  ">
      <div className="  -mt-20  text-[200px]  font-bold h-4 w-32 text-white  ml-12   ">
        {props.id}
      </div>
      <img
        src={props.img}
        alt="Image"
        className="w-36  h-36  -mx-3  bg-red-500 rounded-sm cursor-pointer hover:scale-105 ease-in-out duration-300 bg-cover "
      />
    </div>
  );
}

export default Card3;
