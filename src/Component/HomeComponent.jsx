import React from "react";
import { Link } from "react-router-dom";
import ServicesComponent from "./Services/ServicesComponent";
import ProjectComponent from "./Project/ProjectComponent";
import AboutComponent from "./AboutComponent";
import TeamComponent from "./TeamComponent";
import ClientReviewsComponent from "./ClientReviews/ClientReviewsComponent";

const HomeComponent = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen max-w-screen bg-transparent">
        <div className="w-full max-w-4xl p-8 pt-20 mx-auto text-center">
          <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-White font-sora">
            Transform Your Brand With <br />
            Strategic Web Design
          </h1>
          <p className="mb-8 text-md lg:text-lg font-sora text-zinc-300">
            Our multichannel knowledge, as well as cost-effective methods, have
            led to the revolutionary online growth of hundreds of businesses.
            Your company could be the next!
          </p>
          <button>
            <div className="relative px-8 py-1 transition duration-300 rounded-xl shadow-zinc-300 shadow hover:shadow-none hover:bg-Primary bg-Black">
              <div className="flex items-center justify-center p-2">
                <Link
                  to={"/ContactPage"}
                  className="font-medium text-md text-White font-sora"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </button>
        </div>
      </div>
      <ServicesComponent/>
      <ProjectComponent />
      <AboutComponent/>
    <ClientReviewsComponent/>
    <TeamComponent/>
    </>
  );
};

export default HomeComponent;