import React, { useEffect } from "react";
import background from "../assests/hero_bg.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Cta = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  });
  return (
    <div
      id="contact"
      className="w-full h-auto flex  flex-col 
      justify-center items-center lg:px-[80px] 
      px-[20px] lg:py-[80px] py-[40px] gap-[20px] bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="50"
        className="text-themeblue uppercase text-sm font-poppins"
      >
        Ready to get started
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-white lg:text-[45px] text-[30px] capitalize 
        font-poppins leading-[1.2em] lg:w-[50%] w-full text-center"
      >
        Let's elevate your business with us
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="150"
        className="text-gray-300 text-md font-poppins lg:w-[60%] w-full text-center"
      >
        Let’s Build Something Great. Together Reach out to us for consultations,
        quotes, or collaborations.
      </p>
      <div
        data-aos="slide-up"
        data-aos-delay="200"
        className="flex lg:flex-row flex-col justify-center 
        items-center lg:gap-5 gap-1"
        id="two buttons"
      >
        <button
          className="bg-themeblue hover:bg-white hover:text-black py-4 px-6 
        text-black text-md font-semibold mt-5 rounded-md"
          onClick={() =>
            (window.location.href =
              "https://wa.me/233548427662?text=Hello%20I%20need%20%your%20%service")
          }
        >
          WHATSAPP US
        </button>
        <button
          className="bg-white hover:bg-themeblue hover:text-black py-4 px-6 
        text-black text-md font-semibold mt-5 rounded-md"
          onClick={() => (window.location.href = "tel:+233548427662")}
        >
          CALL US
        </button>
      </div>
    </div>
  );
};

export default Cta;
