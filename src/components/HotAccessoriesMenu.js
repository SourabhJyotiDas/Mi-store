import React from 'react'
import { Link } from "react-router-dom"

const HotAccessoriesMenu = ({ hotAccessoriesGifs }) => {
    return (
        <>
            <div className="hidden lg:flex lg:justify-center space-x-10 ">
                <Link className="text-black font-normal text-lg hover:no-underline hover:text-orange-500  " to="/musicAccessories">  Music Store</Link>
                <Link className="text-black font-normal text-lg hover:no-underline hover:text-orange-500  " to="/smartDeviceAccessories">Smart Devices</Link>
                <Link className="text-black font-normal text-lg hover:no-underline hover:text-orange-500  " to="/homeAccessories">Smart Home</Link>
                <Link className="text-black font-normal text-lg hover:no-underline hover:text-orange-500  " to="/lifestyleAccessories">Lifestyle</Link>
                <Link className="text-black font-normal text-lg hover:no-underline hover:text-orange-500  " to="/mobileAccessories">Mobile Accessories</Link>
            </div>

            <div className="flex text-xs bg-gray-300 shadow-md my-3 justify-evenly items-start text-center py-4 lg:hidden" id='categories'>
                <div className='   p-1 rounded-md mx-1 ' >
                    <Link style={{ textDecoration: 'none' }} className="HotAccessoriesLink text-black flex flex-col items-center justify-center" to="/musicAccessories">
                        <img className='h-[50px] ' src={hotAccessoriesGifs[3]} alt="" />
                        <div> Music Store</div>
                    </Link>
                </div>
                <div className='  p-1 rounded-md mx-1 ' >
                    <Link style={{ textDecoration: 'none' }} className="HotAccessoriesLink text-black flex flex-col items-center justify-center" to="/smartDeviceAccessories">
                        <img className='h-[50px]' src={hotAccessoriesGifs[4]} alt="" />
                         <div>Smart Devices</div>
                         </Link>
                </div>
                <div className='  p-1 rounded-md mx-1 ' >
                    <Link style={{ textDecoration: 'none' }} className="HotAccessoriesLink text-black flex flex-col items-center justify-center" to="/homeAccessories">
                        <img className='h-[50px]' src={hotAccessoriesGifs[5]} alt="" /> 
                       <div> Smart Home</div>
                        </Link>
                </div>
                <div className='  p-1 rounded-md mx-1 ' >
                    <Link style={{ textDecoration: 'none' }} className="HotAccessoriesLink text-black flex flex-col items-center justify-center" to="/lifestyleAccessories">
                        <img className='h-[50px]' src={hotAccessoriesGifs[2]} alt="" />
                         <div>Lifestyle</div>
                         </Link>
                </div>
                <div className='  p-1 rounded-md mx-1 w-[70px]' >
                    <Link style={{ textDecoration: 'none' }} className="HotAccessoriesLink text-black flex flex-col items-center justify-center " to="/mobileAccessories">
                        <img className='h-[50px] ' src={hotAccessoriesGifs[0]} alt="" />
                        <div> Mobile Accessories</div>
                         </Link>
                </div>

            </div>


        </>

    )
}

export default HotAccessoriesMenu
