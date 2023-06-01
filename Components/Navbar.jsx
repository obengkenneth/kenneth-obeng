'use client';

import React, { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
        <nav className='sticky flex justify-between items-center mb-0 py-3 px-4 bg-black  shadow-lg shadow-cyan-500 ' >
            <h1 className='text-3xl text-white'>Kenneth</h1>
            <button className='bg-transparent md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className='block bg-white w-[20px] h-[2px] mb-1'></span>
                <span className='block bg-white w-[20px] h-[2px] mb-1'></span>
                <span className='block bg-white w-[20px] h-[2px] mb-1'></span>
            </button>
            <ul className={`fixed top-0 left-0 text-lg pt-4 pl-10 w-[70%] h-full bg-[#1D1D1D] -translate-x-full transition ease-in-out duration-500 ${isMenuOpen ? ' translate-x-0' : ''}  md:static md:justify-end md:flex md:w-auto  md:text-xl md:bg-black `}>
                
                <li className='mb-3 md:mx-2'><h1 className='mb-10 text-3xl text-white md:hidden'>Kenneth</h1>Home</li>
                <li className='mb-3 md:mx-2'>About</li>
                <li className='mb-3 md:mx-2'>Skills</li>
                <li className='mb-3 md:mx-2'>Contact</li>
            </ul>
        </nav>
  )
}
