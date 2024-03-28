import node from "../assets/node.png";
import next from "../assets/nextjs.256x153.png";
import mongo from "../assets/mongoo-removebg-preview.png";
import branch from "../assets/git-branch-security.svg";
import VisibilitySensor from "react-visibility-sensor";
import { useState, useEffect } from "react";

export function TechStacks() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (event) => {
    if (!isDesktop) return;

    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const xPos = ((clientX - innerWidth / 2) / innerWidth) * 2;
    const yPos = ((clientY - innerHeight / 2) / innerHeight) * 2;

    setStyle({
      transform: `perspective(500px) rotateY(${xPos * 5}deg) rotateX(${
        -yPos * 5
      }deg) scale3d(1.1, 1.1, 1.1)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;

    setStyle({
      transform:
        "perspective(500px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease-out",
    });
  };
  return (
    <div className="body pb-4  ">
      <div
        className=" w-[50%] lg:w-[20%] lg:min-h-screen animate-upToDown absolute top-[2200px] lg:top-[1650px] lg:mt-32"
        id="TS-section"
      >
        <img
          src={branch}
          className="w-6/12 h-6/12"
          alt=""
          srcset=""
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div
            className={`opacity-0 flex flex-row justify-center py-16 w-[100vw] mx-auto transition-all duration-300 transform ${
              isVisible ? "animate-onLoad opacity-100" : ""
            }`}
          >
            <h1 className="font-josefin text-blue-300 text-5xl font-extrabold ">
              {" "}
              My Tech Stack
            </h1>
          </div>
        )}
      </VisibilitySensor>

      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div
            className={`opacity-0 flex flex-col justify-center items-center w-[26vw] min-h-screen space-y-2 py-10 mx-auto transition-all duration-500 transform ${
              isVisible ? "animate-rightToLeft opacity-100" : ""
            }`}
            style={style}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-row  items-center w-[350px] lg:w-full h-[25vh]  box-initial justify-evenly">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="80"
                height="80"
                viewBox="0 0 40 40"
                className=" hover:animate-spin transition-all duration-200 relative right-10 lg:right-14 w-[60px] lg:w-[80px]"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              >
                <path
                  fill="#4e7ab5"
                  d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"
                ></path>
                <path
                  fill="#4e7ab5"
                  d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"
                ></path>
                <path
                  fill="#4e7ab5"
                  d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"
                ></path>
                <path
                  fill="#8bb7f0"
                  d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"
                ></path>
                <path
                  fill="#4e7ab5"
                  d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"
                ></path>
                <path
                  fill="#8bb7f0"
                  d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"
                ></path>
                <path
                  fill="#8bb7f0"
                  d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"
                ></path>
                <g>
                  <path
                    fill="#8bb7f0"
                    d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"
                  ></path>
                </g>
              </svg>
              <h1 className="font-josefin text-blue-200 text-4xl animate-pulse cursor-pointer">
                React.js
              </h1>
            </div>
            <div className="flex flex-row justify-evenly items-center w-[350px] lg:w-full h-[25vh] box2 space-x-4">
              <h1 className="font-josefin text-blue-200 text-4xl animate-pulse cursor-pointer ">
                Next.js
              </h1>
              <img
                src={next}
                alt=""
                className=" w-[40%] h-[40%] lg:w-[45%] lg:h-full relative -right-5 lg:-right-10"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <div className="flex flex-row justify-evenly items-center w-[350px] lg:w-full h-[25vh] box space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="96"
                height="96"
                viewBox="0 0 48 48"
                className="  relative  lg:right-8"
              >
                <linearGradient
                  id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1"
                  x1="21.861"
                  x2="25.703"
                  y1="8.237"
                  y2="36.552"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#00c1e0"></stop>
                  <stop offset="1" stop-color="#009bb8"></stop>
                </linearGradient>
                <path
                  fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)"
                  d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"
                ></path>
              </svg>
              <h1 className="font-josefin text-blue-200 text-4xl animate-pulse cursor-pointer whitespace-pre-line">
                Tailwind CSS
              </h1>
            </div>
            <div className="flex flex-row justify-evenly items-center w-[350px] lg:w-full h-[25vh] box2 space-x-4">
              <h1 className="font-josefin text-blue-200 text-4xl animate-pulse cursor-pointer ">
                Node.js
              </h1>
              <img
                src={node}
                alt=""
                className=" w-[30%] h-[45%] lg:w-[30%] lg:h-full relative  -right-8 lg:-right-10"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>

            <div className="flex flex-row justify-evenly items-center w-[350px] lg:w-full h-[25vh] box space-x-4">
              <img
                src={mongo}
                alt=""
                className=" w-[35%] h-[50%]  lg:w-[30%] lg:h-full relative "
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
              <h1 className="font-josefin text-blue-200 text-4xl animate-pulse cursor-pointer ">
                Mongo DB
              </h1>
            </div>
          </div>
        )}
      </VisibilitySensor>
    </div>
  );
}
