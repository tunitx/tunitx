import React from "react";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import palestine1 from "../assets/donate-1.jpg";
import palestine2 from "../assets/donate-3.jpg";
import palestine3 from "../assets/donate-5.jpg";
import palestine4 from "../assets/donate-6.avif";
import palestine5 from "../assets/palestine-flag.webp"


function Donate() {

  return (
    <div className="w-full h-full bg-[rgb(11,8,48)] py-12 " >
    <div className="w-full h-full flex flex-row justify-center items-center pb-2 mb-10 lg:mb-14 font-josefin" >
    <h1 className="text-3xl lg:text-6xl text-[#d45640] font-extrabold text-center lg:text-left">If you have a moment,</h1>
    </div>
      <div className="flex flex-col lg:flex-row justify-around items-center gap-6 lg:pb-12 ">
        <div className=" w-80 lg:w-1/2 h-full">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={2000}
            transitionTime={500}
          >
            <div className="w-full h-64 lg:h-80">
              <img src={palestine1} className="object-cover w-full h-full rounded-[20px]" alt="Palestine 1" />
            </div>
            <div className="w-full  h-64  lg:h-80">
              <img src={palestine2} className="object-cover w-full h-full rounded-[20px]" alt="Palestine 2" />
            </div>
            <div className="w-full   h-64 lg:h-80">
              <img src={palestine3} className="object-cover w-full h-full rounded-[20px]" alt="Palestine 3" />
            </div>
            <div className="w-full  h-64  lg:h-80">
              <img src={palestine4} className="object-cover w-full h-full rounded-[20px]" alt="Palestine 4" />
            </div>
            <div className="w-full  h-64  lg:h-80">
              <img src={palestine5} className="object-cover w-full h-full rounded-[20px]" alt="Palestine 5" />
            </div>
          </Carousel>
        </div>

        <div className=" w-[80%] lg:w-[30%] lg:h-full font-josefin whitespace-pre-wrap flex flex-col space-y-5 mb-[50px] lg:mb-0 transition-all duration-500 transform animate-leftToRight">
          <div className="w-full h-full flex flex-col gap-3 ">
           
            <p className="text-xl text-blue-200 ">Israel's Brutal invasion of Gaza has claimed the lives of over 17,400 children and 8,000 women, leaving countless others homeless and starving. Entire neighborhoods lie in rubble, and families are in desperate need of aid. The Gaza Strip is a graveyard for thousands of children, the United Nations has said. Don’t stand by in silence—your support can bring hope. Donate to UNRWA today to help those who need it most.</p>
          </div>

        </div>
      </div>


      <div className="w-full h-full font-josefin flex flex-col items-center justify-center gap-6">
  <div className="w-[80%] h-auto flex justify-center">
    <p className="text-xl text-blue-200 text-center">UNRWA provides life-saving aid to Palestinian refugees—donate now to support their vital work in Gaza.</p>
  </div>
  <div className="w-[80%] h-auto flex justify-center">
    <a href="https://donate.unrwa.org/zakat/~my-donation" target="_blank" rel="noopener noreferrer">
      <button className="bg-[#d45640] text-blue-100 font-josefin py-4 px-6 rounded-full">Donate Now</button>
    </a>
  </div>
</div>

    </div>

  );
}

export default Donate;