import React from "react";
import AvatarImg from "../Asset/Images/profile-pic.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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
                    <FaTwitter size={20} />
                  </a>
                </span>
              </div>
            </div>
            <p className="text-gray-700 text-base mx-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquam animi pariatur perferendis,
              maxime sed sit magni, libero nam nesciunt accusamus placeat
              temporibus natus eum. Nihil consequuntur ad id unde ducimus saepe
              temporibus autem, labore laborum doloremque iste debitis animi
              aspernatur!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
