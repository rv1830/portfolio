import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/photo.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.25, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              animate="visible"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.25 }}
              className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Ravi Raj
            </motion.h1>
            <motion.span
              variants={container(0)}
              animate="visible"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -150 }}
              transition={{ duration: 1.5 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Software Developer 
            </motion.span>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 150 }}
              transition={{ duration: 1.5 }}
              variants={container(0)}
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <div className="flex space-x-4">
            <a
                href="mailto:raviraj.bvcoe@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
              <motion.button
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                className="px-6 py-2 font-medium text-white bg-blue-700 rounded hover:bg-blue-900"
              >
                Contact Me
              </motion.button>
              </a>
              <a
                href="https://drive.google.com/your-resume-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 100 }}
                  transition={{ duration: 1.5 }}
                  className="px-6 py-2 font-medium text-white bg-purple-700 rounded hover:bg-purple-900"
                >
                  Get Resume 
                </motion.button>
              </a>
            </div>
          </div>
        </div>
        {/* <div className=" my-24 mx-20 lg:w-1/3 lg:p-4  hover:bg-slate-50">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Kevin Rush"
            ></motion.img>
          </div>
        </div> */}

<div className="my-24 mx-20 lg:w-1/3 lg:p-4  ">
  <div className="flex justify-center ">
    <motion.img
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      src={profilePic}
      alt="Kevin Rush"
      className=" hover:shadow-md hover:shadow-slate-400 rounded-lg"
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default Hero;
