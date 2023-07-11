import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

const Header = ({setIsOpen,isOpen}) => {

   

    return (
        <div className='h-16 w-max-[1440px] bg-white flex items-center justify-between container mx-auto px-0 lg:px-[60px] py-[10px] pl-[24px] pr-4 '>

            <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="" />

            <nav className='hidden lg:block'>
                <ul className='gap-10 flex items-center justify-end text-[#400E03] text-sm font-bold '>
                    <li><a className='hover:text-[#ED1C24] duration-300' href="#">SHOW ALL TYRES</a></li>
                    <li><a className='hover:text-[#ED1C24] duration-300' href="#">FIND A DEALER</a></li>
                    <li><a className='hover:text-[#ED1C24] duration-300' href="#">GUIDES & VIDEOS</a></li>
                    <li><a className='hover:text-[#ED1C24] duration-300' href="#">GO WITH</a></li>
                    <li><a className='hover:text-[#ED1C24] duration-300' href="#">SERVİCE & HELP</a></li>
                </ul>
            </nav>

            <nav className='block lg:hidden '>

                <button onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
                    {isOpen ? <RxCross1 size={22} /> : <GiHamburgerMenu size={22} />}
                </button>

            </nav>






        </div>
    )
}

export default Header