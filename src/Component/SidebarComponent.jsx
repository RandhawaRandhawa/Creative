import React from "react";
import { Link } from "react-router-dom";
const SidebarComponent = ({ isOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-40 bg-transparent transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed left-0 top-0 w-full h-full bg-Black/55 backdrop-blur-sm shadow-lg transition-transform duration-700 transform ${
          isOpen ? "translate-x-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full bg-Black/55 backdrop-blur-sm border-e">
          <div className="px-4 py-40">
            <ul className="mt-6 space-y-1 text-center font-sora">
              <li>
                <Link
                  to ={'/AboutUsPage'}
                  className="block px-4 py-2 text-lg font-medium rounded-lg text-White hover:bg-Primary"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to={'/ServicesPage'}
                  className="block px-4 py-2 text-lg font-medium rounded-lg text-White hover:bg-Primary"
                >
                 Services
                </Link>
              </li>

              <li>
                <Link
                  to = {'/WorkPage'}
                  className="block px-4 py-2 text-lg font-medium rounded-lg text-White hover:bg-Primary"
                >
                Our Work
                </Link>
              </li>

              <li>
                <Link
                to={'/PricingPage'}
                  className="block px-4 py-2 text-lg font-medium rounded-lg text-White hover:bg-Primary"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  to={'/ContactPage'}
                  className="block px-4 py-2 text-lg font-medium rounded-lg text-White hover:bg-Primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;