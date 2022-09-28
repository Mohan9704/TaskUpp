import React from "react";
import Navbar from "./Navbar";
import StarRating from "./StarRating";

const HeroSection = () => {
  return (
    <div className="relative max-w-7xl w-full bg-transparent min-h-screen space-y-10 z-20 ">
      {/* NavBar */}
      <Navbar />
      {/* Main Section */}
      <div className="flex">
        {/* Left Side */}
        <div className="flex flex-col mt-4">
          <div className="flex flex-col  space-y-8 pt-10 px-6 w-[540px]">
            <h2 className=" text-6xl font-extrabold font-inter text-gray-900 dark:text-gray-100 leading-snug">
              One app to replace them all.
            </h2>
            <p className="w-[350px] text-sm font-medium text-gray-800 dark:text-gray-100 font-inter">
              All of your work in one place: Tasks, Docs, Chat, Goals, & more.
            </p>
            {/* <div className="flex flex-col space-y-4 ">
              <input
                type="text"
                className="font-inter w-96 text-lg text-violet-600 font-medium rounded-xl  px-6 py-3 border-2 border-gray-300  focus:outline-violet-600 hover:shadow-2xl "
                placeholder="Enter your email address"
              />
              <button className="w-40 btn bg-violet-600 px-5 py-3 text-white shadow-md hover:shadow-2xl hover:opacity-80">
                Get Started
              </button>
            </div> */}
          </div>

          <div className="flex flex-col items-start px-2 mt-6">
            <div className="flex items-center space-x-4  w-full">
              <StarRating />
              <p className="text-left font-inter font-semibold text-md text-gray-800 dark:text-gray-100">
                Based on 1000+ reviews on
              </p>
            </div>
            <div className="w-full h-full flex items-center px-2 space-x-4">
              <img className="w-[100px] h-[48px]" src="/taskupp-brand-1.png" alt="" />
              <img className="w-[100px] h-[36px] pt-1" src="/taskupp-brand-2.png" alt="" />
              <img className="w-[120px] h-[36px] pt-1" src="/taskupp-brand-3.png" alt="" />
          </div>
          </div>
          
        </div>

        {/* Right Side */}
        <div className="flex">
          <img className="rounded-2xl w-[1000px] h-[550px]" src="/banner.jpg" />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
