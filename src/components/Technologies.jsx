import { RiReactjsLine } from "react-icons/ri"

import {animate, motion} from"framer-motion";
import { SiBootstrap, SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiPowerbi, SiQlik, SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaSquareLastfm } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
    transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse",
    },
    },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        
        className="my-20 text-center text-4xl ">Technologies</motion.h1>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}}  className="flex flex-wrap items-center justify-center gap-4">

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-cyan-500 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-green-500 p-4">
      <SiMongodb className="text-7xl text-green-500" />
    </motion.div>
            <motion.div 
            variants={iconVariants(1.50)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-blue-500 p-4">
                <FaNodeJs className="text-7xl text-blue-400"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-lime-400 p-4">
                <SiExpress className="text-7xl text-lime-300"/>
            </motion.div>

            <motion.div
            variants={iconVariants(1.25)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-blue-300 p-4">
                <SiTailwindcss className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(1.75)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-purple-500 p-4">
                <SiBootstrap className="text-7xl text-purple-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.25)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-orange-500 p-4">
                <SiMysql className="text-7xl text-orange-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(1.50)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-red-500 p-4">
                <SiHtml5 className="text-7xl text-red-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(1.25)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-sky-400 p-4">
                <SiCss3 className="text-7xl text-sky-300"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-amber-400 p-4">
                <SiJavascript className="text-7xl text-amber-300"/>
            </motion.div>
            
           
           


        </motion.div>
      
    </div>
  )
}

export default Technologies
