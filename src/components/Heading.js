import React from 'react';

const Heading = ({ text }) => {
    return (
        <div className="heading flex items-center justify-center my-5 md:text-2xl lg:text-4xl md:font-extralight" >
            <div className='h-[1px] w-[20%] bg-gray-500'></div>
                <p className='m-2'>{text}</p>
            <div className=' h-[1px] w-[20%] bg-gray-500'></div>
        </div>
    )
}

export default Heading
