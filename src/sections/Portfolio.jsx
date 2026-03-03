import React, { useEffect } from "react";
import background from "../assests/hero_bg.jpg";
import { projects } from "../export";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  });
  return (
    <div
      id="projects"
      className="w-full h-auto flex  flex-col 
      justify-center items-center lg:px-[80px] 
      px-[20px] lg:py-[80px] py-[60px] gap-[20px] bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="50"
        className="text-themeblue uppercase text-sm font-poppins"
      >
        OUR PROJECTS
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-white lg:text-[45px] text-[30px] capitalize 
        font-poppins leading-[1.2em] lg:w-[50%] text-center"
      >
        Explore our portfolio and showcase our best works
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="150"
        className="text-gray-300 text-md font-poppins lg:w-[60%] w-full text-center"
      >
        We’ve partnered with schools, startups, and enterprises to deliver
        impactful digital solutions. Explore our portfolio to see how we’ve
        transformed ideas into reality.
      </p>
      <div
        className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center 
            items-center gap-10 mt-8"
      >
        {projects.map((project, index) => (
          <div
            className="w-full flex flex-col justify-center items-start"
            key={index}
          >
            <img
              src={project.img}
              alt=""
              className="w-[15em] h-[15em] bg-cover bg-center"
            />
            <div
              className="w-[15em] bg-gray-600 p-8 flex flex-col 
                  justify-center items-start"
            >
              <h1
                className="text-white lg:text-[25px] text-[22px]
                    capitalize leading-[1.2em] font-poppins text-left"
              >
                {project.title}
              </h1>
              <p className="text-gray-300 text-sm font-poppins text-left">
                {project.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
