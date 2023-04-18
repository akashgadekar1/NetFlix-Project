import React from "react";

function Card(props) {
  return (
    <>
      <img
        className="lg:w-[250px] lg:h-[150px]  w-[200px] h-[120px]
               inline-block ml-3 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-md "
        src={props.img}
      />
    </>
  );
}

export default Card;
