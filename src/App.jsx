import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./App.css";
import { PuffLoader } from "react-spinners";
import NavbarComponent from "./Component/NavbarComponent";
import HomeComponent from "./Component/HomeComponent";
import FooterComponent from "./Component/FooterComponent";
import AboutUsPageComponent from "./Pages/AboutPage/AboutUsPageComponent";
import ServicesPageComponent from "./Pages/ServicesPage/ServicesPageComponent";
import WorkPageComponent from "./Pages/WorkPage/WorkPageComponent";
import ContactUsPageComponent from "./Pages/ContactPage/ContactUsPageComponent";
import PricingPageComponent from "./Pages/PricingPage/PricingPageComponent";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-Black">
          <PuffLoader color="#7E4AE7" size={100} />
        </div>
      ) : (
        <div className="relative w-full min-h-screen bg-Black">
          <div className="fixed inset-0 z-0 flex items-center justify-center lg:mx-200">
          <div className="w-[600px] h-[00px] absolute top-1/2 bg-transparent shadow-2xl shadow-red-500 animate-float1 rounded-full"></div>
          <div className="w-96 h-96 absolute top-96  bg-transparent shadow-2xl shadow-orange-500 rounded-full animate-float1"></div>

          <div className="w-[600px] h-[600px] absolute top-1/2 bg-transparent shadow-2xl shadow-green-500 animate-float1 rounded-full"></div>
          <div className="w-96 h-96 absolute top-96  bg-transparent shadow-2xl shadow-purple-500 rounded-full animate-float1"></div>

          <div className="w-[600px] h-[600px] absolute top-1/2 bg-transparent shadow-2xl shadow-orange-500 animate-float3 rounded-full"></div>
          <div className="w-96 h-96 absolute top-96  bg-transparent shadow-2xl shadow-red-500 rounded-full animate-float3"></div>
        
          </div>

          <div className="relative z-10">
            <NavbarComponent />
            <Routes>
              <Route path="/" element={<HomeComponent />} exact />
              <Route path="/AboutUsPage" element={<AboutUsPageComponent />} />
              <Route path="/ServicesPage" element={<ServicesPageComponent />} />
              <Route path="/WorkPage" element={<WorkPageComponent />} />
              <Route path="/PricingPage" element={<PricingPageComponent />} />
              <Route path="/ContactPage" element={<ContactUsPageComponent />} />
            </Routes>
            <FooterComponent />
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
