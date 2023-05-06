import React from 'react'
import {  FaPaperPlane,FaBars } from "react-icons/fa";
import myLogo from '../Asset/Images/myImg.jpg'

const Header = (props) => {
  return (

   <header className="w-full h-[80px] leading-[80px] flex items-center">
    <div className="container">
        <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] bg-violet-500 text-white text-[18px] font-[200] rounded-full flex items-center justify-center"><img src="" alt="" /><img src={myLogo} alt="" className="w-[35px] h-[35px] object-cover object-center rounded-full" /></span>
                <div className="leading-[20px]">
                    <h2 className="text-xl text-smallTextColor font-700">Gaurav</h2>
                    <p className="text-violet-500 font-300">Portfolio Site</p>
                </div>
            </div>
            {/*   Logo end */}
            {/* menu start */}
            <div className="menu ">
                <ul className="flex items-center gap-10">
                    <li><a href="#Home" className="text-#94a3b8 font-700 hover:text-violet-500">Home</a></li>
                    <li><a href="#Projects" className="text-#94a3b8 font-700 hover:text-violet-500 ">Projects</a></li>
                    <li><a href="#Resume" className="text-#94a3b8  font-700 hover:text-violet-500 ">Resume</a></li>
                    <li><a href="Contact" className="text-#94a3b8 font-700 hover:text-violet-500 "> Contact</a></li>
                </ul>
            </div>
            {/* menu end */}
            {/* menu hire right start*/}
            <div className="flex items-center gap-4 ">
                <button className="flex  items-center gap-2  text-violet-500 border font-600  border-solid border-violet-500  px-4 rounded-[9px] max-h-10 hover:bg-violet-500 hover:text-white hover:font-[500] ease-in duration-400 ">
                Hire Me<FaPaperPlane />
                </button>
                <span className="text-2xl text-[#4b5563] md:hidden cursor-pointer  "><FaBars/></span>
            </div>
            {/* menu hire right   end*/}
        </div>
    </div>
   </header>
  )
}

export default Header