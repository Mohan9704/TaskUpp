import React, {useEffect,useState } from "react";
import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Blob from "../components/Blob";
import SphereUI from "../components/SphereUI";
import SphereUI2 from "../components/SphereUI2";

const Home = () => {

  return (
    <div className="relative flex min-h-screen flex-col items-center  bg-gray-100 dark:bg-gray-900 z-10 overflow-hidden">
      <Head>
        <title>TaskUpp App</title>
        <link rel="icon" href="/taskupp-logo.png" />
      </Head>
      {/* <div className="absolute min-w-full bg-gray-100 z-10 opacity-[0.5] min-h-full"></div>
      <div className="absolute top-[130px] left-8 -z-10 ">
        <SphereUI />
      </div>
      <div className="absolute top-[270px] left-[300px] -z-10 ">
        <SphereUI2 />
      </div>
      <div className="absolute -top-16 -right-28 ">
        <Blob />
      </div> */}
      
      <HeroSection />
     
    </div>
  );
};

export default Home;
