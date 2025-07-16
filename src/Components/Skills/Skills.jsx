import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPalette,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import FadeInDiv from "../FadeInDiv";

const Skills = () => {
  const { setLinkActive, linkActive } = useOutletContext();
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-180px 0px -180px 0px" });

  useEffect(() => {
    if (isInView) {
      setLinkActive("Skills");
    } else {
      setLinkActive((curr) => {
        if (curr === "Skills") {
          return null;
        } else {
          return curr;
        }
      });
    }
  }, [isInView, linkActive, setLinkActive]);

  const skills = [
    {
      name: "JavaScript",
      icon: <FaJsSquare className="w-14 h-14" />,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-14 h-14" />,
      color: "text-blue-600",
      bg: "bg-blue-600/10",
    },
    { 
      name: "React.js", 
      icon: <FaReact className="w-14 h-14" />,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="w-14 h-14" />,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="w-14 h-14" />,
      color: "text-gray-300",
      bg: "bg-gray-300/10",
    },
    { 
      name: "Nest.js", 
      icon: <SiNestjs className="w-14 h-14" />,
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-14 h-14" />,
      color: "text-green-400",
      bg: "bg-green-400/10",
    },
    { 
      name: "MySQL", 
      icon: <SiMysql className="w-14 h-14" />,
      color: "text-blue-700",
      bg: "bg-blue-700/10",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="w-14 h-14" />,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    { 
      name: "Git", 
      icon: <FaGitAlt className="w-14 h-14" />,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    { 
      name: "Docker", 
      icon: <FaDocker className="w-14 h-14" />,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      name: "Material-UI",
      icon: <FaPalette className="w-14 h-14" />,
      color: "text-blue-600",
      bg: "bg-blue-600/10",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-14 h-14" />,
      color: "text-teal-400",
      bg: "bg-teal-400/10",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="w-14 h-14" />,
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
    },
  ];

  return (
    <div
      ref={ref}
      id="skills"
      className="min-h-screen flex px-4 sm:px-8 pt-20 pb-32 justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-px">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div 
              key={i}
              className="bg-[#00EEFF]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.05, 0] }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-4 sm:px-8">
        <FadeInDiv
          element={
            <div className="relative">
              <h4 className="text-3xl sm:text-5xl font-bold text-white">
                My <span className="text-[#00EEFF]">Skills</span>
              </h4>
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-[#00EEFF]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          }
        />

        <FadeInDiv
          element={
            <p className="text-lg sm:text-xl text-[#CFCFCF] max-w-3xl">
              Here are the technologies I've mastered to build exceptional digital experiences.
              Hover over each to see them glow!
            </p>
          }
          delay={0.2}
        />

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 20px ${skill.color.replace('text-', '')}`
              }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className={`flex flex-col items-center gap-3 p-6 rounded-xl border border-[#2a2a2a] transition-all duration-300 ${skill.bg} ${
                hoveredSkill === index ? `ring-2 ring-offset-2 ${skill.color.replace('text-', 'ring-')}` : ''
              }`}
            >
              <motion.div
                animate={{
                  scale: hoveredSkill === index ? [1, 1.1, 1] : 1,
                  rotate: skill.name === "React.js" && hoveredSkill === index ? 360 : 0
                }}
                transition={{ duration: 0.5 }}
                className={`${skill.color}`}
              >
                {skill.icon}
              </motion.div>
              <span className="text-sm sm:text-base text-white font-medium">
                {skill.name}
              </span>
              {hoveredSkill === index && (
                <motion.div
                  className="absolute inset-0 -z-10 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Floating tech description */}
        {hoveredSkill !== null && (
          <motion.div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] px-6 py-3 rounded-full border border-[#00EEFF] shadow-lg shadow-[#00EEFF]/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <p className="text-white text-sm sm:text-base">
              {skills[hoveredSkill].name} expert with production experience
            </p>
          </motion.div>
        )}
      </div>
    </div>  
  );
};

export default Skills;