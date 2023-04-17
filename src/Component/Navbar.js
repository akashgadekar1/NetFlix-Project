import React from "react";

function Navbar() {
  return (
    <div className="flex  -z-50">
      <div className="grid grid-cols-2">
        {/* Navbar */}
        <div className="text-3xl font-bold m-3 grid-cols-4 justify-start  text-red-800">
          Netflix
        </div>
        <div className="text-3xl font-bold m-3 text-red-800 justify-end ">
          Akash Gdaekar
        </div>
      </div>
    </div>
  );
}

export default Navbar;
