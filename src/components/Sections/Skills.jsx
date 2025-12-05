import React from 'react';
import { motion } from 'framer-motion';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
    SiGit,
    SiExpress,
    SiNextdotjs,
    SiCplusplus,
    SiFirebase
} from 'react-icons/si';

const skillCategories = [
    {
        title: "FRONT-END",
        skills: [
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
            { name: 'React', icon: SiReact, color: '#61DAFB' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
            { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
            { name: 'CSS', icon: SiCss3, color: '#1572B6' },
        ]
    },
    {
        title: "BACK-END",
        skills: [
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            { name: 'Express', icon: SiExpress, color: '#ffffff' },
            { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        ]
    },
    {
        title: "DATABASE",
        skills: [
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        ]
    },
    {
        title: "TOOLS",
        skills: [
            { name: 'Git', icon: SiGit, color: '#F05032' },
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-dark-bg relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
                        <span className="text-neon-blue">Tech Stack</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-sm tracking-widest">MY DEVELOPMENT ARSENAL</p>
                </motion.div>

                <div className="space-y-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={category.title}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: categoryIndex * 0.1 }}
                                className="text-gray-400 font-mono text-sm mb-6 tracking-wider uppercase"
                            >
                                {category.title}
                            </motion.h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 + categoryIndex * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="relative group"
                                    >
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                                        <div className="relative bg-card-bg border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:bg-white/5 transition-colors">
                                            <div
                                                className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl bg-dark-bg shadow-inner"
                                                style={{ color: skill.color === '#000000' || skill.color === '#ffffff' ? '#ffffff' : skill.color }}
                                            >
                                                <skill.icon />
                                            </div>
                                            <span className="text-gray-200 font-mono font-medium group-hover:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
