import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="hero-section w-full h-screen flex justify-center items-center"
      >
        <div className="container-hero max-w-screen-lg mx-auto px-4">
          <div className="flex flex-col text-white max-w-screen-lg justify-center items-center">
            <p className="text-red-700 font-bold text-[45px] uppercase z-10 pl-16 md:pl-0 mb-8">
              Welcome to NamasteNest
            </p>
            <h1 className="font-thin text-white text-[24px] mb-[4rem]">
              "Welcome to a world of ideas and inspiration"
            </h1>
            <Link to="/search">
              <button className="btn">click here</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
