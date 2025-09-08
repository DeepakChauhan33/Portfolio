import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Cards from './Cards';
import Footer from './Footer';
import { useTheme } from "./Theme";
import logo from '../assets/Logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon, faSun}  from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
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
      {/* PROJECTS SECTION */}
      <section
        className={`scroll-mt-24 pt-16 md:pt-10 lg:pt-24 w-full lg:h-screen 
          ${theme === "light" ? "bg-gradient-to-t from-slate-100 via-slate-50 to-sky-100" : "bg-gradient-to-t from-gray-800 via-gray-800 to-slate-700"}  py-12`}
      >
        <div className="max-w-8xl mx-auto px-4 text-center">
          <h1
            className={`text-4xl font-extrabold mb-10 bg-transparent flex border-b-2 w-full p-3.5 ${theme === "light" ? "text-gray-900" : "text-white"} `}
          >
            My Projects
          </h1>

        </div>

        <div className={`${theme === "light" ? "text-gray-900" : "text-white"} 
        flex flex-col 
        sm:flex 
        max-w-7xl mx-auto sm:px-4 text-center mt-4 border-b-2`}>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-7 ">
            
            <Cards 
              prjName="TODO List" 
              imgLink={"https://t4.ftcdn.net/jpg/02/89/04/39/360_F_289043915_62E4CSfMrMJeW3JFYnaYUcXZLmgV6iK3.jpg"} 
              lang1="HTML/CSS" 
              lang2="JavaScript" 
              lang3="Local Storage" 
              prjLink="https://deepakchauhan33.github.io/TODO-Liist/"
              prjCode="https://github.com/DeepakChauhan33/TODO-Liist" />
            <Cards 
              prjName="Number Game" 
              imgLink={"https://designsandlines.co.uk/wp-content/uploads/2021/12/1-100-Half-solid-680x680.jpg"} 
              lang1="HTML" 
              lang2="CSS" 
              lang3="JavaScript" 
              prjLink="https://number-game-eosin-rho.vercel.app/"
              prjCode="https://github.com/DeepakChauhan33/Number-Game" />
            <Cards 
              prjName="Project 3" 
              imgLink={"https://cdn.dnaindia.com/sites/default/files/2018/09/04/726933-438073-amazon.jpg?im=FitAndFill=(1200,900)"} 
              lang1="Python" 
              lang2="Django" 
              lang3="PostgreSQL" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Projects;
