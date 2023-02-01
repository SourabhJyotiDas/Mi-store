import React from 'react'

const ProductReviewCard = ({image,index,price,name,review}) => {
    return (
        <div className=" my-2 flex flex-col justify-center items-center lg:mx-2">
            <img src={image} alt={`${index} review`} />
            <h5>{review}</h5>
            <span>{name}</span> 
            <span className='mx-2 text-blue-500'>{price}</span> 
        </div>
    )
}

export default ProductReviewCard
