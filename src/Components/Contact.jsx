import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import Footer from "./Footer";
import { useTheme } from "./Theme";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon, faSun} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    ...formData,
    access_key: "6a17fdbb-b129-4399-9954-4fc8f8ecf88a",
  };

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (result.success) {
    alert("Message sent successfully ✅");
    setFormData({ name: "", email: "", message: "" });
  } else {
    alert("Something went wrong ❌ " + result.message);
  }
};


  return (
    <>
      {/* Navbar */}
      <nav className={`${theme === "light" ? "bg-gradient-to-r from-blue-200 via-blue-100 to-cyan-100" : "bg-gray-800"} 
        w-full lg:fixed top-0 left-0 z-50 p-4 flex justify-between items-center`}>

        {/* Logo */}
        <div className="text-2xl font-bold border-2 text-black">
        
                    <NavLink to="/" className={`font-bold text-lg ${theme === "light" ? "text-black" : "text-white"} !no-underline`}>
                      DPK
                    </NavLink>
        
                </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden  px-4 py-2 rounded mt-2 sm:mt-0 text-gray"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex md:flex-row md:gap-x-6 md:mt-0 lg:w-[85%] md:justify-end md:space-y-0 md:space-x-6">
          <li>
            <NavLink to="/" className={`font-bold text-lg ${theme === "light" ? "text-black" : "text-white"} !no-underline`}>
              Home
            </NavLink>
          </li>
          <li>

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



      {/* Contact Section */}


      <div className={`${theme === "light" ? "bg-gradient-to-t from-slate-100 via-slate-50 to-sky-100" : "bg-gradient-to-t from-gray-800 via-gray-800 to-slate-700"}
        lg:pt-34 flex flex-col lg:flex-row gap-8 lg:gap-16  items-start min-h-screen  p-6 lg:p-12`}>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className={`${theme === "light" ? "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" : "bg-gradient-to-r from-slate-600 via-gray-700 to-slate-600"}
                       shadow-lg rounded-lg p-6 w-full lg:w-1/2`}
        >
          <h2 className={`text-2xl font-bold mb-6 ${theme=== "light" ? "text-black" : "text-white"} ${theme === "light" ? "border-b-2 border-blue-500 " : "border-b-2 border-b-green-50 "} pb-2`}>
            Contact Us
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label className={`block text-gray-700 font-medium mb-2
              ${theme=== "light" ? "text-black" : "text-zinc-300"}`}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full p-3 border ${theme === "light" ? "border-black" : "border-white"} rounded-lg focus:outline-none `}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className={`block text-gray-700 font-medium mb-2
              ${theme=== "light" ? "text-black" : "text-zinc-300"}`}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full p-3 border ${theme === "light" ? "border-black" : "border-white"} rounded-lg focus:outline-none `}
              required
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className={`block text-gray-700 font-medium mb-2
              ${theme=== "light" ? "text-black" : "text-zinc-300"}`}>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className={`w-full p-3 border ${theme === "light" ? "border-black" : "border-white"} rounded-lg focus:outline-none `}
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`w-full  text-white font-bold py-3 !rounded-lg  transition duration-300
               ${theme=== "light" ? "text-black bg-blue-600/65 hover:bg-blue-500" : "text-white bg-[#1f2937] hover:bg-[#273344]"}`}
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className={`${theme === "light" ? "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" : "bg-gradient-to-r from-gray-700 via-gray-700 to-gray-700"}
                          shadow-lg rounded-lg p-6 w-full lg:w-1/2`}>
          <h2 className={`text-2xl font-bold mb-6 text-gray-800 border-b-2 border-green-500 pb-2
            ${theme=== "light" ? "text-black" : "text-white"}`}>
            Contact Details
          </h2>

          <p className={`mb-4 ${theme=== "light" ? "text-black" : "text-white"}`}>
            <strong>Phone:</strong> +91 7982294460
          </p>
          <p className={`mb-4 ${theme=== "light" ? "text-black" : "text-white"}`}>
            <strong>Email:</strong> deep651965@gmail.com
          </p>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
