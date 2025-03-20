import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SidebarComponent from "./SidebarComponent";
const NavbarComponent = () => {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setBgColor("bg-black backdrop-blur-2xl shadow-xl shadow-zinc-300/5 text-White");
      } else {
        setBgColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header
        className={`fixed z-50 w-full transition duration-300 ${bgColor}`}
      >
        <div className="max-w-screen-full mx-auto *:px-4 lg:px-8">
          <div className="flex items-center justify-between h-full py-4">
            <div className="md:flex md:items-center md:gap-12">
              <Link to={"/"} className="flex items-center">
                <h1 className="text-2xl font-medium text-White font-sora">
                Developer.
                </h1>
              </Link>
            </div>

            <div className="hidden lg:flex rounded-full">
              <nav aria-label="Global">
                <ul className="flex items-center text-White gap-6 font-normal text-sm font-sora">
                  <li> 
                    <Link to={"/AboutUsPage"} className="transition duration-300 hover:text-Primary">About Us</Link>
                  </li>
                  <li>
                    <Link to={"/ServicesPage"} className="transition duration-300 hover:text-Primary">Services</Link>
                  </li>
                  <li>
                    <Link to={"/WorkPage"} className="transition duration-300 hover:text-Primary">Our Work</Link>
                  </li>
                  <li>
                    <Link to={"/PricingPage"} className="transition duration-300 hover:text-Primary">Pricing</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4 ">
                <button className="lg:flex hidden">
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


              <div className="block lg:hidden">
                <button onClick={toggleSidebar}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 text-White"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9h16.5m-16.5 6.75h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SidebarComponent isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default NavbarComponent;
