import React from "react";
import {  FaPaperPlane,FaFileDownload } from "react-icons/fa";
// import CountUp from "react-countup";
// import myImg from '../Asset/Images/heroImg.png'
import mySvg from '../Asset/Svg/BlobHero.svg'
const Hero = () => {

  return (
    <section className=" mb-0" id="about">
      <div className="container pt-4">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* hero left Content start */}

          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="  text-violet-500 text-[20px] "
            >
              Hello , World
            </h5>

            {/* sm:text-[40px] leading-[50px] sm:leading-[46px] use this in below h1 tag if necessory */}
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-[#8b9cb5] font-[700] text-[1.5rem] sm:text-[40px]  mt-3"
            > 
              I'm Gaurav Roy <br />
              Full Stack Developer
            </h1>
            <div ata-aos="fade-right"
              data-aos-duration="1800" data-aos-delay="200" className="flex items-center gap-6 mt-7">
                <a href="/"><button className=" flex  items-center gap-2  text-white bg-violet-500 border font-600  border-solid border-violet-500  px-4 rounded-[9px]  hover:bg-white hover:text-violet-500  hover:font-[500] ease-in duration-500 p-2 " >Hire Me<FaPaperPlane /></button></a>
                <a href="/"><button className=" flex  items-center gap-2  text-violet-500 border font-600  border-solid border-violet-500  px-4 rounded-[9px]  hover:bg-violet-500 hover:text-white hover:font-[500] ease-in duration-500 p-2 " >Resume<FaFileDownload /></button></a>
            </div>
          </div>

          {/* hero left Content end */}
          {/* Hero img start */}
          {/* <div className="basis-1/3  flex-wrap">
            <figure className="flex items-center justify-center   ">
              <img src={myImg} alt=""  className="  h-[231px] "/>
            </figure>
          </div> */}
          {/* Hero img end */}

          <div className="basis-1/3  flex-wrap flex items-center  "  >
             <img src={mySvg} alt=""  className=" animate-pulse duration-400" ata-aos="fade-up "
              data-aos-duration="1800" />
          </div>
        </div>
      </div>
      {/* <div >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8b5cf6" fill-opacity="0.73" d="M0,192L80,197.3C160,203,320,213,480,208C640,203,800,181,960,170.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div> */}
    </section>
  );
};

export default Hero;
