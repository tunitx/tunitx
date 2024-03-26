import branch from "../assets/git-branch-productivity.svg";
import profile from "../assets/profile.jpg";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
export function About() {
  const [style, setStyle] = useState({});

  const handleMouseMove = (event) => {
    document.body.classList.add("no-scroll");
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const xPos = ((clientX - innerWidth / 2) / innerWidth) * 2;
    const yPos = ((clientY - innerHeight / 2) / innerHeight) * 2;

    setStyle({
      transform: `perspective(500px) rotateY(${xPos * 8}deg) rotateX(${
        -yPos * 8
      }deg) scale3d(1.1, 1.1, 1.1)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    document.body.classList.remove("no-scroll");
    setStyle({
      transform:
        "perspective(500px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease-out",
    });
  };
  return (
    <div className="flex flex-row flex-wrap lg:flex-nowrap justify-between items-center  w-screen  h-[120vh] lg:min-h-screen about bg-[rgb(11,8,48)] ">
      {/* profile card */}
      <div className="w-[80%] lg:w-[50%] h-[100vh]  flex items-center justify-center mx-10 ">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <div
              className={`bg-gradient-to-r from-[rgb(16,51,89)] to-color1 dark:bg-gray-700 shadow-xl opacity-0  overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform w-full profile-card flex flex-col lg:flex-row items-center space-x-2 gap-7 h-[50vh] lg:h-fit text-center relative -top-[125px] lg:fixed lg:top-0 ${
                isVisible ? "animate-leftToRight opacity-100" : ""
              }`}
              style={style}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className=" w-[50%] flex items-center gap-8  font-josefin  relative top-[20px] lg:relative lg:top-0"
                id="about-section"
              >
                <img
                  src={profile}
                  className=" h-[25vh] w-[500px] lg:w-[350px] lg:h-full   object-center object-cover rounded-md transition-all duration-500 delay-500 transform rel"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
              <div className=" w-fit transition-all transform duration-500 font-josefin relative top-6">
                <h1 className="text-blue-300 font-bold text-3xl font-josefin">
                  Tanish Anand
                </h1>
                <p className="text-gray-200 font-extrabold ml-1 text-xl">
                  Web Developer
                </p>
                <a className=" text-blue-400  group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500 text-base ml-1">
                  tunitx@icloud.com
                </a>
              </div>
            </div>
          )}
        </VisibilitySensor>
      </div>

      {/* about  */}
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div
            className={`opacity-0 font-josefin  w-[80%] mt-[15%] lg:mt-0 lg:w-[35%] lg:h-[100vh] flex flex-col justify-center items-center mx-auto lg:mx-0 relative -top-[300px]  left-[40px] lg:top-0 lg:left-0 transition-all duration-500  text-center  transform ${
              isVisible ? "animate-rightToLeft opacity-100" : ""
            }`}
          >
            <h1 className="text-3xl lg:text-4xl text-[rgb(46,160,67)]">
              Hey lol.
            </h1>
            <p className="text-xl lg:text-2xl whitespace-pre-line text-blue-200 py-2 inline tracking-[0.0.20rem">
              So i was sitting idle one day back at home when i was hey
              <a href="https://tushar885.github.io/" target="_blank">
                <span className="text-[rgb(46,160,67)]"> tushar sharma </span>
              </a>
              has a website why not ME?? anyway im a full stack web developer
              focused on React, Next, Node, Mongo and other usual stuff. Thats
              all and istg this will go on production straight haha.
            </p>
          </div>
        )}
      </VisibilitySensor>

      {/* branch on the right this tim  */}
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div
            className={`opacity-0 flex flex-row-reverse w-[20%] lg:w-[9%] animate-upToDown relative bottom-[300px]  lg:relative lg:bottom-0 lg:left-0 transition-all duration-500 transform ${
              isVisible ? "animate-rightToLeft opacity-100" : ""
            }`}
          >
            <img
              src={branch}
              alt="branch"
              className="w-full h-full transform scale-x-[-1]"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        )}
      </VisibilitySensor>
    </div>
  );
}
