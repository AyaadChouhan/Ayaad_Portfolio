import React, { useRef, useEffect } from 'react';
import { SiWebmoney } from "react-icons/si";

import windowImg from '/window.jpg'
import { motion, useAnimate, useInView } from 'framer-motion'
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const Home = () => {

    const { setLinkActive } = useOutletContext()
    useEffect(() => {
        setLinkActive(null)
    }, [])


    const letters = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

    const headingRef = useRef(null);

    const [scope, animate] = useAnimate();

    const isInView = useInView(scope, { once: true });

    useEffect(() => {
        const heading = headingRef.current;

        if (heading && isInView) {
            heading.dataset.value = 'ASIF KHAN';

            let iteration = 0;
            const interval = setInterval(() => {
                heading.innerText = heading.dataset.value
                    .split("")
                    .map((letter, index) => {
                        if (index < Math.floor(iteration)) {
                            return heading.dataset.value[index];
                        }

                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");

                if (iteration >= heading.dataset.value.length) {
                    clearInterval(interval);
                    heading.innerText = heading.dataset.value; // Ensure the final text is clean
                }

                iteration += 1 / 3;
            }, 30);
        }
    }, [isInView]);

    const heroTextArr = ['Backend', 'Frontend', 'FullStack']

    const [heroText, setHeroText] = useState(null)

    useEffect(() => {
        const animateFilm = async () => {
            if (isInView) {
                await animate(".film1", {
                    transformOrigin: "left"
                })
                await animate(".film1", {
                    scaleX: 1,
                }, {
                    duration: .6, ease: "easeIn"
                })
                await animate(".film1", {
                    transformOrigin: "right"
                })
                await animate(".film1", {
                    scaleX: 0,
                }, { duration: .6, ease: "easeIn" })
            }
        }
        animateFilm()
        const animateHero = async () => {
            if (isInView) {
                await animate(".film2", {
                    transformOrigin: "left"
                })
                await animate(".film2", {
                    scaleX: 1,
                }, {
                    duration: .6, ease: "easeIn"
                })
                await animate(".film2", {
                    transformOrigin: "right"
                })
                await animate(".film2", {
                    scaleX: 0,
                }, { duration: .6, ease: "easeIn" })
            }
        }
        const animateHeroText = async () => {
            if (isInView) {
                await animate(".heroText", {
                    opacity: 0,
                }, { duration: 0 })
                await animate(".heroText", {
                    opacity: 1,
                }, { duration: 0.3, delay: 0.9 })
            }
        }
        animateHero()

        animateHeroText()
        animateHero()
        setHeroText(prev => {
            let i
            if (prev) {
                i = prev.index + 1
            } else {
                i = 0
            }
            let iToUse = (i % 3)
            console.log(iToUse, 'ran');
            return { text: heroTextArr[iToUse], index: i }
        })
        const interval = setInterval(() => {
            animateHeroText()
            animateHero()
            setHeroText(prev => {
                let i
                if (prev) {
                    i = prev.index + 1
                } else {
                    i = 1
                }
                let iToUse = (i % 3)
                return { text: heroTextArr[iToUse], index: i }
            })
        }, 3500)

        return () => clearInterval(interval)
    }, [isInView])


    return (
        <div id='home' className='h-screen sm:mb-5 min-h-[550px] flex justify-center items-center relative'>
            <div className='absolute w-[200px] sm:w-[300px] bg-[#534d4d90] z-0 sm:right-36 top-12'>
                <img className='block max-w-full' src={windowImg} alt="" />
            </div>
            <div ref={scope} className='w-full px-4 sm:w-[80%] lg:min-w-[650px] xl:min-w-[780] flex flex-col gap-3 z-10'>
                <h3 ref={headingRef} className='sm:text-xl lg:text-3xl w-fit backdrop-blur-sm roboto sm:tracking-[5px] xl:tracking-[8px] text-[#9FA5A5]' >BHUVANESH CHOUDHARY</h3>
                <div className='flex flex-col'>
                    <div className=' flex items-center gap-4'>
                        <div className='relative w-fit'>
                            <motion.div className='absolute inset-0 bg-[#00EEFF] film2 z-10'
                                initial={{ scaleX: 0, transformOrigin: 'left' }}
                            ></motion.div>
                            {heroText && <motion.h2 className='heroText text-[42px] sm:text-6xl lg:text-8xl raleway font-semibold text-white'
                            >
                                {heroText.text}
                            </motion.h2>}
                        </div>
                        <motion.span className=' w-[35%] h-[3px]  bg-[#1f6161]'>
                        </motion.span>
                    </div>
                    <div className='relative flex w-fit justify-start items-center'>
                        <motion.div className='absolute inset-0 bg-[#00EEFF] film1 z-10'
                            initial={{ scaleX: 0, transformOrigin: 'left' }}
                        ></motion.div>
                        <motion.div className='flex items-center gap-1 sm:gap-3 md:gap-4'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 0.3, delay: 0.9 } }}
                            viewport={{ once: true }}
                        >
                            <motion.span className='px-2 text-[#1f6161] cursor-pointer'
                                drag
                                dragElastic={0.8}
                                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                                initial={{ color: '#1f6161' }}
                                animate={{ color: ['#1f6161', '#00EEFF', '#1f6161'], y: [1, 2, 3, 2, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                <SiWebmoney color='inherit' className='text-xl sm:text-3xl lg:text-5xl' />
                            </motion.span>
                            <h2 className='text-[42px] sm:text-6xl lg:text-8xl raleway font-semibold text-white'>
                                Developer
                            </h2>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;
