    import React, { useEffect, useState } from 'react'
    import { Outlet, useLocation, useNavigate } from 'react-router-dom'
    import { RiGithubFill } from "react-icons/ri";
    import { FaDiscord, FaInstagram } from "react-icons/fa";
    import { FaLinkedin } from "react-icons/fa";
    import { AnimatePresence, motion, useAnimate } from 'framer-motion'
    import NavList from './NavList';
    const Navbar = () => {
        const [isHovered, setHovered] = useState(null)
        const [scope, animate] = useAnimate()

        const [navShow, setNavShow] = useState(false)

        const [isHeightLessThan650, setIsHeightLessThan650] = useState(window.innerHeight < 650);

        const handleResize = () => {
            setIsHeightLessThan650(window.innerHeight < 650);
        };

        useEffect(() => {
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);


        useEffect(() => {
            const animateFilm = async () => {
                if (isHovered) {
                    await animate(".film", {
                        transformOrigin: "50% 0%"
                    }, { duration: 0 })
                    animate(".film", {
                        scale: 1,
                    }, {
                        duration: .5, delay: 0
                    })
                }
                if (isHovered == false) {
                    await animate(".film", {
                        transformOrigin: "50% 100%"
                    }, { duration: 0 })
                    animate(".film", {
                        scale: 0,
                    }, { duration: .5, delay: 0 })

                }
            }
            animateFilm()
        }, [isHovered])


        const navigate = useNavigate()
        const location = useLocation()
        const handleClick = () => {
            setNavShow(false)
            if (location.pathname != '/') {
                navigate('/')
            } else {
                const homeSection = document.getElementById('home');
                if (homeSection) {
                    homeSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };


        const [linkActive, setLinkActive] = useState(null)

        const links = [
            { title: 'Contact', url: '/contact' },
            { title: 'Details', url: '/details' },
            { title: 'About', url: '/#about' },
            { title: 'Skills', url: '#skills' },
            { title: 'Projects', url: '#projects' }
        ];

        const navVariants = {
            hidden: { y: '-100%', },
            visible: { y: '0%', },
        };





        let hambDisplay = isHeightLessThan650 ? 'md:block' : 'md:hidden'

        let hambClasses = `fixed top-4 right-4 z-50 block ${hambDisplay}`


        let display = !isHeightLessThan650 ? 'md:flex' : 'md:hidden'

        let classes = `${display} hidden items-center relative cursor-pointer w-[100px] h-[60px] overflow-hidden`


        let display2 = isHeightLessThan650 ? 'md:flex md:top-[-42px]' : 'md:hidden'
        let classes2 = `${display2} flex left-5 top-[-16px] justify-center relative cursor-pointer overflow-hidden`
        return (
            <>
                <div className='fixed top-7 md:top-14 md:left-7 z-50 mb-30'>
                    <motion.div className={classes}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        ref={scope}
                        onClick={handleClick}
                    >
                        <div className='absolute inset-0 bg-white z-0'></div>
                        <motion.div className='film absolute w-[100%] h-[100%] scale-0 bg-[#00EEFF] z-10'
                            initial={{ scale: 0 }}
                        ></motion.div>
                        <svg className="absolute left-[-12px] w-[120%] h-[120%] z-20" viewBox="0 0 100 60" preserveAspectRatio="none">
                            <defs>
                                <mask id="mask" x="0" y="0" width="100" height="60">
                                    <rect x="0" y="0" width="100" height="60" fill="#fff" />
                                    <text textAnchor="middle" x="50" y="45" dy="1" fontSize="55" className='comic' fontWeight={600}>A</text>
                                </mask>
                            </defs>
                            <rect x="0" y="0" width="100%" height="100%" mask="url(#mask)" fill="#050304" />
                        </svg>
                    </motion.div>
                    <div onClick={handleClick} className={classes2}>
                        <span className='comic block text-[55px] font-semibold text-white'>A</span>
                    </div>
                </div>
                <nav className='leftNav fixed hidden md:flex h-[100vh] w-[150px] z-20 left-0 top-0 justify-center items-center pt-12 pb-14'>
                    <div className='flex flex-col h-[100%] gap-3 justify-between items-center pt-[100px]'>

                        <div className='flex items-center justify-center'>
                            <ul className='writingMode rotate-180 flex items-center gap-3 font-semibold tracking-wide text-[#c4c0c0]'>
                                {links.map((link, index) => {
                                    return <NavList linkActive={linkActive} title={link.title} key={index} url={link.url} horizontal={false} />
                                })}
                            </ul>
                        </div>
                        <div className='mt-8'>
                            <ul className='flex flex-col items-center justify-center gap-6 '>
                                <motion.li
                                    initial={{ color: '#7e7979' }}
                                    whileHover={{ scale: 1.03, color: '#00EEFF', transition: { duration: .6 } }}
                                    className='text-[#7e7979]'
                                >
                                    <a href="https://www.instagram.com/_a.y.a.a.d_ch/">
                                        <FaInstagram color='inherit' size={24} />
                                    </a>
                                </motion.li>
                                <motion.li
                                    initial={{ color: '#7e7979' }}
                                    whileHover={{ scale: 1.03, color: '#00EEFF', transition: { duration: .6 } }}
                                    className='text-[#7e7979]'
                                >
                                    <a href="https://www.linkedin.com/in/ayaad-chouhan-0b8a0a248">
                                        <FaLinkedin color='inherit' size={24} />
                                    </a>
                                </motion.li>
                                <motion.li
                                    initial={{ color: '#7e7979' }}
                                    whileHover={{ scale: 1.03, color: '#00EEFF', transition: { duration: .6 } }}
                                    className='text-[#7e7979]'
                                >
                                    <a href="https://github.com/ayaadchouhan">
                                        <RiGithubFill color='inherit' size={24} />
                                    </a>
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={hambClasses}>
                    <div id="nav-icon1" className={`${navShow ? 'open' : ''}`} onClick={() => { setNavShow(!navShow) }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <AnimatePresence>
                    {navShow && (
                        <motion.nav
                            className={`fixed md:${isHeightLessThan650 ? 'flex' : 'hidden'} upperNav flex flex-col justify-between left-0 top-0 w-screen h-screen px-4 py-6 z-30 backdrop-blur-lg`}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={navVariants}
                            transition={{ duration: 0.5 }}
                        >
                            <div></div>
                            <div className='flex justify-between self-center'>
                                <ul className='flex flex-col gap-10 items-center font-semibold text-xl tracking-widest text-[#c4c0c0]'>
                                    {links.reverse().map((link, index) => (
                                        <NavList setNavShow={setNavShow} title={link.title} key={index} url={link.url} horizontal={true} />
                                    ))}
                                </ul>
                            </div>
                            <div className='flex justify-between'>
                                <ul className='flex gap-3'>
                                    <motion.li
                                        initial={{ color: '#7e7979' }}
                                        whileHover={{ scale: 1.03, color: '#00EEFF', transition: { duration: .6 } }}
                                        className='text-[#7e7979]'
                                    >
                                        <a href="https://discordapp.com/users/616929852704030720">
                                            <FaDiscord color='inherit' size={24} />
                                        </a>
                                    </motion.li>
                                    <motion.li
                                        initial={{ color: '#7e7979' }}
                                        whileHover={{ scale: 1.03, color: '#00EEFF', transition: { duration: .6 } }}
                                        className='text-[#7e7979]'
                                    >
                                        <a href="https://www.linkedin.com/in/bhuvanexh/">
                                            <FaLinkedin color='inherit' size={24} />
                                        </a>
                                    </motion.li>
                                    <motion.li
                                        initial={{ color: '#7e7979' }}
                                        whileHover={{ scale: 1.03, color: '#00EEFF', transition: { duration: .6 } }}
                                        className='text-[#7e7979]'
                                    >
                                        <a href="https://github.com/bhuvanexh">
                                            <RiGithubFill color='inherit' size={24} />
                                        </a>
                                    </motion.li>
                                </ul>
                                <div>M</div>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
                <Outlet context={{ setLinkActive, linkActive }} />
            </>
        )
    }

    export default Navbar