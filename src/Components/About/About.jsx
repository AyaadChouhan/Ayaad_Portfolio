import { useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { Navigate, useNavigate, useOutletContext } from 'react-router-dom'
import truman from '/projects.webp'
import FadeInDiv from '../FadeInDiv'
import { IoMdSend } from "react-icons/io";

const About = () => {
    const { setLinkActive, linkActive } = useOutletContext()

    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '-180px 0px -180px 0px' })
    useEffect(() => {
        if (isInView) {
            setLinkActive('About')
        } else {
            setLinkActive(curr => {
                if (curr == 'About') {
                    return null
                }
                else {
                    return curr
                }
            })
        }

    }, [isInView, linkActive])

    const isInView2 = useInView(ref, { once: true })

    const letters = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

    const headingRef = useRef(null);

    useEffect(() => {
        const heading = headingRef.current;
        if (heading && isInView2) {
            heading.dataset.value = 'Hey there';

            let iteration = 0;
            const interval = setInterval(() => {
                heading.innerText = heading.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return heading.dataset.value[index];
                        }

                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");

                if (iteration >= heading.dataset.value.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        }
    }, [letters, isInView2]);


    const navigate = useNavigate()


    return (
        <div ref={ref} id='about' className='min-h-screen flex px-2 sm:px-6 xl:px-12 pt-20 pb-32 justify-center relative'>
            <div className='max-w-[1000px] items-center flex flex-col lg:flex-row gap-10'>
                <div className=' w-[95%] md:w-[80%] lg:self-start lg:w-[50%] flex flex-col gap-3 sm:gap-5'>
                    <FadeInDiv
                        element={
                            <h4 ref={headingRef} className='text-2xl sm:text-3xl font-semibold text-white'>Hey there</h4>
                        }
                    />
                    <FadeInDiv
                        element={
                            <p className='text-lg sm:text-xl text-[#CFCFCF]'>
                                I’m Asif Khan, Software Engineer from Bikaner, Rajasthan. I have over two years of experience building web applications that are both scalable and user-friendly. I completed my B.Tech in Computer Science fromUniversity College of Engineering and Technology ,Bikaner. I work with technologies like React.js, Node.js, MongoDB, and PostgreSQL, and I enjoy creating seamless frontends and efficient backends.
                            </p>
                        }
                        delay={.4}
                    />
                    <FadeInDiv
                        element={
                            <p className='text-lg sm:text-xl text-[#CFCFCF]'>
                                In my spare time, I enjoy watching movies, exploring new TV shows, and diving into different corners of the internet. I’ve always infused a personal touch of my hobbies into most of my projects and I’m always keen on discovering new projects or ideas, so feel free to get in touch!
                            </p>
                        }
                        delay={.4}
                    />
                    <div className='cursor-pointer w-fit' onClick={() => navigate('/contact')}>
                        <FadeInDiv
                            classes={'flex items-center gap-2'}
                            element={
                                <>
                                    <IoMdSend color='#00EEFF' size={25} />
                                    <span className='sm:text-lg raleway font-semibold text-[#00EEFF]'>
                                        Send me a message
                                    </span>
                                </>
                            }
                            delay={.5}
                        />
                    </div>
                </div>
                <div className='w-[70%] md:w-[80%] lg:w-[40%] pb-10 lg:pt-44'>
                    <FadeInDiv
                        element={
                            <div className='relative'>
                                {/* Overlay effect container */}
                                <div className='absolute inset-0 bg-black opacity-80 transition-opacity duration-300 pd-25 hover:opacity-20' ></div>
                                <img className='block w-full h-full object-cover' src={truman} alt="" />
                            </div>
                        }
                        delay={0.90}
                    />
                </div>
            </div>
        </div>
    )
}

export default About