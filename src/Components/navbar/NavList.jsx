import React, { useEffect, useState } from 'react'
import { motion, useAnimate } from "framer-motion"
import { useLocation, useNavigate } from 'react-router-dom'
const NavList = ({ linkActive, setNavShow, url, title, horizontal }) => {
    const [isHovered, setHovered] = useState(null)
    const [scope, animate] = useAnimate()

    const location = useLocation()
    useEffect(() => {
        const animateFilm = async () => {
            if (isHovered || linkActive == title) {
                if (!horizontal) {
                    await animate(".film2", {
                        transformOrigin: "50% 100%"
                    }, { duration: 0 })
                }
                if (!horizontal) {
                    animate(".film2", {
                        scaleY: 1,
                    }, { duration: .4 })
                }

                if (horizontal) {
                    await animate(".film2", {
                        transformOrigin: "0% 50%"
                    }, { duration: 0 })
                }
                if (horizontal) {
                    animate(".film2", {
                        scaleX: 1,
                    }, { duration: .4 })
                }
            }
            if ((isHovered == false && linkActive != title) || (isHovered == null && linkActive != title)) {
                if (!horizontal) {
                    await animate(".film2", {
                        transformOrigin: "50% 0%"
                    }, { duration: 0 })
                }
                if (!horizontal) {
                    animate(".film2", {
                        scaleY: 0,
                    }, { duration: .4 })
                }

                if (horizontal) {
                    await animate(".film2", {
                        transformOrigin: "100% 50%"
                    }, { duration: 0 })
                }
                if (horizontal) {
                    animate(".film2", {
                        scaleX: 0,
                    }, { duration: .4 })
                }
            }
        }
        animateFilm()
    }, [isHovered, linkActive])
    const navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault();
        if (url[0] != '/') {

            if (location.pathname == '/') {
                const targetElement = document.querySelector(url);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
            else {
                navigate(`/?${url}`)
            }
        } else {
            navigate(url)
        }
        if (setNavShow) {
            setNavShow(false);
        }
    };
    useEffect(() => {
        if (location.pathname == '/' && location.hash) {
            const targetElement = document.querySelector(location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location])

    return (
        <motion.li className='relative flex items-center py-[10px] cursor-pointer'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            ref={scope}
            onClick={handleClick}
        >
            {horizontal && <motion.span className='block film2 absolute w-[200px] left-[-62px] top-[24px] h-[4px] bg-[#00EEFF]'
                initial={{ scaleX: 0 }}
            ></motion.span>}
            {!horizontal && <motion.span className='block film2 absolute w-[3px] left-[8px] bottom-0 h-full bg-[#00EEFF]'
                initial={{ scaleY: 0 }}
            ></motion.span>}
            <a>
                {title}
            </a>
        </motion.li>
    )
}

export default NavList