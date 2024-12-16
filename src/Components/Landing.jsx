import React from 'react'
import About from './About/About'
import FadeInDiv from './FadeInDiv'
import Home from './home/Home'
import Projects from './Projects/Projects'
import { FaExternalLinkAlt } from "react-icons/fa";
import Skills from './Skills/Skills'

const Landing = () => {
    return (
        <div>
            <Home />
            <Projects />
            <Skills />
            <FadeInDiv
                element={<>

                    <button className='text-white mx-auto block mb-16 mt-[-40px] sm:mt-0  sm:text-xl lg:text-2xl bg-[#1F2937] hover:bg-gray-700 px-6 py-3 sm:px-10 sm:py-4 rounded-lg'>
                        <a href='https://github.com/asifkhan231' className='flex items-center gap-3'>
                            <span>
                                More Projects on Github
                            </span>
                            <FaExternalLinkAlt className='mt-[1px] sm:mt-0' />
                        </a>
                    </button>
                </>
                }
            />
            <About />
        </div>
    )
}

export default Landing