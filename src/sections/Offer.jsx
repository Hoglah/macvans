import React, { useEffect } from "react";
import { services } from "../export";
import Aos from "aos";
import "aos/dist/aos.css";

const Offer = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  });
  return (
    <div
      id="services"
      className="w-full h-auto flex flex-col items-center justify-center
      lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] gap-[20px]"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="50"
        className="text-themeblue uppercase text-sm font-poppins"
      >
        OUR SERVICES
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-black lg:text-[45px] text-[30px] capitalize 
        font-poppins leading-[1.2em] lg:w-[50%] text-center"
      >
        Driving digital transformation with excellence
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="150"
        className="text-gray-500 text-md font-poppins lg:w-[60%] w-full text-center"
      >
        From websites to IT systems, we build tools that help you grow and
        succeed. Innovative IT & Web solutions for businesses and schools
      </p>
      <div
        className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center 
      items-center gap-6 mt-6"
      >
        {services.map((service, index) => (
          <div
            className="flex flex-col justify-center items-start gap-4 p-10 
            border-2 border-gray-200 bg-white hover:bg-blue-100 rounder-md cursor-pointer"
            key={index}
          >
            <service.icon className="size-[35px] mb-5" />
            <h1 className="text-black text-[25px] capitalize leading-[1.2em] font-poppins">
              {service.title}
            </h1>
            <p className="text-gray-500 text-sm font-poppins">{service.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
