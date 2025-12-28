'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Skills.module.css';

// Cinematic reveal variants
const revealUp = {
    hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const skillCategories = [
    {
        title: 'BACKEND',
        skills: ['Node.js', 'Express.js', 'Laravel', 'Spring Boot', 'CodeIgniter', 'ASP.NET'],
    },
    {
        title: 'FRONTEND',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Bootstrap'],
    },
    {
        title: 'DATABASE',
        skills: ['MongoDB', 'MySQL', 'Redis', 'Supabase', 'SQLite'],
    },
    {
        title: 'DEVOPS & TOOLS',
        skills: ['Docker', 'Kubernetes', 'Git', 'Postman', 'Figma'],
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
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={revealUp}
                >
                    <span className={styles.label}>02 — SKILLS</span>
                    <h2 className={styles.title}>Technologies I Work With</h2>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={staggerContainer}
                >
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            className={styles.category}
                            variants={{
                                hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    filter: 'blur(0px)',
                                    transition: { duration: 0.6 }
                                }
                            }}
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
                                            delay: 0.3 + categoryIndex * 0.15 + skillIndex * 0.08
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
                </motion.div>

                {/* Additional Tech */}
                <motion.div
                    className={styles.additionalTech}
                    initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
                    animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <span className={styles.additionalLabel}>Also Experienced With</span>
                    <div className={styles.techList}>
                        {['GraphQL', 'Kafka', 'OpenAI API', 'Google Maps API', 'Chrome Extensions', 'AJAX', 'REST APIs', 'Microservices'].map((tech) => (
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
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
        </section>
    );
}
