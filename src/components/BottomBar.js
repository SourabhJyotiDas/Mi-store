import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { SiXiaomi } from 'react-icons/si';
import { RiCompassDiscoverLine } from 'react-icons/ri';
import { VscAccount } from 'react-icons/vsc';

export default function BottomBar() {
    return (
        <div>
            <div className='flex items-center justify-around fixed -bottom-2 w-full  border border-black z-20 bg-white md:hidden'>
                <div className='flex flex-col items-center mt-2'>
                    <AiOutlineHome className='text-2xl  text-black  hover:text-[#ff4500] ease-in-out duration-300' />
                    <p className='text-xs'><a href="#home" style={{textDecoration: 'none'}}>Home</a></p>
                </div>
                <div className='flex flex-col  items-center mt-2'>

                    <BiCategory className='text-2xl text-black  hover:text-[#ff4500] ease-in-out duration-300' />
                    <p className='text-xs '><a href="#categories" style={{textDecoration: 'none'}}> <span className='text-black'>Categoeies</span> </a> </p>
                </div>
                <div className='mb-3 '>
                 <a href="#home" style={{textDecoration: 'none'}}>
                    <SiXiaomi className='text-3xl text-[#ff4500]   hover:text-[#ff4500] ease-in-out duration-300' />
                 </a>

                </div>
                <div className='flex flex-col  items-center mt-2'>

                    <RiCompassDiscoverLine className='text-2xl  text-black hover:text-[#ff4500] ease-in-out duration-300' />
                    <p className='text-xs '><a href="#discover" style={{textDecoration: 'none'}}> <span className='text-black'>Discover</span> </a> </p>

                </div>
                <div className='flex flex-col  items-center mt-2'>

                    <VscAccount className='text-2xl text-black  hover:text-[#ff4500] ease-in-out duration-300' />
                    <p className='text-xs '><a href="#home" style={{textDecoration: 'none'}}> <span className='text-black'>Account</span> </a> </p>
                </div>

            </div>
        </div>
    )
}
