import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import { FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaPalette } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiNestjs, SiMongodb, SiMysql, SiPostgresql, SiTailwindcss, SiBootstrap, SiFirebase } from 'react-icons/si';
import FadeInDiv from '../FadeInDiv';

const Skills = () => {
    const { setLinkActive, linkActive } = useOutletContext();

    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '-180px 0px -180px 0px' });


    useEffect(() => {
        if (isInView) {
            setLinkActive('Skills');
        } else {
            setLinkActive((curr) => {
                if (curr === 'Skills') {
                    return null;
                } else {
                    return curr;
                }
            });
        }
    }, [isInView, linkActive, setLinkActive]);

    const skills = [
        { name: 'JavaScript', icon: <FaJsSquare className="w-14 h-14 text-yellow-500" /> },
        { name: 'TypeScript', icon: <SiTypescript className="w-14 h-14 text-blue-600" /> },
        { name: 'React.js', icon: <FaReact className="w-14 h-14 text-blue-400" /> },
        { name: 'Node.js', icon: <FaNodeJs className="w-14 h-14 text-green-500" /> },
        { name: 'Express.js', icon: <SiExpress className="w-14 h-14 text-gray-300" /> },
        { name: 'Nest.js', icon: <SiNestjs className="w-14 h-14 text-red-500" /> },
        { name: 'MongoDB', icon: <SiMongodb className="w-14 h-14 text-green-400" /> },
        { name: 'MySQL', icon: <SiMysql className="w-14 h-14 text-blue-700" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="w-14 h-14 text-blue-500" /> },
        { name: 'Git', icon: <FaGitAlt className="w-14 h-14 text-orange-500" /> },
        { name: 'Docker', icon: <FaDocker className="w-14 h-14 text-blue-400" /> },
        { name: 'Material-UI', icon: <FaPalette className="w-14 h-14 text-blue-600" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-14 h-14 text-teal-400" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="w-14 h-14 text-purple-600" /> },
        { name: 'Firebase', icon: <SiFirebase className="w-14 h-14 text-yellow-400" /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    return (
        <div ref={ref} id="skills" className="min-h-screen flex px-4 sm:px-8 pt-20 pb-32 justify-center relative">
            <motion.div
                className="w-full flex flex-col gap-8 px-4 sm:px-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <FadeInDiv
                    element={<h4 className="text-3xl sm:text-4xl font-semibold text-white">My Skills</h4>}
                />

                <FadeInDiv
                    element={
                        <p className="text-lg sm:text-xl text-[#CFCFCF]">
                            Here are some of the technologies I have worked with:
                        </p>
                    }
                    delay={0.2}
                />

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-9"

                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
                    }}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg border border-[#00EEFF] hover:scale-[1.05] transition-transform"
                        >
                            {skill.icon}
                            <span className="text-sm sm:text-base text-white font-medium">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Skills;
