import React from 'react'
import {  FaPaperPlane,FaBars,FaFileDownload,FaGithub,FaLinkedinIn,FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='bg-[#1f2937] pt-12 '>
      {/* footer top starts */}

      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8 ">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[16px] leading-10 text-white font-[600] mb-5 md:text-[1.5rem]">Hey! I'm Open to work :)</h2>
            <a href="#contact">
             <button className=" flex  items-center gap-2  text-white bg-violet-500 border font-600  border-solid border-violet-500  px-4 rounded-[9px]  hover:bg-white hover:text-violet-500  hover:font-[500] ease-in duration-500 p-2 " >Hire Me<FaPaperPlane /></button>
            </a>
          </div>
          <div className=" w-full sm:w-1/2">
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0 '>
            "The only way to do great work is to love what you do." 
            - Steve Jobs
            </p>


            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[16px]">
                Connect With Me: 
              </span>
              <span className="  p-1  cursor-pointer text-center">
                <a href="https://github.com/gauravxroy" target='_blank' rel='noopener noreferrer' className='text-gray-300  '> <FaGithub size={20}/></a>
              </span>
              <span className="  p-1  cursor-pointer text-center">
                <a href="https://www.linkedin.com/in/gaurav-roy-155401218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBblMMl1WTNCfBarQI9Jmyg%3D%3D" target="_blank" rel="noopener noreferrer" className='text-gray-300  '> <FaLinkedinIn size={20}/></a>
              </span>
              <span className="  p-1  cursor-pointer text-center">
                <a href="https://twitter.com/gauravroy021" target='_blank' rel='noopener noreferrer' className='text-gray-300  '> <FaTwitter size={20}/></a>
              </span>
            </div>
          </div>
        </div>
      </div>
   {/* footer top  end */}
   {/* footer bottom  */}
    <div className='mt-5 text-center flex justify-center align-center align-middle'>
    <p className='text-gray-300 leading-7 text-[15px] '>
            created by @Gaurav with &#10084;
            </p>
    </div>

   {/* footer bottom end */}

    </footer>
  )
}

export default Footer