import React from "react";
import { UserIcon, LockClosedIcon } from "@heroicons/react/outline";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineGooglePlus,
} from "react-icons/ai";

import Logo from "./Logo";
import Link from "next/link";

const Login = ({
  username,
  password,
  handleSignIn,
  handleUsername,
  handlePassword,
}) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-50 z-10 overflow-hidden">
      {/* SignUp Nav Section   */}
      <div className="flex justify-between mx-auto max-w-7xl w-full h-16 bg-transparent mt-4">
        <div className="flex items-center">
          {/* Logo */}
          <Logo />
        </div>
        {/* Log In Button */}
        <div className="flex items-center space-x-4">
          <p className="text-md font-inter font-semibold text-gray-800">
            Not Signed Up yet?
          </p>
          <Link href="/signup">
            <a>
              <button className="btn text-md text-gray-50 bg-violet-600 hover:bg-violet-500 shadow-md hover:shadow-2xl  hover:-translate-y-1 px-6">
                Sign Up
              </button>
            </a>
          </Link>
        </div>
      </div>
      <div className="pt-6 flex flex-col bg-gray-50 shadow-2xl w-[450px] h-[580px] rounded-2xl z-20 mx-auto mt-2">
        <div className="flex justify-center ">
          <Logo />
        </div>
        <div className="flex flex-col space-y-6 flex-1 px-12 py-4 pt-6">
          <div className="flex items-center justify-center text-3xl font-inter font-bold text-gray-800">
            Login
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs font-inter font-semibold text-gray-900">
              Username
            </label>
            <div className="flex border-[1px] border-gray-500 px-2 py-2 rounded-lg hover:ring-1 hover:ring-violet-600">
              <UserIcon className="h-6 w-6 text-gray-500" />
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsername}
                placeholder="Enter your username"
                className="pl-2 bg-gray-50 text-sm font-normal text-gray-500 font-inter focus:outline-none ml-2 w-full"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs font-inter font-semibold text-gray-900">
              Choose Password
            </label>
            <div className="flex border-[1px] border-gray-500 px-2 py-2 rounded-lg hover:ring-1 hover:ring-violet-600">
              <LockClosedIcon className="h-6 w-6 text-gray-500" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePassword}
                placeholder="Enter your Password"
                className="pl-2 bg-gray-50  text-sm font-normal text-gray-500 font-inter focus:outline-none ml-2 w-full"
              />
            </div>
          </div>

          <button
            onClick={handleSignIn}
            type="submit"
            className="w-full btn bg-violet-600 px-5 py-3 text-white shadow-2xl shadow-violet-400 hover:shadow-2xl hover:opacity-80"
          >
            Login
          </button>

          {/* Or Continue with  */}

          <div className="flex items-center justify-between">
            <div className="border-t-[1px] border-gray-400 w-[125px]"></div>
            <p className=" text-xs text-center font-inter font-semibold text-violet-600">
              Or login with
            </p>
            <div className="border-t-[1px] border-gray-400 w-[120px]"></div>
          </div>

          {/* Custom Login using Google , Github, Twitter  */}
          <div className="flex justify-between space-x-4 items-center w-full  border-violet-500 ">
            <button className="btn-social bg-gray-50 flex justify-center">
              <AiOutlineGooglePlus className=" text-rose-500" size="2rem" />
            </button>

            <button className="btn-social bg-gray-50 flex justify-center">
              <AiOutlineGithub className=" text-gray-900" size="2rem" />
            </button>

            <button className="btn-social bg-gray-50 flex justify-center">
              <AiOutlineTwitter className=" text-cyan-300" size="2rem" />
            </button>
          </div>

          {/* <a href="/signup-magiclink" className="text-xs text-center font-inter font-normal text-violet-600">or Sign Up with Magic Link</a> */}
        </div>

        <div className="w-full text-center ">
          <p className="font-inter font-normal text-[10px] rounded-b-2xl text-gray-600 bg-gray-200 py-[6px]">
            By clicking the button above, you agree to our
            <span className="inline-block items-center justify-center">
              <a className=" px-1 underline text-[11px] font-medium font-inter text-gray-700">
                Terms of Service
              </a>
            </span>
            and
            <span className="pl-1 inline-block items-center justify-center">
              <a className="underline text-[11px] font-medium font-inter text-gray-900">
                Privacy Policy.
              </a>
            </span>
          </p>
        </div>
      </div>
      {/* Bg Cover */}

      <div className="absolute w-full bottom-0">
        <img className="w-full " src="/bg-cover.png" alt="Bg-cover" />
      </div>
    </div>
  );
};

export default Login;
