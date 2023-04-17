import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";

function Login() {
  return (
    <div className="bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/8a6a68144592045.628efcd3e77b5.jpg')] h-screen w-screen bg-no-repeat opacity-100 ">
      <div className="h-screen w-full bg-black bg-opacity-60 ">
        <Navbar />
        <div className="grid grid-cols-1 lg:p-24 p-16">
          <div className="lg:text-[70px]  text-[40px]  font-bold text-white font-poppins">
            Unlimited movies, TV shows
            <span className="lg:block"> and more...</span>
            <p className="text-lg font-semibold font-poppins">
              Watch anywhere .cancel anytime
            </p>
            <p className="text-base font-light mt-4 font-poppins">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="mt-5 lg:flex block  items-center">
              <div className="">
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border rounded-sm border-white font-medium text-gray-900 text-sm  block w-96 p-4 dark:bg-gray-900  dark:placeholder-gray-400 dark:text-white font-poppins "
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="lg:mt-1 mt-5">
                <button
                  type="button"
                  class="bg-red-600 border border-white font-poppins    text-sm  block w-36 p-4 lg:mx-5  text-white"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
