import React, { useEffect } from "react";
import aboutimg from "../assests/about.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  });

  return (
    <div
      id="about"
      className="w-full h-auto flex flex-col items-center justify-between 
      lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] gap-[60px]"
    >
      <div
        id="top-box"
        className="w-full flex lg:flex-row flex-col items-center justify-between gap-[60px]"
      >
        <div className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-[10px]">
          <h1 className="text-themeblue uppercase text-sm font-poppins">
            Who We are
          </h1>
          <h1 className="text-black capitalize lg:text-[45px] text-[30px] leading-[1.2em] font-poppins">
            Delivering excellence in IT solutions
          </h1>
          <p className="text-gray-500 text-md font-poppins">
            Macvans Devnest Solutions is a forward-thinking technology company
            dedicated to delivering innovative digital solutions. We specialize
            in website development, IT services, and educational technology that
            transforms how schools and businesses operate. Our Mission is to
            provide reliable, user-friendly, and future-ready digital solutions
            that empower organizations to thrive in a connected world.
          </p>
          <button
            className="bg-themeblue hover:bg-black hover:text-white py-4 px-6 
        text-black text-md font-semibold mt-5 rounded-md"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            OUR PROJECTS
          </button>
        </div>

        <div className="lg:w-[40%] w-full flex lg:justify-end justify-start items-center">
          <img src={aboutimg} alt="" className="w-full bg-cover bg-center" />
        </div>
      </div>
    </div>
  );
};

export default About;
