import React from 'react'


const NavCard = ({ name, price, image, index }) => {
    return (
        <div className="border border-black my-3 bg-white shadow-md rounded-md flex flex-col justify-center w-[45%] md:w-[30%] m-2 " >
            <img src={image} alt={`${index} phone`} />
            <p   className='-mb-1'>{name}</p>
            <span>{price}</span>
        </div>
    )
}

export default NavCard
