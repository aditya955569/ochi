import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full overflow-hidden h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-48 px-20'>
            {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((item,index)=>{
                return <div className='masker '>
                 <div className='w-fit flex items-center'>
                  {index==1&&(<motion.div initial={{width:0}}  animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}}><img className='w-[9vw] h-[5vw] rounded-md' src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg'></img></motion.div>) } 
                  <h1 className='text-[7.5vw] font-["Founders_Grotesk_X-Condensed"] leading-[6.5vw] tracking-tighter font-medium'>{item}</h1>
                </div>
            </div>
            })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center px-20 py-10'>
           {["For public and private companies","From the first pitch to IPO"].map((item,index)=>
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>
           )}
           <div className='start flex items-center gap-5'>
                <div className='px-4 py-2 border-[1px] font-light text-sm border-zinc-500 rounded-full uppercase'>Start a new project</div>
                <div className='w-10 h-10 rounded-full border-[1px] flex items-center  border-zinc-500 justify-center'>
                   <span className='rotate-45'> <FaArrowUpLong/> </span>
                </div>
           </div> 
        </div>
            
    </div>
  )
}

export default LandingPage