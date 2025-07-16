/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { FaFileDownload } from "react-icons/fa";
import { motion } from 'framer-motion'
import { useOutletContext } from 'react-router-dom';
import resume from '/Ayaad_Resume.pdf'
import FadeInDiv from '../FadeInDiv';
const Details = () => {
    const { setLinkActive } = useOutletContext()
    useEffect(() => {
        setLinkActive('Details')
    }, [])



    return (
        <div className='min-h-screen px-4 sm:px-6 pt-32 sm:pt-24 pb-24'>
            <div className='flex flex-col mx-auto w-fit gap-5'>
                <FadeInDiv
                    element={
                        <h2 className='text-xl sm:text-3xl lg:text-5xl text-white'>Wanna know more about me ?</h2>
                    }
                />
                <div className='flex w-full flex-col justify-center self-end pb-[4px]'>
                    <motion.span className='w-full h-[3px] bg-[#00EEFF]'
                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                        whileInView={{ scaleX: 1, transition: { duration: .75, delay: .8, ease: 'easeInOut' } }}
                        viewport={{ once: true }}
                    ></motion.span>
                    <motion.span className='w-[84px] h-[10px] bg-[#00EEFF] ml-[1px] clipPath'
                        initial={{ scaleX: 0, transformOrigin: 'left', opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1, transition: { duration: .75, delay: .55, ease: 'easeInOut' } }}
                        viewport={{ once: true }}
                    ></motion.span>
                </div>
                <div className='flex flex-col md:flex-row gap-20 md:gap-8 lg:gap-16 items-center py-10'>
                    <FadeInDiv
                        element={
                            <>
                                <h3 className='text-slate-400 mb-1'>Download</h3>
                                <span className='text-[#00EEFF] cursor-pointer text-xl lg:text-2xl'>
                                    <a className='flex items-center gap-2' href={resume} download="Ayaad_Resume.pdf">
                                        {`> My Resume`} <FaFileDownload />
                                    </a>
                                </span>
                            </>
                        }
                    />
                    <FadeInDiv
                        classes={'flex flex-col gap-5'}
                        element={
                            <>
                                <p className='text-slate-400 text-center sm:text-left'>Or "maybe" watch it in vid format if ya despise reading</p>
                                <div className='sm:h-[200px] lg:w-[450px] lg:h-[250px]'>
                                    <iframe
                                        className='video w-full h-full'
                                        title='Youtube player'
                                        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                                        src={`https://www.youtube.com/embed/9-MypITVvJU?autoplay=0`}
                                    />
                                </div>
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Details