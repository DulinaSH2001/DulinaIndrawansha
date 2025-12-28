'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Skills.module.css';

const skillCategories = [
    {
        title: 'FRONTEND',
        skills: ['React', 'Next.js', 'TypeScript', 'CSS/Sass', 'Framer Motion'],
    },
    {
        title: 'BACKEND',
        skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
    },
    {
        title: 'TOOLS',
        skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
    },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" className={styles.skills} ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.label}>02 — SKILLS</span>
                    <h2 className={styles.title}>Technologies I Work With</h2>
                </motion.div>

                {/* Skills Grid */}
                <div className={styles.grid}>
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            className={styles.category}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                        >
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                            <div className={styles.skillsList}>
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill}
                                        className={styles.skillItem}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{
                                            duration: 0.5,
                                            delay: categoryIndex * 0.2 + skillIndex * 0.1
                                        }}
                                        whileHover={{ x: 10 }}
                                    >
                                        <span className={styles.skillName}>{skill}</span>
                                        <span className={styles.skillLine} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Tech */}
                <motion.div
                    className={styles.additionalTech}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <span className={styles.additionalLabel}>Also Experienced With</span>
                    <div className={styles.techList}>
                        {['GraphQL', 'Redis', 'Prisma', 'Tailwind', 'Firebase', 'Vercel', 'Figma', 'Jest'].map((tech) => (
                            <motion.span
                                key={tech}
                                className={styles.techItem}
                                whileHover={{ color: '#ffffff' }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Decorative line */}
            <motion.div
                className={styles.decorLine}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
            />
        </section>
    );
}
