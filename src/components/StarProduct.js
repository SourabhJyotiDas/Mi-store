import React from 'react'


const StarProduct = ({ starProduct }) => {
    return (
        <div className="md:flex md:items-center md:justify-center lg:w-[80vw] lg:m-auto" id='discover'>
            <div className='md:w-[50%] lg:w-auto'>
                <a href={starProduct[0].url}>
                    <img className='md:h-[60vh] lg:h-auto' src={starProduct[0].image} alt="1st Product" />
                </a>
            </div>
            <div className='w-[90vw] m-auto md:flex md:flex-wrap md:w-[50%] lg:auto'>
                <a className='md:w-[50%] lg:w-[auto] xl:w-[50%]' href={starProduct[1].url}>
                    <img className='' src={starProduct[1].image} alt="1st Product" />
                </a>
                <a className='md:w-[50%] lg:w-[auto] xl:w-[50%]' href={starProduct[2].url}>
                    <img className='' src={starProduct[2].image} alt="1st Product" />
                </a>
                <a className='md:w-[100%] lg:w-[auto] xl:w-[100%]' href={starProduct[3].url}>
                    <img className='' src={starProduct[3].image} alt="1st Product" />
                </a>
            </div>
        </div>
    )
}

export default StarProduct
