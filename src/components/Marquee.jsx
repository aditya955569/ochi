import React from 'react'
import {motion} from "framer-motion"
function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 flex border-zinc-300 whitespace-nowrap  overflow-hidden my-10'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration:7 }} className='text-[24vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold tracking-tighter pr-20'>WE ARE OCHI </motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration:7 }} className='text-[24vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold tracking-tighter pr-20'>WE ARE OCHI</motion.h1>    
        </div>
    </div>
  )
}

export default Marquee