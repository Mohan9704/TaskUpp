import React from "react";
import ServiceCard from "./ServiceCard";

import {
  ClipboardCheckIcon,
  LightBulbIcon,
  ChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import SphereUI from "./SphereUI";
import SphereUI2 from "./SphereUI2";

const DATA_ITEMS = [
  {
    title: "Manage Tasks",
    text: "Managing your task and projects more efficiently will increase your productivity.",
    icon: <ClipboardCheckIcon />,
  },
  {
    title: "Knowledge",
    text: "You can see insights and easily manage a task and project. ",
    icon: <LightBulbIcon />,
  },
  {
    title: "Productivity",
    text: "You can be more productive  with this tool. ",
    icon: <ChartBarIcon />,
  },
  {
    title: "Collaboration",
    text: "Collaborating with your team is very helpful in daily activity. ",
    icon: <UserGroupIcon />,
  },
];
const ServiceSection = () => {
  return (
    <div className="relative flex items-center  space-x-16  w-full max-w-7xl bg-transparent  min-h-full space-y-6 z-20 py-10 px-6 mb-10 overflow-hidden">
      
      <div className="absolute bottom-0 opacity-70 -left-24">
        <SphereUI />
      </div>
      <div className="absolute top-20 opacity-50  -left-10">
        <SphereUI2 />
      </div>

      <div className="flex flex-col space-y-8 w-[500px]">
        <h2 className="text-5xl font-bold font-inter text-gray-900 leading-snug">
          Why use Task Management tools?
        </h2>
        <p className="text-lg font-medium font-inter text-gray-900">
          Because you can be more productive and with this tool you can distinguist
          your work priorities.
        </p>
        <button className="w-40 btn bg-violet-600 px-5 py-3 text-white shadow-md hover:shadow-2xl hover:opacity-80 hover:-rotate-3">
          Get Started
        </button>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-8 ">
        {DATA_ITEMS.map((item) => (
          <ServiceCard
            key={item.title}
            icon={item.icon}
            text={item.text}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
