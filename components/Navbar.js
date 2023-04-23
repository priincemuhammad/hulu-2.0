import React from "react";
import requests from "@/utils/requests";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div
        className="flex px-10 sm:px-20 space-x-10 text-2xl whitespace-nowrap
        sm:space-x-20 overflow-x-scroll scrollbar-hide"
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h1
            onClick={() => router.push(`/?genre=${key}`)}
            key={key}
            className="last:pr-24 cursor-pointer transition duration-100 transform 
          hover:text-white active:text-green-400 hover:scale-125"
          >
            {title}
          </h1>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12 " />
    </nav>
  );
};

export default Navbar;
