

import React from 'react';
import logo from '../assets/logorv.png';
import { FaLinkedin, FaGithub,FaEnvelope  } from 'react-icons/fa';
import {motion} from"framer-motion"


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 text-white text-1xl">
      <div className="flex flex-grow items-center ">
        <motion.img whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-50}}
        transition={{duration:1.75}} 
        className="h-12 w-auto" src={logo} alt="logo" />
      </div>
      <motion.div whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:2}}
        
        className="mt-4 flex h-screen max-h-0 w-full flex-col items-start  opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100 " id="navbar-default">
        <ul className="flex flex-col items-start space-y-2 md:space-y-0 md:flex-row md:space-x-1 ">
          <li>
            <a 
            className="block px-4 py-2 no-underline outline-none hover:no-underline " href="#home">
              <div className=" bg-clip-text text-1.5xl text-white transition-colors duration-300 hover:text-purple-500">Home</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#about">
              <div className="bg-clip-text text-1.5xl text-white transition-colors duration-300 hover:text-purple-500">About</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#technologies">
              <div className="bg-clip-text text-1.5xl text-white transition-colors duration-300 hover:text-purple-500">Skills</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#experience">
              <div className="bg-clip-text text-1.5xl text-white transition-colors duration-300 hover:text-purple-500">Experience</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline " href="#projects">
              <div className="bg-clip-text text-1.5xl  text-white transition-colors duration-300 hover:text-purple-500">Projects</div>
            </a>
          </li>
        </ul>
      </motion.div>

      <motion.div 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:50}}
      transition={{duration:1.5}}
      className="flex items-center gap-5 text-1.75xl">
      <a href="mailto:raviraj.bvcoe@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/ravi-raj-596135216/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/rv1830" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        {/* <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        */}
      </motion.div>
    </nav>
  );
}

export default Navbar;


