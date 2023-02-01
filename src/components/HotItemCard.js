import React from 'react'

const HotItemCard = ({image,index,name,price}) => {
    return (
        <div className="HotItemCard flex flex-col items-center w-[30%] m-[0.7vmax] cursor-pointer">
            <img className='w-[70%]' src={image} alt={`${index} product`} />
            <p className='text-gray-500'>{name}</p>
            <span className='text-orange-500 -mt-1'>{price}</span>
        </div>
    )
}

export default HotItemCard
