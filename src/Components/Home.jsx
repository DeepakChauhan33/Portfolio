import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { useTheme } from "./Theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import resume from "../assets/DEEPAK.pdf"
import logo from '../assets/Logo.png'
import About from "./About/";




const Home = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { theme, toggleTheme } = useTheme();


  useEffect(() => {
    setTimeout(() => setShow(true), 100); 
  }, []);


  return (
    <div className={`flex flex-col min-h-screen `}>
      {/* NAVBAR */}
      <nav className={`${theme === "light" ? "bg-gradient-to-r from-blue-200 via-blue-100 to-cyan-100" : "bg-gray-800"} 
                        w-full lg:fixed top-0 left-0 z-50 p-3 flex justify-between items-center`}>

        {/* Logo */}
        <div className="text-2xl font-bold shadow-md  text-black">

          <NavLink to="/" className={`font-bold text-lg ${theme === "light" ? "text-black" : "text-white"} !no-underline`}>
            <img
            className="h-14"
            src={logo} alt="logo" />
          </NavLink>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden  px-4 py-2 rounded mt-2 sm:mt-0 text-gray"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={faBars} className={`${theme === "light" ? "text-black" : "text-white"}`} />
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex md:flex-row md:gap-x-6 md:mt-0 lg:w-[85%] md:justify-end md:space-y-0 md:space-x-6">
          <li>
            <NavLink to="/" className={`font-bold text-lg ${theme === "light" ? "text-black" : "text-white"} !no-underline`}>
              Home
            </NavLink>
          </li>
          <li>
            <a href="#about" className={`font-bold text-lg ${theme === "light" ? "text-black" : "text-white"} !no-underline`}>
              About
            </a>
          </li>
          <li>
            <NavLink to="/projects" className={`font-bold text-lg ${theme === "light" ? "text-black" : "text-white"} !no-underline`}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={`font-bold text-lg ${theme === "light" ? "text-black" : "text-white"} !no-underline`}>
              Contact
            </NavLink>
          </li>

        </ul>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-800 p-6 transform transition-transform duration-300 ease-in-out z-40 block md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}

        >


          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
          >
            ✕
          </button>


          <ul className="space-y-4 mt-10">
            <li>
              <NavLink to="/" className="text-white font-bold text-lg !no-underline">Home</NavLink>
            </li>
            <li>
              <a href="#about" className="text-white font-bold text-lg !no-underline">About</a>
            </li>
            <li>
              <NavLink to="/projects" className="text-white font-bold text-lg !no-underline">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-white font-bold text-lg !no-underline">Contact</NavLink>
            </li>

          </ul>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`hidden md:flex items-center justify-center 
             hover:shadow-md hover:bg-white/40 !rounded-full ${theme === "light" ? "text-gray-950" : "text-teal-50"}
             w-12 h-12 text-sm font-semibold`}  >
          {theme === "light" ? <FontAwesomeIcon icon={faMoon} className="transition-transform duration-300 rotate-180 scale-110" /> :
            <FontAwesomeIcon icon={faSun} className="transition-transform duration-300 rotate-0 scale-100" />
          }
        </button>
      </nav>

      {/* HERO SECTION */}


      <section
        id="hero"
        className={`scroll-mt-24 flex flex-col justify-center items-center p-4 gap-3 xl:h-screen pt-16 md:pt-10 lg:pt-24 
        ${theme === "light" ? "bg-gradient-to-t from-slate-100 via-slate-50 to-sky-100" : "bg-gradient-to-t from-gray-800 via-gray-800 to-slate-700"} 
         sm:p-12 sm:flex-row  sm:items-center sm:justify-center `}>
        {/* Text */}
        <div className="flex flex-col items-start justify-center sm:w-1/2  lg:h-[60%] space-y-4 
        text-start sm:text-left lg:flex lg:justify-end lg:items-start md:flex-col md:items-start  md:p-8 xl:mb-24">
          <p className={`font-bold text-2xl lg:font-semibold  lg:text-4xl xl:text-6xl ${theme === "light" ? "text-black" : "text-white"} transition-all duration-1000 ease-out
          ${show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`} >
            Hi, I am <br className="hidden sm:block" />
            Deepak Chauhan
          </p>
          <p className={`text-lg sm:text-xl lg:text-2xl ${theme === "light" ? "text-black-200" : "text-gray-500"}`} >
            Frontend Enthusiast | Backend Explorer | Lifelong Learner
          </p>

          <a
            className=" p-1.5 text-white bg-blue-500 !no-underline hover:bg-blue-600 transition-colors duration-200 rounded hover:shadow-xl"
            href={resume}
            download="Deepak_resume"
          >Download CV
          </a>

        </div>

        {/* Image */}
        <div className="sm:w-1/2  flex justify-center mb-6 sm:mb-0 lg:h-[80%] ">
          <img
            className="w-72 sm:w-72  rounded-xl  lg:h-[100%] lg:w-[100%]"
            src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454628-2918517.png"
            alt="Profile"
          />
        </div>
      </section>


      {/* ABOUT ME SECTION */}
      <About/>

      {/* FOOTER */}
      <Footer />
    </div >
  );
};

export default Home;
