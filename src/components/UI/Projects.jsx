import React from "react";

import projectImg1 from "../Asset/Images/HomePage.png";
import { FaGithub, FaLink, FaReact, FaHtml5, FaNpm } from "react-icons/fa";

import { BsFiletypeScss } from "react-icons/bs";
const Projects = () => {
  return (
    <section id="projects" className="bg-[#111827] ">
      {/* // */}
      <div className="container ">
        <div className="mb-10 flex items-center justify-between flex-wrap">
          <div className="mb-7  sm:mb-0">
            <h2 className="text-violet-500 font-[800] text-[2rem] mb-5 text-underline ">
              Projects
            </h2>
          </div>
        </div>
        <div className=" flex items-center justify-center  gap-10 flex-wrap">
          {/* 1st card start */}
          <div
            className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg cursor-pointer hover:drop-shadow-lg"
            data-aos="zoom-in-up"
            data-aos-duration="1200"
          >
            <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40  ">
              <img src={projectImg1} alt="project img 01" />
              <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
              <button
                class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                  <a href="/">
                    {" "}
                    <FaLink size={20} />
                  </a>
                </span>
              </button>
            </div>
            <div class="p-6">
              <div class="mb-3 flex items-center justify-between">
                <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                  MoviZZ{" "}
                </h5>
                <span class="flex items-center gap-2  text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                  <a href="/">
                    {" "}
                    <FaLink size={20} />
                  </a>
                  <a href="/">
                    {" "}
                    <FaGithub size={20} />
                  </a>
                </span>
              </div>
              <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                MoviZZ is a cutting-edge movie web application developed with
                React.js 18, leveraging the power of SCSS for stylish and
                responsive design. This dynamic platform sources its movie data
                from the TMDB API, ensuring an up-to-date and extensive
                collection of films.
              </p>
            </div>
            <div className="group ml-5 inline-flex flex-wrap items-center gap-3 text-white">
              <span className=" bg-violet-500 rounded-full p-2 text-whiteshadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <FaReact size={20} />
              </span>
              <span className="bg-violet-500 rounded-full p-2 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ">
                <FaHtml5 size={20} />
              </span>
              <span className="bg-violet-500 rounded-full p-2 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <FaNpm size={20} />
              </span>
              <span className="bg-violet-500 rounded-full p-2 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <BsFiletypeScss size={20} />
              </span>
            </div>
            <div class="p-6 pt-3">
              <a href="/">
                <button
                  class="block w-full select-none rounded-lg bg-violet-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  View
                </button>
              </a>
            </div>
          </div>
          {/* 1st card end */}

          {/* 2nd card start */}
          <div
            class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg cursor-pointer "
            data-aos="zoom-in-up"
            data-aos-duration="1200"
          >
            <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img src={projectImg1} alt="project img 01" />
              <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
              <button
                class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                  <a href="/">
                    {" "}
                    <FaLink size={20} />
                  </a>
                </span>
              </button>
            </div>
            <div class="p-6">
              <div class="mb-3 flex items-center justify-between">
                <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                  MoviZZ{" "}
                </h5>
                <span class="flex items-center gap-2  text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                  <a href="/">
                    {" "}
                    <FaLink size={20} />
                  </a>
                  <a href="/">
                    {" "}
                    <FaGithub size={20} />
                  </a>
                </span>
              </div>
              <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                MoviZZ is a cutting-edge movie web application developed with
                React.js 18, leveraging the power of SCSS for stylish and
                responsive design. This dynamic platform sources its movie data
                from the TMDB API, ensuring an up-to-date and extensive
                collection of films.
              </p>
            </div>
            <div className="group ml-5 inline-flex flex-wrap items-center gap-3 text-white">
              <span className=" bg-violet-500 rounded-full p-2 text-whiteshadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <FaReact size={20} />
              </span>
              <span className="bg-violet-500 rounded-full p-2 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ">
                <FaHtml5 size={20} />
              </span>
              <span className="bg-violet-500 rounded-full p-2 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <FaNpm size={20} />
              </span>
              <span className="bg-violet-500 rounded-full p-2 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <BsFiletypeScss size={20} />
              </span>
            </div>
            <div class="p-6 pt-3">
              <a href="/">
                <button
                  class="block w-full select-none rounded-lg bg-violet-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  View
                </button>
              </a>
            </div>
          </div>
          {/* 2nd card end */}

          {/* 3rd Card Start */}
          {/* <div
            className="cardshadow w-full p-4 bg-white border-solid border-2  lg:w-1/4 rounded-xl hover:opacity-90 hover:scale-105 transform transition duration-500 hover:shadow-md"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            <div>
              <img className=" rounded-xl  " src={cardImg} alt="" />
            </div>
            <div>
              <h2 className="pt-4 text-violet-500"> Game Web Application </h2>
              <p className="text-gray-700">
                A Game Developed Using Html, Css, JavaScript , Next.js and
                bootstrap{" "}
              </p>
              <button className="border-[1.5px] rounded-xl max-h-10 px-4 p-2 mt-4  text-white  font-600 bg-violet-500 border-solid border-violet-500  hover:bg-white hover:text-violet-500 hover:font-[500] ease-in duration-300">
                View{" "}
              </button>
            </div>
          </div> */}
          {/* 3rd Card end */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
