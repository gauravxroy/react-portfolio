import React from "react";
import AvatarImg from "../Asset/Images/profile-pic.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
const About = () => {
  return (
    <section id="about" className=" bg-[#111827] ">
      <div className="mb-10 flex items-center justify-between flex-wrap container">
        <div className="mb-7  sm:mb-0">
          <h2 className="text-violet-500 font-[800] text-[2rem] mb-5 text-underline ">
            About
          </h2>
        </div>
      </div>
      <div
        className="max-w-sm w-full lg:max-w-full lg:flex container cursor-pointer"
        data-aos="zoom-in-up"
        data-aos-duration="1200"
      >
        <div className=" lg:border-gray-400 bg-white rounded-3xl p-4 flex justify-between leading-normal">
          <div
            className="mb-8  mt-8 flex  gap-8  flex-wrap flex-col "
            style={{ alignItems: "center" }}
          >
            <img
              class=" w-32 h-32 rounded-full shadow-lg mx-auto flex"
              src={AvatarImg}
              alt="product designer"
            />

            {/* <div className="text-gray-900 font-bold text-xl ">Gaurav Roy</div> */}
            <div className="">
              <div className="text-sm text-center">
                <p className="text-gray-900 font-bold text-xl leading-none">
                  Gaurav Roy
                </p>
                <p className="text-gray-600">Software Developer</p>
              </div>
              <div
                className="social flex items-center gap-2 justify-center mt-2"
                style={{ color: "#7c3aed" }}
              >
                <span>
                  <a href="/" className="hover:shadow-lg">
                    {" "}
                    <FaGithub size={20} />
                  </a>
                </span>
                <span>
                  <a href="/">
                    {" "}
                    <FaLinkedin size={20} />
                  </a>
                </span>
                <span>
                  <a href="/">
                    {" "}
                    <RiTwitterXFill size={20} />
                  </a>
                </span>
              </div>
            </div>
            <p className="text-gray-700 text-base mx-1">
              Passionate developer from india using technology to solve
              real-world problems. I have a strong foundation in technologies
              such as Java, Javascript and DBs like MySQL as well as experience
              with data structures and algorithms. I am also interested in web
              app development and currently working on several projects in these
              areas. In addition to my technical skills, I am a strong
              collaborator and communicator, and I always looking for
              opportunities to apply my skills to make a positive impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
