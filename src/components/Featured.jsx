import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {
    const [isHovering, setHovering] = useState(false);
    const [isHovering2, setHovering2] = useState(false);
    const handleHover = () => {

    }
    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-8xl'>Featured Projects</h1>
            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-10 mt-10'>
                    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className='cardcontainer w-1/2 h-[75vh] relative'>
                        <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                            {"FYDE".split("").map((item, index) => (
                                <motion.span className='inline-block' initial={{ y: "100%" }} animate={isHovering ? { y: "0" } : { y: "100%" }} transition={{ease:[0.22,1,0.36,1],delay:index*.06}}>
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden bg-green-600'>
                            <img className='w-full h-full bg-xover ' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'></img>
                        </div>
                    </div>
                    <div onMouseEnter={() => setHovering2(true)} onMouseLeave={() => setHovering2(false)} className='cardcontainer w-1/2 h-[75vh] relative'>
                        <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                            {"VISE".split("").map((item, index) => (
                                <motion.span className='inline-block' initial={{ y: "100%" }} animate={isHovering2 ? { y: "0" } : { y: "100%" }} transition={{ease:[0.22,1,0.36,1],delay:index*.06}}>{item}</motion.span>
                            ))}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden  bg-green-600'>
                            <img className='w-full h-full bg-xover ' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured