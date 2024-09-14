"use client";
import React, { useState } from 'react'
import { Nunito } from 'next/font/google'
import { FadeInWhenVisible } from './FadeInWhenVisible';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['200', '300', '400', '600', '700', '800', '900'], // Choose available weights
});

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    return (
            <div className='z-50 fixed w-full'>
                <div className={` ${nunito.className} px-8 py-4 flex items-center justify-between text-white w-full bg-opacity-50 backdrop-blur-md`}>
                    <FadeInWhenVisible>
                        <div className=' text-center'>
                            <h1 className=' text-2xl font-bold'>SUGMA</h1>
                            <h3 className=' text-sm uppercase '>Airways</h3>
                        </div>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible>
                        <div className=' hidden lg:block'>
                            <ul className='flex items-center space-x-4'>
                                <li className=' uppercase text-sm hover:text-gray-400 duration-200'><a href='#home'>Home</a></li>
                                <li className=' uppercase text-sm hover:text-gray-400 duration-200'><a href='#about'>About</a></li>
                                <li className=' uppercase text-sm hover:text-gray-400 duration-200'><a href='#tickets'>Tikects</a></li>
                                <li className=' uppercase text-sm hover:text-gray-400 duration-200'><a href='#contact'>Contact</a></li>
                            </ul>
                        </div>
                    </FadeInWhenVisible>
                    <div onClick={() => setNavbar(!navbar)} className=' md:hidden'>
                        {
                            navbar ? (<CloseOutlinedIcon className=' cursor-pointer' />) : (<MenuOutlinedIcon className=' cursor-pointer' />)
                        }
                    </div>
                </div>

                    {
                        navbar && (
                            <div className=' text-white'>
                                <ul className='flex items-center space-x-4 w-fit mx-auto'>
                                <li className=' uppercase text-sm hover:text-gray-400 duration-200'><a href='#home'>Home</a></li>
                                <li className=' uppercase text-sm hover:text-gray-400 duration-200'><a href='#about'>About</a></li>
                                <li className=' uppercase text-sm hover:text-gray-400 duration-200'><a href='#tickets'>Tikects</a></li>
                                <li className=' uppercase text-sm hover:text-gray-400 duration-200'><a href='#contact'>Contact</a></li>
                            </ul>
                            </div>
                        )
                    }

            </div>
    )
}

export default Navbar