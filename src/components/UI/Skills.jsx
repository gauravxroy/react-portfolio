import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaReact,
} from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
const Skills = () => {
  return (
    <section id="skills" className="  h-[100vh] bg-[#111827]">
      <h2 className="text-violet-500 font-[800] text-[2rem]  text-underline text-center mb-[2rem]">
        Skills
      </h2>
      <div
        className="container flex justify-evenly flex-wrap gap-2 cursor-pointer "
        data-aos="flip-up"
        data-aos-onDurationChange="1200"
      >
        {/* card 1 start */}
        <div className="block max-w-[6rem] p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <span
              className="flex justify-center items-center"
              style={{ color: "white" }}
            >
              <FaReact size={50} />
            </span>
            <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-center items-center">
              React.Js
            </p>
          </div>
        </div>
        <div className="block max-w-[6rem] p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <span
              className="flex justify-center items-center"
              style={{ color: "white" }}
            >
              <FaJs size={50} />
            </span>
            <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-center items-center">
              JavaScript
            </p>
          </div>
        </div>
        <div className="block max-w-[6rem] p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <span
              className="flex justify-center items-center"
              style={{ color: "white" }}
            >
              <FaHtml5 size={50} />
            </span>
            <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-center items-center">
              Html5
            </p>
          </div>
        </div>
        <div className="block max-w-[6rem] p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <span
              className="flex justify-center items-center"
              style={{ color: "white" }}
            >
              <FaCss3 size={50} />
            </span>
            <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-center items-center">
              Css3
            </p>
          </div>
        </div>
        <div className="block max-w-[6rem] p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <span
              className="flex justify-center items-center"
              style={{ color: "white" }}
            >
              <BsFiletypeScss size={50} />
            </span>
            <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-center items-center">
              Scss
            </p>
          </div>
        </div>
        <div className="block max-w-[6rem] p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <span
              className="flex justify-center items-center"
              style={{ color: "white" }}
            >
              <FaJava size={50} />
            </span>
            <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-center items-center">
              Java
            </p>
          </div>
        </div>
        <div className="block max-w-[6rem] p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <span
              className="flex justify-center items-center"
              style={{ color: "white" }}
            >
              <TbBrandCpp size={50} />
            </span>
            <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-center items-center">
              C++
            </p>
          </div>
        </div>
        <div className="block max-w-[6rem] p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <span
              className="flex justify-center items-center"
              style={{ color: "white" }}
            >
              <FaNpm size={50} />
            </span>
            <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-center items-center">
              Npm
            </p>
          </div>
        </div>
        <div className="block max-w-[6rem] p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <span
              className="flex justify-center items-center"
              style={{ color: "white" }}
            >
              <FaBootstrap size={50} />
            </span>
            <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-center items-center">
              Bootstrap
            </p>
          </div>
        </div>
        <div className="block max-w-[6rem] p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <span
              className="flex justify-center items-center"
              style={{ color: "white" }}
            >
              <FaNodeJs size={50} />
            </span>
            <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-center items-center">
              Node.js
            </p>
          </div>
        </div>
        <div className="block max-w-[6rem] p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <span
              className="flex justify-center items-center"
              style={{ color: "white" }}
            >
              <FaGithub size={50} />
            </span>
            <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-center items-center">
              GitHub
            </p>
          </div>
        </div>
        <div className="block max-w-[6rem] p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <span
              className="flex justify-center items-center"
              style={{ color: "white" }}
            >
              <FaGit size={50} />
            </span>
            <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-center items-center">
              Git
            </p>
          </div>
        </div>

        {/* card 1 end */}
      </div>
    </section>
  );
};

export default Skills;
