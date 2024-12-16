import React, { useEffect, useRef } from 'react'
import ProjectBox from './ProjectBox';
import ws_full1 from '/ws_full.png'
import ws_full2 from '/ws_full2.png'
import ws_full3 from '/ws_full3.png'
import ws_full4 from '/ws_full4.png'
import fb1 from '/fb1.png'
import fb2 from '/fb2.png'
import fb3 from '/fb3.png'
import fb4 from '/fb4.png'
import fbPhone1 from '/fbPhone1.png'
import dsVdFull from '/ds_full1.mp4'
import coinSeekPhone1 from '/coinSeek_phone1.png'
import coinSeekPhone2 from '/coinSeek_phone2.png'
import coinSeekPhone3 from '/coinSeek_phone3.png'
import coinSeekPhone4 from '/coinSeek_phone4.png'
import coinSeekPhone5 from '/coinSeek_phone5.png'
import coinSeek from '/coinSeek1.mp4'
import { useInView } from 'framer-motion';
import { useOutlet, useOutletContext } from 'react-router-dom';

const Projects = () => {

    const { setLinkActive, linkActive } = useOutletContext()

    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '-180px 0px -180px 0px' })
    useEffect(() => {
        if (isInView) {
            setLinkActive('Projects')
        } else {
            setLinkActive(curr => {
                if (curr == 'Projects') {
                    return null
                }
                else {
                    return curr
                }
            })
        }

    }, [isInView, linkActive])



    const projectData = [
        {
            title: "CoinSeek",
            about: "A user-friendly platform to track cryptocurrencies, and  NFTs, in real time. It provides live market data, price trends, and simple tools for portfolio management, making it easier to monitor and organize digital assets effortlessly.",
            url: 'https://github.com/asifkhan231/CoinSeek',
            img: { vid: coinSeek, img: { full: null, phone: [coinSeekPhone1, coinSeekPhone2, coinSeekPhone3, coinSeekPhone4, coinSeekPhone5] } },
            left: false
        },
        {
            title: 'WeStream',
            about: 'A real-time live streaming platform developed using React, NestJS, WebSocket, and WebRTC, designed to provide high-quality video streaming and interactive live chat. The platform supports seamless user engagement and real-time communication, offering a dynamic experience for both streamers and viewers.',
            url: 'https://github.com/shanwaz-78/We-Stream',
            img: { vid: null, img: { full: [ws_full1, ws_full2, ws_full3, ws_full4], phone: null } },
            left: true
        },
        {
            title: 'Form Builder',
            about: 'An interactive Full Stack MERN application designed to simplify form creation and management. With a user-friendly drag-and-drop interface, it lets you build dynamic forms effortlessly, track responses, and manage data seamlessly. Features like secure authentication, email notifications, and advanced form elements such as rich text editors and calendars make it a versatile tool for any use case.',
            url: 'https://github.com/asifkhan231/form-builder',
            img: { vid: null, img: { full: [fb1, fb2, fb3, fb4], phone: [fbPhone1] } },
            left: false
        },
        {
            title: 'Decore System',
            about: 'A MERN stack-based interior design management platform that streamlines project planning, decor organization, and team collaboration for efficient project execution.',
            url: 'https://github.com/SalehMajeed/System-Decor',
            img: { vid: dsVdFull, img: { full: null, phone: null } },
            left: true
        },
    ]
    const projectEls = projectData.map((proj, index) => {
        let { title, about, url, img, left } = proj
        return <ProjectBox index={index} title={title} about={about} url={url} img={img} left={left} />
    })

    return (
        <div id='projects' ref={ref}>
            {...projectEls}
        </div>
    )
}

export default Projects
