import React, { useEffect } from "react";
import background from "../assests/hero_bg.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Client = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  });
  return (
    <div
      id="client"
      className="w-full h-auto flex flex-col items-center justify-center 
      lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] gap-[60px] bg-cover bg center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="bg-white rounded-full px-10 py-3 font-semibold flex 
        lg:flex-row flex-col justify-center items-center w-full lg:gap-2 gap-1"
      >
        Trusted by <span className="text-themeblue">Businesses Worldwide</span>{" "}
        for Reliable IT Solutions
      </div>
    </div>
  );
};

export default Client;
