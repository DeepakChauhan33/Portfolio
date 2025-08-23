
import { useState } from 'react'

const Navbar = () => {

 const [isOpen, setIsOpen] = useState(false);

  return (
    <>

    <h1 className='bg-amber-400'>
      deepak
    </h1>
    
    <nav className="relative bg-gray-900 text-white p-4">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-20 relative bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 p-6 transform transition-transform duration-300 ease-in-out
           ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="space-y-4 mt-10">
          <li className="hover:text-blue-400 transition">Home</li>
          <li className="hover:text-blue-400 transition">About</li>
          <li className="hover:text-blue-400 transition">Services</li>
          <li className="hover:text-blue-400 transition">Contact</li>
        </ul>
      </div>

      {/* Overlay (optional) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  

    
    </>
  )
}

export default Navbar



//  <nav className='bg-gray-800 text-white h-auto w-full space-y-3 flex flex-col items-center p-4 sm:flex-row sm:justify-between sm:items-center sm:p-6 fixed top-0 left-0 z-50'>
//       <div className='sm:h-18 sm:w-30 sm:text-2xl'>Deepak Chauhan</div>
//       <button
//         className='sm:hidden bg-blue-500 text-white px-4 py-2 rounded mb-2'
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         Menu
//       </button>
//       <ul className={`flex flex-col justify-center items-center p-1 border-2 sm:border-none sm:flex sm:flex-row sm:justify-between sm:gap-x-6 sm:w-[60%]
//         ${menuOpen ? 'block' : 'hidden'} sm:block`}
//       >
//         <li className='sm:cursor-pointer sm:font-bold sm:text-2xl'>About</li>
//         <li className='sm:cursor-pointer sm:font-bold sm:text-2xl'>Projects</li>
//         <li className='sm:cursor-pointer sm:font-bold sm:text-2xl'>Contact</li>
//         <li className='sm:cursor-pointer sm:font-bold sm:text-2xl'>Education</li>
//       </ul>
//       <div>
//         <button className='hidden sm:bg-blue-500 sm:text-white sm:px-4 sm:py-2 sm:rounded sm:block'>Dark</button>
//       </div>
//     </nav>






