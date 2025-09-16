import React from 'react'
import { useTheme } from "./Theme";


const About = () => {
     const { theme, toggleTheme } = useTheme();
  return (
    <>
      
       <main
        id="about"
        className={`${theme === "light" ? "bg-gradient-to-t from-sky-100 via-slate-50 to-slate-100" : "bg-gradient-to-t from-slate-700 via-gray-800 to-gray-800"}
         sm:p-12 lg:pr-10 lg:pt-0 p-2.5 scroll-mt-22` }>
        <h2 className={`text-2xl font-bold  border-b-2 p-4 ${theme === "light" ? "text-black" : "text-white"}`}>
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-6 mt-10">
          {/* Image */}
          <div className="flex justify-center lg:w-[40%]">
            <img
              className="w-52 md:w-72 lg:w-96 rounded-2xl shadow-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09ta0M6n3B6Z2i9LUyMeFXekku5O-fXGQMA&s"
              alt="About Me"
            />
          </div>

          {/* Text */}
          <div className={`${theme === "light" ? "bg-amber-100" : "border-x-indigo-400"} p-6 rounded-lg shadow-md space-y-4 lg:w-[60%]  `}>
            <p className={`${theme === "light" ? "text-black" : "text-white"} lg:text-xl font-sans`}>
              Hi, I’m Deepak Chauhan, a frontend developer passionate about building clean, responsive, and user-friendly web apps. I specialize in JavaScript, React (Vite), Tailwind CSS, and Bootstrap. I love turning ideas into engaging digital experiences while constantly learning and improving my problem-solving skills. My goal is to grow as a developer and contribute to impactful projects.
            </p>
            {/* <p className={`${theme === "light" ? "text-black" : "text-white"} lg:text-xl hidden xl:block`}>
              I am eager to contribute my skills in a collaborative environment, gain real-world industry experience, and grow as a developer while adding value to every project I work on.
            </p> */}
          </div>
        </div>

        <div className="w-auto">

          <div className={`p-2 ${theme === "light" ? "text-black" : "text-white"} `}>
            <h1 className="p-1.5 ">Tech Stack</h1>  
            <ul className={`${theme === "light" ? "text-black" : "text-white"} border-t-2 space-y-7`}>

              <li>
                <h3 className="p-1.5 ">Languages</h3>
                <ul className={`${theme === "light" ? "text-black" : "text-white"} list-disc text-lg text-gray-800 space-y-2`}>
                  <li>♨️Java</li>
                  <li>⚡️JavaScript</li>
                  <li>💻Python</li>
                </ul>
              </li>

              <li>
                <h3>Libraries/Frameworks</h3>
                 <ul className={`${theme === "light" ? "text-black" : "text-white"} list-disc text-lg text-gray-800 space-y-2`}>
                  <li>⚛️React JS</li>
                  <li>🎨Tailwind CSS</li>

                </ul>
              </li>

              <li>
                <h3>Database</h3>
                 <ul className={`${theme === "light" ? "text-black" : "text-white"} list-disc text-lg text-gray-800 space-y-2`}>
                  <li>🛢️SQL</li>
                  <li>📁Google Firebase</li>

                </ul>

              </li>
            </ul>
          </div>
        </div>
      </main>

    </>
  )
}

export default About
