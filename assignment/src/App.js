import React from "react";

import Globe from "./components/Footer/Globe";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar.jsx";

import Body from "./components/Body/Body";
import NavbarSticky from "./components/Navbar/NavbarSticky";
import More from "./components/More/More.jsx";

function App() {
  return (
    <div className=" ">
      <div className="relative z-50 ">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
      <div>
        <div className="overflow-hidden">
          <div className="relative">
            <img
              className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image"
              width="4377"
              src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
              alt=""
            />
          </div>
          <div className="hero-section   w-full">
            <Body />
            <More />
          </div>
          <div className="bg-black">
          <Globe />
          </div>
          
          <div className="max-[100%] relative z-[2] w-full px-5 bg-black text-white">
            <ul className="lg:w-9/12 text-[14px] pt-16 text-[#7d8590] space-y-1 ">
              <li>
                <sup id="footnote-1">1</sup> The Total Economic Impact™ Of
                GitHub Enterprise Cloud and Advanced Security, a commissioned
                study conducted by Forrester Consulting, 2022. Results are for a
                composite organization based on interviewed customers.
              </li>
              <li>
                <sup id="footnote-2">2</sup> GitHub, Octoverse 2022 The state of
                open source software.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
