import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen  items-center px-32 flex gap-5'>
            <div className='cardcontainer h-[50vh] w-1/2'>
                <div className='relative flex items-center justify-center card rounded-xl w-full h-full bg-[#004D43]'>
                    <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'>
                    </img>
                    <button className='absolute px-3  py-1 border-2 border-[#CDEA68] text-[#CDEA68] left-10 bottom-10 rounded-full'>2019</button>
                </div>
            </div>
            <div className=' cardcontainer h-[50vh] w-1/2 flex gap-5'>
                <div className='relative flex items-center justify-center card w-1/2 rounded-xl h-full  bg-[#102d29]'>
                    <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'>
                    </img>
                    <button className='absolute px-3 py-1 border-2 left-5 bottom-10 rounded-full uppercase'>Rating 5.0 on clutch</button>
                </div>
                <div className='relative flex items-center justify-center card w-1/2 h-full  bg-[#102d29]'>
                    <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'>
                    </img>
                    <button className='absolute px-3 py-1 border-2 left-5 bottom-10 rounded-full uppercase'>Business Bootcamp Alumni</button>
                </div>
            </div>
        </div>
    )
}

export default Cards