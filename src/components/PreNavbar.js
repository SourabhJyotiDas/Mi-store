import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';



const PreNavbar = () => {
    return (
        <>
            <div className="md:py-3 md:px-3 md:text-sm bg-[#1d1c1c] text-gray-400 hidden md:flex md:items-center md:justify-between lg:px-20 ">
                <div className='md:space-x-1 lg:space-x-3'>
                    <a className='text-gray-400 hover:text-white hover:no-underline font-medium' href="https://www.mi.com/in/">MI INDIA kela</a> <span className='text-gray-400'>|</span>
                    <a className='text-gray-400 hover:text-white hover:no-underline font-medium' href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span className='text-gray-400'>|</span>
                    <a className='text-gray-400 hover:text-white hover:no-underline font-medium' href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span className='text-gray-400'>|</span>
                    <a className='text-gray-400 hover:text-white hover:no-underline font-medium' href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ﹀</a>
                </div>
                <div className='flex items-center md:space-x-2 lg:space-x-3'>
                    <a className='text-gray-400 hover:text-white hover:no-underline font-medium' href="https://store.mi.com/in/site/login">SIGN IN</a> <span className='text-gray-400'>|</span>
                    <a className='text-gray-400 hover:text-white hover:no-underline font-medium' href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span className='text-gray-400'>|</span>
                    <a className='flex text-gray-400 hover:text-white hover:no-underline font-medium items-center' href="https://store.mi.com/in/site/login"> <AiOutlineShoppingCart className='text-white md:text-xl'/> CART (0)</a>
                </div>
            </div>
        </>
    )
}

export default PreNavbar
