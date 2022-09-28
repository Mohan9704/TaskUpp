import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <a className="decoration-none">
          <div className="flex items-center">
            <img className="w-[45px]" src="/taskupp-logo.png" />
            <p className="text-2xl underline decoration-wavy decoration-2 dark:decoration-gray-100 decoration-violet-600 font-extrabold font-inter dark:text-violet-500">
              TaskUpp
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
