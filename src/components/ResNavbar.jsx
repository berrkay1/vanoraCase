import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';

const ResNavbar = () => {
    return (
       
                <nav className='h-full w-full absolute top-[64px] left-0 z-50 bg-[#400E03] ' >
                    <ul className='w-full h-full flex items-start flex-col  text-white text-sm font-bold '>
                        <li className='border-b-2 py-[27px] px-6 border-[#525252] text-white flex items-center justify-between w-full' >
                            <a href="#">SHOW ALL TYRES</a>
                            <AiOutlineRight size={28} />
                        </li>
                        <li className='border-b-2 py-[27px] px-6 border-[#525252] text-white flex items-center justify-between w-full' >
                            <a href="#">FIND A DEALER</a>
                            <AiOutlineRight size={28} />
                        </li>
                        <li className='border-b-2 py-[27px] px-6 border-[#525252] text-white flex items-center justify-between w-full' >
                            <a href="#">GUIDES & VIDEOS</a>
                            <AiOutlineRight size={28} />
                        </li>
                        <li className='border-b-2 py-[27px] px-6 border-[#525252] text-white flex items-center justify-between w-full' >
                            <a href="#">GO WITH</a>
                            <AiOutlineRight size={28} />
                        </li>
                        <li className='border-b-2 py-[27px] px-6 border-[#525252] text-white flex items-center justify-between w-full' >
                            <a href="#">SERVİCE & HELP</a>
                            <AiOutlineRight size={28} />
                        </li>
                    </ul>
                </nav>

        
    )
}

export default ResNavbar