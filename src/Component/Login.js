import React from "react";
import Navbar from "./Navbar";

function Login() {
  return (
    <div className="bg-[url('https://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg')] h-screen w-screen bg-no-repeat  ">
      <div className="h-screen w-full  bg-gradient-to-l from-gray-700 via-gray-900 to-black opacity-60">
        <Navbar />
      </div>
    </div>
  );
}

export default Login;
