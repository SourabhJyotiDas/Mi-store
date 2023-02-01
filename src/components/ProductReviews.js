import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"

const ProductReviews = ({ productReviews }) => {
    return (
        <div className=" text-center lg:w-[90vw] m-auto lg:flex lg:justify-center">

            {productReviews.map((item, index) => (

                <ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image} />

            ))}

        </div>
    )
}

export default ProductReviews
