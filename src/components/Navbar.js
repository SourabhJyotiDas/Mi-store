import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>

const Navbar = () => {

    const toggleMenu = () => {
        document.getElementById("menuList").classList.toggle("hidden")
        document.getElementById("close").classList.toggle("hidden")
        document.getElementById("mobileMenuList").classList.toggle("hidden")
    }

    return (
        <>
            <div className="hidden md:text-xs md:flex md:items-center md:p-3 md:justify-between md:overflow-x-auto md:w-[auto]">
                <Link to="/"><img className='rounded-md h-[30px]' id="logoImage" src="./favicon.png" alt="Not" /></Link>
                <a className="text-black font-normal lg:text-lg hover:text-orange-500 hover:no-underline" href="/miphones">Mi Phones</a>
                <a className="text-black font-normal lg:text-lg hover:text-orange-500 hover:no-underline" href="/redmiphones">Redmi Phones</a>
                <a className="text-black font-normal lg:text-lg hover:text-orange-500 hover:no-underline " href="/tv">TV</a>
                <a className="text-black font-normal lg:text-lg hover:text-orange-500 hover:no-underline " href="/laptops">Laptops</a>
                <a className="text-black font-normal lg:text-lg hover:text-orange-500 hover:no-underline " href="/lifestyle">Fitness & Lifestyle</a>
                <a className="text-black font-normal lg:text-lg hover:text-orange-500 hover:no-underline " href="/home">Home</a>
                <a className="text-black font-normal lg:text-lg hover:text-orange-500 hover:no-underline " href="/audio">Radio</a>
                <a className="text-black font-normal lg:text-lg hover:text-orange-500 hover:no-underline " href="/accessories">Accessories</a>

                <div className="searchbox flex items-center justify-start ">
                    <input className='outline-none border-b-2 border-gray-300' type="text" name="search" placeholder="Search Products" />
                    {searchIcon}
                </div>
            </div>

            <div className='sticky top-0 z-30 bg-white '>

                <div className='flex justify-between p-3 md:hidden '>

                    <div className='flex items-start space-x-2'>
                        <AiOutlineMenu className='text-2xl mt-1 ' id='menuList' onClick={toggleMenu} />
                        <AiOutlineClose className='text-xl mt-1 hidden ' id='close' onClick={toggleMenu} />
                        <img className='h-[30px] rounded-lg' id="logoImage" src="./favicon.png" alt="Not" />
                        <a href="https://www.mi.com/in/?utm_source=google&utm_medium=cpc&utm_campaign=[A_BR[SEM_B[MiBRAND_S]20190102]&gclid=Cj0KCQiAj4ecBhD3ARIsAM4Q_jFc6YeeOF9tGghMNk9A5l9l3rk6EJDvTEv-xgMbL7RNa5ZdN2R1eWgaAgw3EALw_wcB" target="_blank" rel="noopener noreferrer">
                            <p className='text-black no-underline flex items-center'>Mi India</p>
                        </a>
                    </div>
                    <div className='flex items-start space-x-2'>
                        <FiSearch className='text-2xl' />
                        <AiOutlineShoppingCart className='text-2xl' />
                    </div>

                </div>

                <div className='hidden' id='mobileMenuList'>
                    <div className="z-30 bg-white flex flex-col items-start justify-center space-y-5 w-full h-full px-5" >
                        <a className="text-black hover:text-orange-500 hover:no-underline" href="/miphones">Mi Phones</a>
                        <a className="text-black hover:text-orange-500 hover:no-underline" href="/redmiphones">Redmi Phones</a>
                        <a className="text-black hover:text-orange-500 hover:no-underline " href="/tv">TV</a>
                        <a className="text-black hover:text-orange-500 hover:no-underline " href="/laptops">Laptops</a>
                        <a className="text-black hover:text-orange-500 hover:no-underline " href="/lifestyle">Fitness & Lifestyle</a>
                        <a className="text-black hover:text-orange-500 hover:no-underline " href="/home">Home</a>
                        <a className="text-black hover:text-orange-500 hover:no-underline " href="/audio">Radio</a>
                        <a className="text-black hover:text-orange-500 hover:no-underline " href="/accessories">Accessories</a>

                        <div className="searchbox flex items-center justify-start ">
                            <input className='outline-none border-b-2 border-gray-300' type="text" name="search" placeholder="Search Products" />
                            {searchIcon}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
