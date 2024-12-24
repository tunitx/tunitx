import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mif from "../assets/mif.png";
import collectica from "../assets/collectica.png";
import mintmart from "../assets/mintmart.png";
import hy5n from "../assets/hy5n.png";
import shareeat from "../assets/shareeat.png";
import React from "react";
import branch from "../assets/git-branch-collaboration.svg";
import { useState } from "react";
import ReactGithubCalendar from "react-github-calendar";
import github from "../assets/github.png";
import { Footer } from "../Common/Footer";
import VisibilitySensor from "react-visibility-sensor";

const CustomDotButton = ({ onClick, ...rest }) => {
  const { active } = rest;
  return (
    <div className="flex flex-row justify-center space-x-3 bg-black ">
      <button
        className={`rounded-full custom-dot-list-style react-multi-carousel-dot hover:bg-blue-200 h-4 bg-white  w-4 mx-4 ${
          active ? "bg-black" : "bg-white"
        }`}
        style={{ transition: "background-color 0.3s" }} // Smooth transition for background color change
        onClick={onClick}
      ></button>
    </div>
  );
};

export function ProjectsCarousel() {
  const [style, setStyle] = useState({});
  const tooltipFormatter = ({ date, count }) => {
    return `On ${date}, you made ${count} contributions!`;
  };
  const colorTheme = (contributions) => {
    if (contributions === 0) {
      return "#eee"; // color for no contributions
    } else if (contributions < 10) {
      return "#d6e685"; // color for less than 10 contributions
    } else if (contributions < 20) {
      return "#8cc665"; // color for less than 20 contributions
    } else if (contributions < 30) {
      return "#44a340"; // color for less than 30 contributions
    } else {
      return "#1e6823"; // color for 30 or more contributions
    }
  };

  const handleMouseMove = (event) => {
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
    setStyle({
      transform:
        "perspective(500px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease-out",
    });
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="about bg-[rgb(11,8,48)]">
      <div
        className="flex flex-row flex-wrap lg:pt-[100px]  justify-evenly items-center h-[140vh] w-screen  lg:h-fit"
        id="portfolio-section"
      >
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <div
              className={`opacity-0 w-[80%] lg:w-[30%] lg:h-full font-josefin whitespace-pre-wrap flex flex-col space-y-5 mb-[50px] lg:mb-0 transition-all duration-500 transform ${
                isVisible ? "animate-leftToRight opacity-100" : ""
              }`}
            >
              <h1 className="text-3xl lg:text-6xl text-[#d45640] font-extrabold text-center lg:text-left mt-[75px] lg:mt-0">
                My Projects
              </h1>
              <h2 className="text-xl text-blue-200 ">
              I've worked on projects using React, Next.js, Node.js, and blockchain to create real-world solutions. Through internships and freelance work, I've gained experience in full-stack development, delivering scalable applications. Recently, I developed the{" "}
<a href="https://marwadiinternationalfederation.com/" target="_blank">
  <span className="text-[#d45640]">MIF</span>
</a>{" "}
platform for{" "}
<a href="https://khojope.com/" target="_blank">
  <span className="text-[#d45640]">Khojo Right Now</span>
</a>{" "}
efficiently and robustly.
              </h2>
            </div>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <div
              className={`opacity-0 w-[100%] lg:w-[50%] lg:h-[60vh] flex flex-row justify-center items-center portfolio relative bottom-4 transition-all duration-500 transform ${
                isVisible ? "animate-rightToLeft opacity-100 my-4" : ""
              }`}
              style={style}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                renderButtonGroupOutside={true}
                responsive={responsive}
                focusOnSelect={true}
                ssr={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={6000}
                keyBoardControl={true}
                customTransition="transform 500ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet"]}
                deviceType={"desktop"}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className={`opacity-0 w-full h-full rounded-lg transition-all duration-500 transform ${
                  isVisible ? "animate-onLoad opacity-100 " : ""
                }`}
                customDot={<CustomDotButton />}
              >
                <div className="w-[100%] h-full group relative">
                  <img src={mif} alt="" className="rounded-3xl" />
                  <div className="absolute inset-0 bg-[rgb(11,8,48,0.6)]  opacity-0 group-hover:opacity-100 flex  flex-col items-center justify-center transition-opacity duration-300 rounded-3xl">
                    <p className="text-blue-200 font-josefin text-xl lg:text-3xl">
                      Marwadi International federation
                    </p>
                    <a
                      href="https://marwadiinternationalfederation.com/"
                      target="_blank"
                    >
                      <img
                        src="data:image/png;base64,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"
                        className="w-[50%]"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="w-[100%] h-full group relative">
                  <a href="https://www.collectica.shop/" target="_blank">
                    <img src={collectica} alt="" className=" rounded-3xl" />
                  </a>
                  <div className="absolute inset-0 bg-[rgb(11,8,48,0.6)]  opacity-0 group-hover:opacity-100 flex  flex-col items-center justify-center transition-opacity duration-300 rounded-3xl">
                    <p className="text-blue-200 font-josefin text-xl lg:text-3xl">
                      Collectica.shop
                    </p>
                    <a href="https://www.collectica.shop/" target="_blank">
                      <img
                        src="data:image/png;base64,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"
                        className="w-[50%]"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="w-[100%] h-full group relative">
                  <a href="https://mintmart.onrender.com/" target="_blank">
                    <img src={mintmart} className=" rounded-3xl" alt="" />
                  </a>
                  <div className="absolute inset-0 bg-[rgb(11,8,48,0.6)]  opacity-0 group-hover:opacity-100 flex  flex-col items-center justify-center transition-opacity duration-300 rounded-3xl">
                    <p className="text-blue-200 font-josefin text-xl lg:text-3xl">
                      MintMart NFT
                    </p>
                    <a href="https://mintmart.onrender.com/" target="_blank">
                      <img
                        src="data:image/png;base64,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"
                        className="w-[50%]"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="w-[100%] h-full group relative">
                  <a href="https://hy5n.in/" target="_blank">
                    <img src={hy5n} className=" rounded-3xl" alt="" />
                  </a>
                  <div className="absolute inset-0 bg-[rgb(11,8,48,0.6)]  opacity-0 group-hover:opacity-100 flex  flex-col items-center justify-center transition-opacity duration-300 rounded-3xl">
                    <p className="text-blue-200 font-josefin text-xl lg:text-3xl">
                      Hy5n Ltd.
                    </p>
                    <a href="https://hy5n.in/" target="_blank">
                      <img
                        src="data:image/png;base64,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"
                        className="w-[50%]"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="w-[100%] h-full group relative">
                  <a
                    href="https://shareeat-by-devchef.vercel.app/"
                    target="_blank"
                  >
                    <img src={shareeat} className=" rounded-3xl" alt="" />
                  </a>
                  <div className="absolute inset-0 bg-[rgb(11,8,48,0.6)]  opacity-0 group-hover:opacity-100 flex  flex-col items-center justify-center transition-opacity duration-300 rounded-3xl">
                    <p className="text-blue-200 font-josefin text-xl lg:text-3xl">
                      Share Eat
                    </p>
                    <a
                      href="https://shareeat-by-devchef.vercel.app/"
                      target="_blank"
                    >
                      <img
                        src="data:image/png;base64,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"
                        className="w-[50%]"
                      ></img>
                    </a>
                  </div>
                </div>
              </Carousel>
            </div>
          )}
        </VisibilitySensor>

        {/* <h1 className="font-josefin text-2xl lg:text-3xl text-blue-200 justify-center relative bottom-[130px] lg:bottom-[80px]">
        Github Contribution Calender
      </h1> */}
      <div
  className="opacity-0 w-[70%] lg:w-[100%] h-[40vh] flex flex-row flex-wrap justify-center items-center space-x-8 relative right-3 lg:bottom-[80px] lg:pt-36 transition-all duration-500 transform animate-onLoad opacity-100"
>
  <a href="https://github.com/tunitx" target="_blank">
    <div className="flex flex-col space-y-2 justify-center items-center relative mx-auto px-auto lg:left-0">
      <img
        src={github}
        alt=""
        className="h-[2rem] w-[2rem]"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      <span className="font-josefin text-blue-200 text-sm">
        github/tunitx
      </span>
    </div>
  </a>

  <ReactGithubCalendar
    username="tunitx"
    formatTooltip={tooltipFormatter}
    color={colorTheme}
  />
</div>
      </div>
    </div>
  );
}


