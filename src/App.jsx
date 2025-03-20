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
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25;
    }
  }, []);
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
        <PuffLoader
  color="#7E4AE7"
  size={100}
/>
        </div>
      ) : (
        <div className="relative w-full min-h-screen">
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
              >
                <source src="./video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="relative z-10">
            <NavbarComponent />
            <Routes>
              <Route path="/" element={<HomeComponent />} exact />
              <Route path="/AboutUsPage" element={<AboutUsPageComponent />} />
              <Route path="/ServicesPage" element={<ServicesPageComponent />} />
              <Route path="/WorkPage" element={<WorkPageComponent/>} />
              <Route path="/PricingPage" element={<PricingPageComponent/>} />
              <Route path="/ContactPage" element={<ContactUsPageComponent/>} />
            </Routes>
            <FooterComponent />
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
