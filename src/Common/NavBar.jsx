import burger from "../assets/burger.png";
import close from "../assets/slose.png";

import React, { useState } from "react";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import VisibilitySensor from "react-visibility-sensor";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <nav className="bg-gradient-to-r from-[rgb(16,51,89)]  to-color1 h-[5rem] flex justify-between w-screen fixed z-[500] lg:relative lg:z-0 ">
      <div className=" w-1/3 h-full  flex items-center justify-center animate-leftToRight ">
        <a href="/">
          <h1 className="text-blue-200 px-12 lg:px-0 tracking-widest lg:tracking-tunitx  hover:tracking-tunitx  text-2xl lg:text-4xl  font-extrabold transition-all duration-300 ">
            tunitx
          </h1>
        </a>
      </div>
      {isMobile ? (
        <div className="w-full h-full flex flex-col justify-center items-end px-5">
          <img
            src={burger}
            onClick={toggleMenu}
            alt=""
            className="animate-rightToLeft transition-all duration-50"
          />
          {isOpen && (
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div
                className={`flex flex-col w-[100vw] justify-center items-center text-center py-5 px-32 text-blue-200 font-josefin text-base bg-gradient-to-r from-[rgb(16,51,89)] to-color1 absolute top-0 left-0 z-[300] px-auto mx-auto space-y-2 transition-all duration-200 transform ${
                  isOpen && isVisible ? "animate-onLoad opacity-100" : "animate-leftToRight opacity-0"
                }`}
                >
                  <img
                    src={close}
                    onClick={toggleMenu}
                    className="relative left-40 "
                    alt=""
                  />
                  <div className="relative w-full group h-auto ">
                    <span className="hover:cursor-pointer hover:text-gray-300 hover:scale-110 transition-all duration-300">
                      <Link
                        activeClass="active"
                        to="about-section"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        About
                      </Link>
                    </span>
                  </div>
                  <div className="relative w-full group h-auto ">
                    <span className="hover:cursor-pointer hover:text-gray-300 hover:scale-110 transition-all duration-300">
                      <Link
                        activeClass="active"
                        to="TS-section"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Tech Stack
                      </Link>
                    </span>
                  </div>
                  <div className="relative w-full group h-auto">
                    <span className="hover:cursor-pointer hover:text-gray-300 hover:scale-110 transition-all duration-300">
                      <Link
                        activeClass="active"
                        to="portfolio-section"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Portfolio
                      </Link>
                    </span>
                  </div>
                </div>
              )}
            </VisibilitySensor>
          )}
        </div>
      ) : (
        <ul className=" flex flex-row justify-end items-center space-x-20 py-5 px-32 text-blue-200 font-josefin text-lg animate-rightToLeft">
          <div className="relative group h-auto">
            <li className="hover:cursor-pointer hover:text-blue-300 hover:scale-110 transition-all duration-300">
              <Link
                activeClass="active"
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <div className="absolute opacity-0 scale-0 -bottom-4 4 bg-blue-300 rounded-md w-full h-1 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
          </div>
          <div className="relative group h-auto ">
            <li className="hover:cursor-pointer hover:text-blue-300 hover:scale-110 transition-all duration-300">
              <Link
                activeClass="active"
                to="TS-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Tech Stack
              </Link>
            </li>
            <div className="absolute opacity-0 scale-0 -bottom-4 bg-blue-300 rounded-md w-full h-1 group-hover:opacity-100 group-hover:scale-100  transition-all duration-300"></div>
          </div>
          <div className="relative group h-auto">
            <li className="hover:cursor-pointer hover:text-blue-300 hover:scale-110 transition-all duration-300">
              <Link
                activeClass="active"
                to="portfolio-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <div className="absolute opacity-0 scale-0 -bottom-4 4 bg-blue-300 rounded-md w-full h-1 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
          </div>
        </ul>
      )}
     
    </nav>
  );
}
