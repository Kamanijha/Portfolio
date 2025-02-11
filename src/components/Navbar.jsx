import React from 'react'
import pic from "../../public/k-logo.jpg"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-scroll'
function Navbar() {
    const [menu, setmenu] = useState(false)
    const navItem = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Projects"
        },
        {
            id: 4,
            text: "Contacts"
        },
    ]
    return (
        <>
            <div className="max-w-screen-2xl bg-[#131130] z-50 container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 right-0 left-0">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex space-x-2">
                        <img src={pic} className='h-12 w-12 rounded-full ' alt="" />

                        <h1 className='font-semibold text-[#FFFFFF] text-xl cursor-pointer'>web<span className='text-[#57b9eb] text-2xl'>developer</span></h1>
                    </div>
                    {/* dextop navbar */}
                    <div>
                        <ul className='hidden md:flex space-x-8 text-xl text-[#57b9eb] cursor-pointer '>
                            {
                                navItem.map(({ id, text }) => (
                                    <li
                                        className='hover:scale-105 duration-200'
                                        key={id}
                                    >
                                        <Link to={text}
                                            smooth={true}
                                            duration={500}
                                            offsets={-70}
                                            activeClass='active'
                                        >{text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="md:hidden" onClick={() => { setmenu(!menu) }}>{menu ? <IoCloseSharp size={25} className='text-white' /> : <AiOutlineMenu size={25} class="text-white" />}</div>
                    </div>
                </div>
                {/* mobile navbar */}
                {menu && (

                    <div className='bg-white'>
                        <ul className='md:hidden text-[#57b9eb] h-screen flex flex-col items-center justify-center space-y-3 cursor-pointer'>
                            {
                                navItem.map(({ id, text }) => (
                                    <li
                                        className='hover:scale-105 duration-200' key={id}
                                    >
                                        <Link onClick={() => { setmenu(!menu) }}
                                            to={text}
                                            smooth={true}
                                            duration={500}
                                            offsets={-70}
                                            activeClass='active'
                                        >{text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar
