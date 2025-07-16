/* eslint-disable no-unused-vars */
import React from "react";
import { IoMdSend } from "react-icons/io";
import FadeInDiv from "../FadeInDiv";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
const Contact = () => {
  const { setLinkActive } = useOutletContext();
  useEffect(() => {
    setLinkActive("Contact");
  }, []);
  return (
    <div className="min-h-screen px-6 pt-32 sm:pt-24 pb-14">
      <div className="max-w-[520px] mx-auto flex flex-col gap-12">
        <FadeInDiv
          element={
            <h3 className="text-white text-3xl sm:text-4xl font-semibold">
              Say hello
            </h3>
          }
        />
        <div className="flex w-full flex-col justify-center self-end pb-[4px]">
          <motion.span
            className="w-full h-[3px] bg-[#00EEFF]"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{
              scaleX: 1,
              transition: { duration: 0.75, delay: 0.6, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
          ></motion.span>
          <motion.span
            className="w-[84px] h-[10px] bg-[#00EEFF] ml-[1px] clipPath"
            initial={{ scaleX: 0, transformOrigin: "left", opacity: 0 }}
            whileInView={{
              scaleX: 1,
              opacity: 1,
              transition: { duration: 0.75, delay: 0.35, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
          ></motion.span>
        </div>
        <FadeInDiv
          classes={"flex flex-col gap-10 py-6"}
          element={
            <>
              <input
                placeholder="Your email"
                type="email"
                className="pb-5 text-white outline-none sm:text-xl bg-transparent border-b border-[#414141]"
              />
              <textarea
                placeholder="Message"
                className="bg-transparent text-white outline-none sm:text-xl h-fit border-b border-[#414141] resize-none"
              />
            </>
          }
        />
        <FadeInDiv
          delay={0.45}
          element={
            <button className="px-4 py-2 sm:px-5 sm:py-3 button relative hover:scale-105 transition-all flex gap-1 items-center bg-[#00EEFF] self-start">
              <IoMdSend color="black" size={25} />
              <span className="text-lg sm:text-xl font-semibold font-sans tracking-wide">
                Send Message
              </span>
            </button>
          }
        />
      </div>
    </div>
  );
};

export default Contact;
