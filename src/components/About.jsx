import React from 'react'

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiCplusplus } from 'react-icons/si';

export default function About() {
    return (
        <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <h1 className='text-4xl font-bold text-center mb-10'>About </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* About Card */}
                <div className='p-6  shadow-lg rounded-2xl'>
                    <h2 className='text-2xl font-bold mb-4'>About Me</h2>
                    <p>
                        Hi, I’m <span className='font-semibold'>Kamani Jha</span>! I am currently focused on frontend development, but my ultimate goal is to become a skilled full-stack developer.
                        Coming from a non-IT background, I have always been curious and passionate about exploring new technologies, which has driven my transition into the tech field.
                        This curiosity fuels my continuous learning and growth as a developer.
                    </p>
                </div>

                {/* Education Card */}
                <div className='p-6  shadow-lg rounded-2xl'>
                    <h2 className='text-2xl font-bold mb-4'>Education</h2>
                    <p className='text-lg'>B.Sc in Zoology</p>
                </div>
            </div>

            {/* Skills Section */}
            <div className='mt-10'>
                <h2 className='text-3xl font-bold text-center mb-6'>Skills</h2>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6'>
                    <div className='flex flex-col items-center'>
                        <FaHtml5 className='text-4xl text-orange-600' />
                        <p className='mt-2 text-sm'>HTML</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaCss3Alt className='text-4xl text-blue-600' />
                        <p className='mt-2 text-sm'>CSS</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <SiTailwindcss className='text-4xl text-teal-500' />
                        <p className='mt-2 text-sm'>Tailwind</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaJs className='text-4xl text-yellow-500' />
                        <p className='mt-2 text-sm'>JavaScript</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaReact className='text-4xl text-blue-500' />
                        <p className='mt-2 text-sm'>React</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaNodeJs className='text-4xl text-green-600' />
                        <p className='mt-2 text-sm'>Node.js</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <SiMongodb className='text-4xl text-green-500' />
                        <p className='mt-2 text-sm'>MongoDB</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <SiCplusplus className='text-4xl text-blue-700' />
                        <p className='mt-2 text-sm'>C++</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaGitAlt className='text-4xl text-orange-600' />
                        <p className='mt-2 text-sm'>Git</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaGithub className='text-4xl text-gray-800' />
                        <p className='mt-2 text-sm'>GitHub</p>
                    </div>

                </div>
            </div>

            {/* Download CV Button */}
            {/* <div className='mt-10 text-center'>
                <button className='px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200'>
               Download CV
               </button>
            </div> */}
            <div className="mt-10 text-center">
                <a
                    href="/kamani.pdf" // Path to the CV file in the `public` folder
                    download="Kamani_Jha_CV.pdf" // Suggested file name when downloading
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
                >
                    Download CV
                </a>
            </div>

        </div>
    );
}

