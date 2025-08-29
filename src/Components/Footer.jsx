import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-2 md:md:py-4 mt-2">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Left text */}
        <span className="text-sm sm:text-base">
          Made by <span className="font-bold">Deepak Chauhan</span>
        </span>

        {/* Social Links */}
        <nav className='flex  '>
          <ul className="flex gap-4 mt-3 sm:mt-0 ">

            <li className=" cursor-pointer">
              <a className='!no-underline' href="https://github.com/DeepakChauhan33">
                <img 
                className='h-8 w-auto object-contain'
                src="https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png" alt="GitHub" />
              </a>
            </li>

            <li className=" cursor-pointer">
              <a className='!no-underline' href="https://www.linkedin.com/in/deepak-chauhan-979a2635a/">
                <img 
                className='h-8 w-auto object-contain'
                src="https://cdn.iconscout.com/icon/free/png-256/free-linkedin-circle-logo-icon-svg-png-download-1583140.png" alt="Linkedin" />
              </a>
            </li>

            <li className=" cursor-pointer">
              <a className='!no-underline' href="mailto:deep651965@gmail.com?body=Hi Deepak,  
                                                  I just visited your portfolio and ......">
                <img 
                className='h-8 w-auto object-contain rounded-full'
                src="https://i.pinimg.com/736x/0f/cf/54/0fcf541cbe9e8a08469b9b14a1367e53.jpg" alt="GitHub" />
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
