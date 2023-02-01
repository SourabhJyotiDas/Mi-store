import React from 'react'
import HotItemCard from "./HotItemCard.js"


const HotAccessories = ({ music, musicCover, smartDevice, smartDeviceCover, home, homeCover, lifeStyle, lifeStyleCover, mobileAccessories, mobileAccessoriesCover }) => {
    return (
        <div className="md:flex md:w-[80vw] md:m-auto lg:w-[90vw] lg:m-auto lg:my-10 lg:justify-center">

            <div className='md:w-[50vw] lg:w-[auto] '>
                <img className='w-full lg:w-full' src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="Cover" />
            </div>

            {/* -----------2nd */}
            <div className='flex flex-wrap items-center justify-evenly md:justify-around text-center md:w-[50%] lg:w-[70%] '>
                {music && music.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                ))}
                {smartDevice && smartDevice.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                ))}
                {home && home.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                ))}

                {lifeStyle && lifeStyle.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                ))}

                {mobileAccessories && mobileAccessories.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                ))}

                <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />

            </div>

        </div>
    )
}

export default HotAccessories
