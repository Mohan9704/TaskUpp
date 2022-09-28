import React from "react";
import FeatureCard from "./FeatureCard";

import {
  DocumentTextIcon,
  UsersIcon,
  ShieldCheckIcon,
  ReceiptTaxIcon,
} from "@heroicons/react/solid";


const DATA_ITEMS = [
  {
    title: "User Friendly",
    text: "Easy to use for people who are either new or professional.",
    icon: <UsersIcon />,
  },
  {
    title: "Trusted Application",
    text: "Official application that is trusted for security.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Flexibility",
    text: "Tasking can be opened on all existing devices.",
    icon: <DocumentTextIcon />,
  },
  {
    title: "100% Free",
    text: "This application is completely free, without any charges.",
    icon: <ReceiptTaxIcon />,
  },
];
const FeatureSection = () => {
  return (
    <div className="relative flex flex-col items-center  w-full bg-transparent  min-h-full space-y-6 z-20 p-10 mb-4">
      <h2 className="text-xl font-bold font-inter text-violet-700">Feature</h2>
      <p className="text-5xl font-semibold font-inter text-gray-900">
        Our Special Feature
      </p>
      <div className="flex items-center space-x-10 p-10 ">
        {DATA_ITEMS.map(item => (
           <FeatureCard key={item.title} icon={item.icon} text={item.text} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
