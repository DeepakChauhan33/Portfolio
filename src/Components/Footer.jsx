import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-2">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Left text */}
        <span className="text-sm sm:text-base">
          Made by <span className="font-bold">Deepak Chauhan</span>
        </span>

        {/* Social Links */}
        <nav>
          <ul className="flex gap-4 mt-3 sm:mt-0">
            <li className="hover:text-blue-400 cursor-pointer">Git</li>
            <li className="hover:text-blue-400 cursor-pointer">LinkedIn</li>
            <li className="hover:text-blue-400 cursor-pointer">Instagram</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
