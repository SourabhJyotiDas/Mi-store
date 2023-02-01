import React from 'react'

const Offer = ({ src, link, index }) => {
    return <a  href={link}> <img className='my-2 md:px-2 md:w-full lg:w-[25vw] ' src={src} alt={`${index} offer`} /></a>

}

export default Offer
