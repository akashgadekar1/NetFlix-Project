import React from "react";

function Card2(props) {
  // console.log(img);
  return (
    <>
      <img
        className="lg:w-[250px] lg:h-[150px]  w-[200px] h-[120px]
               inline-block ml-3 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-xl "
        src={props.img}
      />
    </>
  );
}

export default Card2;
