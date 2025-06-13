/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import FadeInDiv from "../FadeInDiv";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const ProjectBox = ({ index, title, about, url, img, left }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-120px 0px -120px 0px" });

  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current && isInView) {
      videoRef.current.play();
    } else if (videoRef.current && !isInView) {
      videoRef.current.pause();
    }
  }, [isInView]);

  const [isTop, setIsTop] = useState(false);

  return (
    // <div ref={ref} className='mb-10 lg:mb-0 h-screen min-h-[750px] sm:min-h-[850px] md:min-h-[950px] lg:min-h-[650px] py-12 px-2 sm:px-6 lg:px-0 xl:px-10 flex justify-center items-center'>
    <div
      ref={ref}
      className="mb-10 lg:mb-0 min-h-screen py-12 px-2 sm:px-6 lg:px-0 xl:px-10 flex justify-center items-center"
    >
      <div
        className={`flex flex-col-reverse ${
          left ? "lg:flex-row-reverse" : "lg:flex-row"
        } h-full justify-center gap-10 sm:gap-8 xl:gap-14 items-center w-full`}
      >
        <div className="flex flex-col gap-6 w-[95%] sm:w-[85%] md:w-[75%] lg:w-[30%]">
          <div className="flex gap-3">
            <div className="flex flex-col justify-center self-end pb-[4px]">
              <motion.span
                className="w-[90px] h-[2px] bg-[#00EEFF]"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                whileInView={{
                  scaleX: 1,
                  transition: { duration: 0.75, delay: 0.6, ease: "easeInOut" },
                }}
                viewport={{ once: true }}
              ></motion.span>
              <motion.span
                className="w-[64px] h-[8px] bg-[#00EEFF] ml-[1px] clipPath"
                initial={{ scaleX: 0, transformOrigin: "left", opacity: 0 }}
                whileInView={{
                  scaleX: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.75,
                    delay: 0.35,
                    ease: "easeInOut",
                  },
                }}
                viewport={{ once: true }}
              ></motion.span>
            </div>
            <motion.span
              className="text-[#00EEFF] text-lg montserrat self-start block font-medium"
              initial={{ x: "-30px", opacity: 0 }}
              whileInView={{
                x: "0px",
                opacity: 1,
                transition: { duration: 0.75, delay: 0.35, ease: "linear" },
              }}
              viewport={{ once: true }}
            >
              0{index + 1}
            </motion.span>
          </div>
          <FadeInDiv
            element={
              <h4 className="text-2xl sm:text-4xl text-white font-semibold">
                {title}
              </h4>
            }
          />
          <FadeInDiv
            delay={0.25}
            element={<p className="sm:text-lg text-[#CFCFCF]">{about}</p>}
          />
          <FadeInDiv
            delay={0.45}
            element={
              <button className="px-4 py-2 sm:px-5 sm:py-3 button relative hover:scale-105 transition-all bg-[#00EEFF] self-start">
                <a href={url} className="flex gap-1 items-center">
                  <span className="text-lg sm:text-xl font-semibold font-sans tracking-wide">
                    View Project
                  </span>
                  <span className="pt-1">
                    <IoIosArrowRoundForward size={30} />
                  </span>
                </a>
              </button>
            }
          />
        </div>
        <FadeInDiv
          // classes={`w-full xl:w-[60%] lg:w-[65%] ${img.img.phone && 'min-h-[450px] md:min-h-[550px]'} flex items-center justify-end relative`}
          classes={`w-full xl:w-[60%] lg:w-[65%] flex items-center relative`}
          delay={0.5}
          element={
            <>
              {img.vid && !img.img.phone && (
                <video
                  ref={videoRef}
                  className="rounded-lg border-[5px] sm:border-[8px] border-gray-800"
                  muted
                  loop
                >
                  <source src={img.vid} type="video/webm" />
                </video>
              )}
              {img.vid && img.img.phone && (
                <>
                  <video
                    onClick={() => setIsTop(!isTop)}
                    ref={videoRef}
                    className="absolute right-0 cursor-pointer w-[90%] sm:w-[80%] z-10 rounded-lg border-[5px] sm:border-[8px] border-gray-800"
                    muted
                    loop
                  >
                    <source src={img.vid} type="video/webm" />
                  </video>
                  <img
                    onClick={() => setIsTop(!isTop)}
                    className={`cursor-pointer self-start ${
                      isTop ? "z-10" : "z-0"
                    } border-[6px] rounded-lg block w-[30%] min-w-[180px] sm:min-w-[200px] border-gray-700`}
                    src={img.img.phone[0]}
                    alt=""
                  />
                  {/* <video onClick={() => setIsTop(!isTop)} ref={videoRef} className="cursor-pointer w-[90%] sm:w-[80%] z-10 rounded-lg border-[5px] sm:border-[8px] border-gray-800" muted loop>
                                        <source src={img.vid} type="video/webm" />
                                    </video>
                                    <img onClick={() => setIsTop(!isTop)} className={`cursor-pointer absolute left-0 ${isTop ? 'z-10' : 'z-0'} border-[6px] rounded-lg block w-[30%] min-w-[180px] sm:min-w-[200px] border-gray-700`} src={img.img.phone[0]} alt="" /> */}
                </>
              )}
              {!img.vid && (
                <>
                  <div className="absolute right-0 block w-[90%] sm:w-[80%] ml-auto">
                    <Swiper
                      spaceBetween={0}
                      centeredSlides={true}
                      autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                      className="rounded-lg bg-gray-800"
                    >
                      {img.img.full.map((imgEl, index) => (
                        <SwiperSlide key={index}>
                          <img
                            onClick={() => setIsTop(false)}
                            src={imgEl}
                            alt=""
                            className="border-[5px] sm:border-[8px] border-gray-800 block cursor-pointer  z-10 "
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div
                    className={`${
                      isTop ? "z-10" : "z-0"
                    } block w-[30%] min-w-[180px] sm:min-w-[200px]`}
                  >
                    <Swiper
                      spaceBetween={0}
                      centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                      className=" border-[6px] rounded-lg  border-gray-700"
                    >
                      {img.img.phone?.map((imgEl, index) => (
                        <SwiperSlide key={index}>
                          <img
                            onClick={() => setIsTop(true)}
                            className={`cursor-pointer `}
                            src={imgEl}
                            alt=""
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </>
              )}
            </>
          }
        />
      </div>
    </div>
  );
};

export default ProjectBox;
