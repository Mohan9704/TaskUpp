import React from "react";

const ServiceCard = ({icon,title, text}) => {
  return (
    <div className="group flex flex-col items-center space-y-4 w-[280px] px-4 py-10 rounded-2xl shadow-xl transition duration-300 ease-in cursor-pointer hover:-rotate-3">
      <div className="w-8 h-8 md:w-12 md:h-12 bg-violet-200 rounded-full flex items-center justify-center group-hover:bg-violet-500 group-hover:ring-2 ring-violet-500 transition-all">
        <span className="w-5 h-5 md:w-7 md:h-7 text-violet-500 group-hover:text-violet-100">
          {icon}
        </span>
      </div>
      <h3 className="text-lg font-bold font-inter text-gray-900 group-hover:text-violet-700">
        {title}
      </h3>
      <p className="text-md text-center font-inter font-medium text-gray-700 group-hover:text-gray-900">
        {text}
      </p>
    </div>
  );
};

export default ServiceCard;
