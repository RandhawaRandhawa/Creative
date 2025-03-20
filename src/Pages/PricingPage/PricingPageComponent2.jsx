import React from "react";
import { Link } from "react-router-dom";
const PricingPageComponent2 = () => {
  return (
    <>
      <div className="relative min-h-full px-2 py-10 mx-auto max-w-screen-xl bg-Black/55 backdrop-blur-sm">
        <div className="relative z-10 w-full max-w-4xl p-8 pt-20 mx-auto text-center">
          <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-White font-sora">
            Our Pricing Plans
          </h1>
          <p className="mb-8 text-md lg:text-lg font-sora text-zinc-300">
            We delivering high-quality software development services and leading
            the way in digital transformation are our strengths. Our skilled
            staff have demonstrated their talents and are ready to assist you.
          </p>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center sm:px-6 sm:py-12 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
            <div className="rounded-xl border py-6 border-zinc-300 transition duration-300 hover:shadow-zinc-300/30 shadow-lg">
              <div className="p-6 sm:px-8">
                <h2 className="text-2xl font-medium text-White">
                  Starter
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-6 sm:mt-4">
                  <strong className="text-3xl font-bold text-Primary sm:text-4xl">
                    {" "}
                    $5,000{" "}
                  </strong>

                  <span className="text-sm font-medium text-zinc-300">
                    /2 weeks
                  </span>
                </p>

                <p className="mt-6 text-zinc-300 font-sora">
                  For small or short term projects, spanning a few weeks.
                </p>
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-White sm:text-xl">
                  What's included:
                </p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="
                      size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> Branding </span>
                  </li>

                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> Graphic design </span>
                  </li>

                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> Website design </span>
                  </li>
                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> Web Development </span>
                  </li>
                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> UI/UX Design </span>
                  </li>
                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> Motion Graphic </span>
                  </li>
                </ul>
                <button className=" mx-auto mt-6">
                  <div className="relative px-6 py-1 transition duration-300 rounded-xl bg-Primary hover:bg-Black shadow hover:shadow-zinc-300">
                    <div className="flex items-center justify-center p-2 ">
                      <Link
                        to={"/ContactPage"}
                        className="font-medium text-White text-md font-sora"
                      >
                        Let's Talk
                      </Link>
                      <div>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 15 15"
                          fill="none"
                          className="ml-2 text-White transition duration-300 hover:rotate-45 cursor-pointer"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="rounded-xl border py-6 border-zinc-300 transition duration-300 hover:shadow-zinc-300/30 shadow-lg">
              <div className="p-6 sm:px-8">
                <h2 className="text-2xl font-medium text-White">
                Pro
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-6 sm:mt-4">
                  <strong className="text-3xl font-bold text-Primary sm:text-4xl">
                    {" "}
                    $8,000{" "}
                  </strong>

                  <span className="text-sm font-medium text-zinc-300">
                    /month
                  </span>
                </p>

                <p className="mt-6 text-zinc-300 font-sora">
                For medium sized projects spanning a few months or with tight
                deadlines.
                </p>
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-White sm:text-xl">
                  What's included:
                </p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="
                      size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> Branding </span>
                  </li>

                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> Graphic design </span>
                  </li>

                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> Website design </span>
                  </li>
                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> Web Development </span>
                  </li>
                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> UI/UX Design </span>
                  </li>
                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> Motion Graphic </span>
                  </li>
                </ul>
                <button className=" mx-auto mt-6">
                  <div className="relative px-6 py-1 transition duration-300 rounded-xl bg-Primary hover:bg-Black shadow hover:shadow-zinc-300">
                    <div className="flex items-center justify-center p-2 ">
                      <Link
                        to={"/ContactPage"}
                        className="font-medium text-White text-md font-sora"
                      >
                        Let's Talk
                      </Link>
                      <div>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 15 15"
                          fill="none"
                          className="ml-2 text-White transition duration-300 hover:rotate-45 cursor-pointer"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="rounded-xl border py-6 border-zinc-300 transition duration-300 hover:shadow-zinc-300/30 shadow-lg">
              <div className="p-6 sm:px-8">
                <h2 className="text-2xl font-medium text-White">
                  Enterprise
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-6 sm:mt-4">
                  <strong className="text-3xl font-bold text-Primary sm:text-4xl">
                    {" "}
                    $16,000{" "}
                  </strong>

                  <span className="text-sm font-medium text-zinc-300">
                    /months
                  </span>
                </p>

                <p className="mt-6 text-zinc-300 font-sora">
                For large projects spanning a few months or with tight deadlines.
                </p>
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-White sm:text-xl">
                  What's included:
                </p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="
                      size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> Branding </span>
                  </li>

                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> Graphic design </span>
                  </li>

                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> Website design </span>
                  </li>
                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> Web Development </span>
                  </li>
                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> UI/UX Design </span>
                  </li>
                  <li className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-zinc-300"> Motion Graphic </span>
                  </li>
                </ul>
                <button className=" mx-auto mt-6">
                  <div className="relative px-6 py-1 transition duration-300 rounded-xl bg-Primary hover:bg-Black shadow hover:shadow-zinc-300">
                    <div className="flex items-center justify-center p-2 ">
                      <Link
                        to={"/ContactPage"}
                        className="font-medium text-White text-md font-sora"
                      >
                        Let's Talk
                      </Link>
                      <div>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 15 15"
                          fill="none"
                          className="ml-2 text-White transition duration-300 hover:rotate-45 cursor-pointer"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPageComponent2;
