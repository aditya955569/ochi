import React from 'react'

function About() {
    return (
        <div  className='py-20 p-20 rounded-tl-3xl rounded-tr-3xl w-full bg-[#CDEA68] text-black'>
            <h1 className='font-["Founders_Grotesk_X-Condensed"] text-[4vw] leading-[4.5vw] tracking-tight'>
                Ochi is a strategic partner for fast-growing tech businesses
                that need to raise funds, sell products,
                explain complex ideas, and hire great people.
            </h1>
            <div className='flex gap-5 w-full border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
                <div className='w-1/2'>
                    <h1 className='text-7xl'>Our Approach :</h1>
                    <button className='px-10 flex gap-10 items-center py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>    
                </div>
                <div className='w-1/2 h-[70vh] rounded-3xl  '>
                    <img src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg'></img>
                </div>
            </div>
        </div>
    )
}

export default About