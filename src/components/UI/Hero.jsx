import React from "react";
import { FaPaperPlane } from "react-icons/fa";
// import CountUp from "react-countup";
// import myImg from '../Asset/Images/heroImg.png'
// import mySvg from "../Asset/Images/profile-pic.png";

const Hero = () => {
  return (
    <section className=" mb-0 bg-[#111827] " id="about">
      <div className="container pt-4 ">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* hero left Content start */}

          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="  text-violet-500 text-[35px] "
            >
              Hello , World
            </h5>

            {/* sm:text-[40px] leading-[50px] sm:leading-[46px] use this in below h1 tag if necessory */}
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-[#8b9cb5] font-[700] text-[2rem] sm:text-[45px]  mt-3"
            >
              I'm Gaurav Roy <br />
              Aspiring Software Developer
            </h1>
            <div
              data-aos="fade-right"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7 xsm:my-8 "
            >
              <a href="/">
                <button class=" flex  justify-items-center  gap-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-1 mb-2">
                  Hire Me
                  <FaPaperPlane />
                </button>
              </a>
              <div className="resume">
                <a href="/">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* hero left Content end */}
          {/* Hero img start */}

          <div className="basis-1/3  flex-wrap flex items-center   ">
            {/* <img
              className="sm:my-4 "
              src={mySvg}
              alt=""
              ata-aos="fade-up "
              data-aos-duration="1800"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
