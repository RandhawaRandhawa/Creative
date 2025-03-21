import React from "react";
import SwiperCarsoual from "./SwiperCarsoual";
const ProjectComponent = () => {
  return (
    <div className="relative w-full min-h-screen px-2 py-20 bg-transparent">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 transition duration-1000 text-Secondary animate-float2 top-40">
          <svg
            width="300"
            height="300"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity=".25"
              d="M0 0H3V3H0V0ZM6 3H3V6H0V9H3V12H0V15H3V12H6V15H9V12H12V15H15V12H12V9H15V6H12V3H15V0H12V3H9V0H6V3ZM6 6V3H9V6H6ZM6 9H3V6H6V9ZM9 9V6H12V9H9ZM9 9H6V12H9V9Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center py-10 mx-auto text-center">
      <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-White font-sora">
            <span className="text-center">
              Have A Wide Range Of{""}
              <br />
            </span>
            Creative Project
          </h1>
      </div>
      <SwiperCarsoual />
    </div>
  );
};

export default ProjectComponent;
