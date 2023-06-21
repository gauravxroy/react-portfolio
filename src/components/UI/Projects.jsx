import React from 'react'
import cardImg from '../Asset/Images/cable.jpg'
const Projects = () => {
  return (
    <section id="projects" className="">
      <div className="container ">
        <div className="mb-10 flex items-center justify-between flex-wrap">
          <div className="mb-7  sm:mb-0">
            <h2 className="text-violet-500 font-[800] text-[2rem] mb-5 text-underline ">Projects</h2>
          </div>
        </div>
        <div className=" flex items-center justify-center  gap-5 flex-wrap cursor-pointer">
          {/* 1st card start */}
          <div className="cardshadow w-full bg-white p-4  border-solid border-2  lg:w-1/4 rounded-xl hover:opacity-90 hover:scale-105 transform transition duration-500 hover:shadow-md ">
            <div>
              <img className=" rounded-xl  " src={cardImg} alt="" />
            </div> 
            <div>
          
              <h2 className="pt-4 text-violet-500"> Full Stack Site </h2>
              <p className="text-gray-700">Web Application For Watching movies Developed using MERN Stack </p>
              <button className="border-[1.5px] rounded-xl max-h-10 px-4 p-2 mt-4  text-white  font-600 bg-violet-500 border-solid border-violet-500  hover:bg-white hover:text-violet-500 hover:font-[500] ease-in duration-300">View </button>
            </div>
          </div>
          {/* 1st card end */}

          {/* 2nd card start */}
          <div className="cardshadow w-full p-4 bg-white border-solid border-2  lg:w-1/4 rounded-xl hover:opacity-90 hover:scale-105 transform transition duration-500 hover:shadow-md">
            <div>
              <img className=" rounded-xl  " src={cardImg} alt="" />
            </div>
            <div>
              <h2 className="pt-4  text-violet-500"> E-Commerce Landing Page </h2>
              <p className="text-gray-700">E-Commerce Landing Page Developed Using React.js, Tailwind Css </p>
              <button className="border-[1.5px] rounded-xl max-h-10 px-4 p-2 mt-4  text-white  font-600 bg-violet-500 border-solid border-violet-500  hover:bg-white hover:text-violet-500 hover:font-[500] ease-in duration-300">View </button>
            </div>
          </div>
          {/* 2nd card end */}

          {/* 3rd Card Start */}
          <div className="cardshadow w-full p-4 bg-white border-solid border-2  lg:w-1/4 rounded-xl hover:opacity-90 hover:scale-105 transform transition duration-500 hover:shadow-md">
            <div>
              <img className=" rounded-xl  " src={cardImg} alt="" />
            </div>
            <div>
              <h2 className="pt-4 text-violet-500"> Game Web Application </h2>
              <p className="text-gray-700">A Game Developed Using Html, Css, JavaScript , Next.js and bootstrap </p>
              <button className="border-[1.5px] rounded-xl max-h-10 px-4 p-2 mt-4  text-white  font-600 bg-violet-500 border-solid border-violet-500  hover:bg-white hover:text-violet-500 hover:font-[500] ease-in duration-300">View </button>
            </div>
          </div>
          {/* 3rd Card end */}

          



        </div>
      </div>

    </section>
  )
}

export default Projects