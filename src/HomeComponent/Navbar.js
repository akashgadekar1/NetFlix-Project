import React from "react";

function Navbar() {
  return (
    <nav class=" bg-transparent  lg:w-full  px-12   ">
      <div class=" flex items-center justify-between   p-4">
        <a href="https://flowbite.com/" class="">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
            class="lg:h-9 lg:mr-3 lg:w-44 h-9 w-28"
            alt="Flowbite Logo"
          />
        </a>
        <div class="flex justify-center ">
          <button
            type="button"
            className="text-white   bg-black bg-opacity-30 flex bg-transparent  justify-center items-center font-medium rounded-lg  lg:px-4 lg:py-1 text-sm px-2 py-1 text-center  lg:w-32  w-16  border-[2px] tracking-wide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="lg:w-16  lg:mr-2 lg:visible"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>

            <span className="font-poppins  ">English</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-16 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            class="text-white bg-red-700  font-medium rounded-lg font-poppins lg:px-4 lg:py-2 px-2 py-1 text-center mr-3 md:mr-0 mx-2  border-[2px] tracking-wide"
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
