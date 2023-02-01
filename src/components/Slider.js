import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


const Slider = ({ start, bannerMobile }) => {
  console.log(bannerMobile);
  return (
    <>
      <Carousel fade className=' md:hidden' id='home'>
        {bannerMobile.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-[100vw] md:h-[70vh]"
              src={item}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <Carousel fade className=' hidden md:block'>
        {start.map((item, index) => (
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

export default Slider
