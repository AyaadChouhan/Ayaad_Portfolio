import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimate, useInView, stagger } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { SiWebmoney } from "react-icons/si";
import { FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";
import { SiTypescript, SiGraphql, SiDocker, SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Home = () => {
  const { setLinkActive } = useOutletContext();
  useEffect(() => {
    setLinkActive(null);
  }, []);

  // Japanese characters for name animation
  const letters = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

  // Refs and animations
  const headingRef = useRef(null);
  const techIconsRef = useRef(null);
  const floatingCodeRef = useRef(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-100px" });

  // Floating code elements
  const codeSnippets = [
    "const developer = new Developer();",
    "function createAwesomeWebsites() {}",
    "async function solveProblems() {}",
    "class FullStackDeveloper extends Developer {}"
  ];

  // Name animation effect
  useEffect(() => {
    const heading = headingRef.current;
    if (heading && isInView) {
      heading.dataset.value = "AYAAD CHOUHAN";
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
          heading.innerText = heading.dataset.value;
          animate(heading, 
            { textShadow: "0 0 15px #00EEFF, 0 0 30px #00EEFF" },
            { duration: 0.5 }
          ).then(() => {
            animate(heading, 
              { textShadow: "none" },
              { duration: 1, delay: 0.5 }
            );
          });
        }
        iteration += 1 / 3;
      }, 30);
    }
  }, [isInView]);

  // Tech stack animation
  useEffect(() => {
    if (isInView && techIconsRef.current) {
      animate(
        techIconsRef.current.children,
        { opacity: [0, 1], y: [20, 0] },
        { delay: stagger(0.1), duration: 0.5 }
      );
    }
  }, [isInView]);

  // Floating code animation
  useEffect(() => {
    if (isInView && floatingCodeRef.current) {
      const codeElements = floatingCodeRef.current.children;
      animate(
        codeElements,
        { 
          opacity: [0, 1, 0],
          y: [0, -20],
        },
        { 
          delay: stagger(0.8),
          duration: 4,
          repeat: Infinity,
          repeatDelay: 1
        }
      );
    }
  }, [isInView]);

  // Rotating hero text
  const heroTextArr = ["Backend", "Frontend", "FullStack"];
  const [heroText, setHeroText] = useState(null);

  // Background effects
  const ParticleBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#00EEFF]"
          style={{
            width: `${Math.random() * 5 + 1}px`,
            height: `${Math.random() * 5 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 200 - 100],
            x: [0, Math.random() * 200 - 100],
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );

  const GridBackground = () => (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      {Array.from({ length: 25 }).map((_, i) => (
        <React.Fragment key={i}>
          <div className="absolute top-0 bottom-0 border-l border-[#00EEFF]/20" 
            style={{ left: `${(i / 25) * 100}%` }} />
          <div className="absolute left-0 right-0 border-t border-[#00EEFF]/20" 
            style={{ top: `${(i / 25) * 100}%` }} />
        </React.Fragment>
      ))}
    </div>
  );

  // Hero text animation
  useEffect(() => {
    if (!isInView) return;

    const animateFilm = async () => {
      await animate(".film1", { transformOrigin: "left" });
      await animate(".film1", { scaleX: 1 }, { duration: 0.6, ease: "easeIn" });
      await animate(".film1", { transformOrigin: "right" });
      await animate(".film1", { scaleX: 0 }, { duration: 0.6, ease: "easeIn" });
    };

    const animateHero = async () => {
      await animate(".film2", { transformOrigin: "left" });
      await animate(".film2", { scaleX: 1 }, { duration: 0.6, ease: "easeIn" });
      await animate(".film2", { transformOrigin: "right" });
      await animate(".film2", { scaleX: 0 }, { duration: 0.6, ease: "easeIn" });
    };

    const animateHeroText = async () => {
      await animate(".heroText", { opacity: 0 }, { duration: 0 });
      await animate(".heroText", { opacity: 1 }, { duration: 0.3, delay: 0.9 });
    };

    const cycleText = () => {
      animateHeroText();
      animateHero();
      setHeroText(prev => {
        const i = prev ? prev.index + 1 : 0;
        return { text: heroTextArr[i % 3], index: i };
      });
    };

    animateFilm();
    animateHero();
    cycleText();
    const interval = setInterval(cycleText, 3500);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[#0a0a0a] overflow-hidden"
      ref={scope}
    >
      {/* Background Elements */}
      <ParticleBackground />
      <GridBackground />

      {/* Floating Code Snippets */}
      <div 
        ref={floatingCodeRef}
        className="absolute left-4 sm:left-8 top-1/4 flex flex-col gap-4 opacity-0"
      >
        {codeSnippets.map((code, i) => (
          <motion.div
            key={i}
            className="px-3 py-2 bg-black/50 border border-[#00EEFF]/30 rounded-md text-[#00EEFF] font-mono text-sm"
          >
            {code}
          </motion.div>
        ))}
      </div>

      {/* Floating Tech Icons */}
      <div 
        ref={techIconsRef}
        className="absolute bottom-4 md:bottom-10 left-0 right-0 flex justify-center gap-4 md:gap-8 opacity-0"
      >
        {[
          { icon: <FaReact size={24} />, color: "text-blue-400", tooltip: "React" },
          { icon: <FaNodeJs size={24} />, color: "text-green-500", tooltip: "Node.js" },
          { icon: <SiTypescript size={24} />, color: "text-blue-600", tooltip: "TypeScript" },
          { icon: <TbBrandNextjs size={24} />, color: "text-white", tooltip: "Next.js" },
          { icon: <SiGraphql size={24} />, color: "text-pink-500", tooltip: "GraphQL" },
          { icon: <FaDatabase size={24} />, color: "text-yellow-400", tooltip: "Databases" },
          { icon: <SiDocker size={24} />, color: "text-blue-300", tooltip: "Docker" },
          { icon: <SiJavascript size={24} />, color: "text-yellow-300", tooltip: "JavaScript" }
        ].map((tech, i) => (
          <motion.div
            key={i}
            className={`${tech.color} hover:text-[#00EEFF] transition-colors relative group`}
            whileHover={{ scale: 1.3, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            {tech.icon}
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {tech.tooltip}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-4 md:gap-6 z-10">
        {/* Name Animation */}
        <h3
          ref={headingRef}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl w-fit backdrop-blur-sm font-mono tracking-wider text-[#9FA5A5]"
        />

        {/* Hero Text */}
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative w-fit">
              <motion.div
                className="absolute inset-0 bg-[#00EEFF] film2 z-10"
                initial={{ scaleX: 0, transformOrigin: "left" }}
              />
              {heroText && (
                <motion.h2
                  className="heroText text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white"
                  whileHover={{ 
                    textShadow: "0 0 15px #00EEFF",
                    scale: 1.02 
                  }}
                >
                  {heroText.text}
                </motion.h2>
              )}
            </div>
            <motion.div
              className="flex-1 h-0.5 bg-[#1f6161]"
              animate={{
                scaleX: [1, 1.2, 1],
                backgroundColor: ["#1f6161", "#00EEFF", "#1f6161"],
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
          </div>

          {/* Developer Text */}
          <div className="relative flex w-fit items-center">
            <motion.div
              className="absolute inset-0 bg-[#00EEFF] film1 z-10"
              initial={{ scaleX: 0, transformOrigin: "left" }}
            />
            <motion.div
              className="flex items-center gap-1 sm:gap-2 md:gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.9 } }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-[#1f6161] cursor-pointer"
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                whileHover={{ color: "#00EEFF" }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  color: ["#1f6161", "#00EEFF", "#1f6161"],
                  y: [0, 5, 0],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <SiWebmoney className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
              </motion.div>
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white"
                whileHover={{ 
                  textShadow: "0 0 15px #00EEFF",
                  scale: 1.02 
                }}
              >
                Developer
              </motion.h2>
            </motion.div>
          </div>
        </div>

        {/* Short Bio */}
        <motion.div
          className="mt-6 max-w-xl text-[#CFCFCF] text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <p>Building digital experiences with clean code and modern technologies.</p>
        </motion.div>

        {/* Floating Window Image */}
        <motion.div 
          className="absolute right-4 sm:right-8 top-20 w-32 sm:w-48 md:w-64 lg:w-80 z-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="relative bg-[#534d4d90] rounded-lg overflow-hidden shadow-2xl border border-[#00EEFF]/20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            <div className="absolute top-2 left-2 flex gap-1">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <img 
            //   src="/window.jpg" 
              src="https://www.d4cpd.com/images/pages/services/software3.jpg"
              alt="Code window" 
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {/* <motion.a
            href="/contact"
            className="px-6 py-3 bg-[#00EEFF] text-black font-bold rounded-lg flex items-center gap-2"
            whileHover={{
              boxShadow: "0 0 20px #00EEFF",
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get In Touch</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a> */}
          <motion.a
            href="#projects"
            className="px-6 py-3 border border-[#00EEFF] text-[#00EEFF] font-bold rounded-lg flex items-center gap-2"
            whileHover={{
              backgroundColor: "#00EEFF",
              color: "#0a0a0a",
              boxShadow: "0 0 20px #00EEFF",
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Work</span>
            <FaCode />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;