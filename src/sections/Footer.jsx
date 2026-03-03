import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="w-full h-auto bg-black flex flex-col items-start justify-center 
      lg:px-[80px] lg:py-[80px] py-[50px] px-[20px] gap-[60px]"
    >
      <div
        className="w-full h-auto flex lg:flex-row flex-col 
      items-start justify-center gap-[60px]"
      >
        <div
          className="w-full lg:w-[40%] flex flex-col justify-center 
        items-start gap-[25px]"
        >
          <div
            className="text-themeblue font-bold text-left 
          lg:text-4xl text-3xl uppercase"
          >
            MACVANS <span className="text-white">.</span>
          </div>
          <p className="text-gray-300 tex-md font-poppins">
            Feel free to call us in working hours Mon - Fri 9:00 - 18:00. Our
            team will be happy to help answer your queries
          </p>
          <div className="flex justify-center items-center gap-2 text-white">
            {<FaPhoneVolume className="text-themeblue size-5" />}+ 233 556 898
            951
          </div>
          <div className="flex justify-center items-center gap-6">
            <FaFacebook className="size-4 text-white hover:text-themeblue cursor-pointer" />
            <FaTwitter className="size-4 text-white hover:text-themeblue cursor-pointer" />
            <FaLinkedinIn className="size-4 text-white hover:text-themeblue cursor-pointer" />
            <FaInstagram className="size-4 text-white hover:text-themeblue cursor-pointer" />
          </div>
        </div>
        <div
          className="lg:w-[15%] w-full flex flex-col 
        justify-center items-start gap-6"
        >
          <h1 className="text-white font-poppins text-[23px] capitalize leading-[1.2em]">
            Company
          </h1>
          <ul className="flex flex-col justify-center items-start gap-2">
            <li
              className="text-gray-300 hover:text-themeblue 
            cursor-pointer text-md"
            >
              Home
            </li>
            <li
              className="text-gray-300 hover:text-themeblue 
            cursor-pointer text-md"
            >
              About Us
            </li>
            <li
              className="text-gray-300 hover:text-themeblue 
            cursor-pointer text-md"
            >
              Pricing
            </li>
            <li
              className="text-gray-300 hover:text-themeblue 
            cursor-pointer text-md"
            >
              Blog
            </li>
            <li
              className="text-gray-300 hover:text-themeblue 
            cursor-pointer text-md"
            >
              Our Projects
            </li>
          </ul>
        </div>
        <div
          className="lg:w-[15%] w-full flex flex-col 
        justify-center items-start gap-6"
        >
          <h1 className="text-white font-poppins text-[23px] capitalize leading-[1.2em]">
            Services
          </h1>
          <ul className="flex flex-col justify-center items-start gap-2">
            <li
              className="text-gray-300 hover:text-themeblue 
            cursor-pointer text-md capitalize"
            >
              Digital report card
            </li>
            <li
              className="text-gray-300 hover:text-themeblue 
            cursor-pointer text-md capitalize"
            >
              Web design
            </li>
            <li
              className="text-gray-300 hover:text-themeblue 
            cursor-pointer text-md"
            >
              IT Consulting
            </li>
          </ul>
        </div>

        <div
          className="lg:w-[30%] w-full flex flex-col justify-center 
        items-start gap-5"
        >
          <h1 className="text-white font-poppins text-[23px] capitalize leading-[1.2em]">
            Subscribe to Newsletter
          </h1>
          <div className="flex flex-col justify-center items-start w-full">
            <input
              type="email"
              className="w-full p-4 bg-transparent border-2 border-gray-800 rounded-md"
              placeholder="Enter your email address"
            />
            <button
              className="w-full bg-themeblue hover:bg-white 
            hover:text-black text-black py-4 px-6 text-md font-semibold mt-5 
            rounded-md font-poppins"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-full h-auto flex lg:flex-row flex-col 
      items-center justify-between border-t-2 border-gray-700 pt-6 gap-[10px]"
      >
        <p className="text-gray-300 text-md text-center font-poppins">
          Copyright 2023 Macvans. All rights reserved
        </p>
        <ul className="text-gray-300 flex justify-center items-end gap-6 font-poppins">
          <li>Terms of use</li>
          <li>Privacy Policy</li>
          <li>Cookies Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
