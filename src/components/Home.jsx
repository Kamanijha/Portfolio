import React from 'react'
import pic from "../../public/k-logo.jpg"

import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { ReactTyped } from "react-typed";
function Home() {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-36 space-y-2 order-2 md:order-1'>
                        <span>Welcome to My Portfolio</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>keep </h1>
                            {/* <span className='text-[#57b9eb] font-bold '>learn , explore</span> */}
                            <ReactTyped
                                className='text-[#57b9eb] font-bold '
                                strings={["learn", "explore"]}
                                typeSpeed={80}
                                backSpeed={90}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>
                            I am Kamani , a web development enthusiast who loves creating interactive and visually appealing websites.
                            Currently, I am learning new technologies to enhance my skills in front-end and back-end development.
                        </p>
                        <br />
                        {/* social media */}
                        <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center'>
                            <div>
                                <h1>Available on</h1>
                                <ul className='flex space-x-5 cursor-pointer'>
                                    <li>
                                        <a href="https://www.linkedin.com/in/kamani-jha-942891300/" target='_blank'><IoLogoLinkedin className='text-2xl ' /></a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/Kamanijha/web-development" target='_blank'><FaGithub className='text-2xl' /></a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/KamaniJha" target='_blank'><FaSquareXTwitter className='text-2xl ' /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h1>currently learning skill</h1>
                                <div className='flex space-x-5 text-4xl'>
                                    <IoLogoJavascript className='text-xl md:text-3xl hover:scale-110 duration-200 text-yellow-500' />
                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 text-green-500' />
                                    <FaReact  className='text-xl md:text-3xl hover:scale-110 duration-200 text-blue-500' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 text-green-600' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:mt-20 md:ml-20  mt-8 order-1'>
                        <img className="md:w-[350px] md:h-[350px] rounded-full" src={pic} alt="Logo" />
                        {/* <img
                            className="md:w-[350px] md:h-[350px] rounded-full animate-spin-slow border-4 border-transparent"
                            src={pic}
                            alt="Logo"
                        /> */}

                    </div>
                </div>
            </div>


            
        </>
    )
}

export default Home
