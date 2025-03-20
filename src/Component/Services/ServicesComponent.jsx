import React from "react";
import ServicesComponentCard from "./ServicesComponentCard";

const ServicesComponent = () => {
  return (
    <>
      <div className="relative min-h-full px-2 py-10 mx-auto max-w-screen-xl bg-Black/55 backdrop-blur-sm">
      <div className="relative z-10 w-full max-w-4xl p-8 pt-20 mx-auto text-center">
          <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-White font-sora">
          Empowering Your Brand <br />
          Through Services
          </h1>
          <p className="mb-8 text-md lg:text-lg font-sora text-zinc-300">
          We delivering high-quality software development services and leading
            the way in digital transformation are our strengths. Our skilled
            staff have demonstrated their talents and are ready to assist you.
          </p>
        </div>
   <ServicesComponentCard/>
      </div>
    </>
  );
};

export default ServicesComponent;

