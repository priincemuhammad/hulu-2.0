import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ results }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="cursor-pointer  duration-200 transition transform 
    ease-in sm:hover:scale-105 hover:z-50 overflow-x-hidden p-2"
    >
      <Image
        src={
          `${BASE_URL}${results.backdrop_path || results.poster_path}` ||
          `${BASE_URL}${results.poster_path}`
        }
        layout="responsive"
        height={500}
        width={300}
        alt="posterImg"
      />
      <div className="p-5">
        <p className="truncate max-w-md">{results.overview}</p>
        <h1 className="text-2xl py-2">
          {results.title || results.original_title}
        </h1>
        <p className="flex justify-between items-center">
          {results.release_date}
          <span>
            <HandThumbUpIcon className="h-7" />
            {results.vote_count}
          </span>
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
