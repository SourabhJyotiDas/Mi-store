import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


const Banner = ({ banner, bannerMobile }) => {
    return (
        <>
            <Carousel fade className='hidden md:block' >
                {banner.end.map((item, index) => (

                    <Carousel.Item key={index} id="banner" interval={1000} keyboard={true}>
                        <img
                            className="d-block w-100 md:h-[40vh] lg:h-auto"
                            id="bannerImage"
                            src={item.image}
                            alt={`${index} banner`}
                        />
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.source}</p>
                            <u>Read more</u>
                        </Carousel.Caption>
                    </Carousel.Item>

                ))}
            </Carousel>


            <Carousel fade className='-mt-10 md:hidden'>
                {bannerMobile.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-[100vw] "
                            src={item}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

        </>
    )
}

export default Banner
