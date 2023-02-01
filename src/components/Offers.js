import React from 'react'
import Offer from "./Offer.js"


const Offers = ({offer}) => {
    return (
        <div className="md:m-auto md:w-[100vw] md:flex lg:flex lg:justify-center lg:items-center"> 
        {offer.map((item,index)=>(
        <Offer key={item.image} index={index} src={item.image} link={item.url}  />
        ))}
    </div>
    )
}

export default Offers
