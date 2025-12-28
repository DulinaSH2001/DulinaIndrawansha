'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.css';

// Cinematic reveal variants
const revealUp = {
    hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.8, ease: 'easeOut' as const }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const stats = [
        { number: '2+', label: 'Years Experience' },
        { number: '10+', label: 'Projects Delivered' },
        { number: '5+', label: 'Enterprise Systems' },
        { number: '15+', label: 'Technologies' },
    ];

    return (
        <section id="about" className={styles.about} ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={revealUp}
                >
                    <span className={styles.label}>01 — ABOUT</span>
                    <h2 className={styles.title}>
                        Aspiring Backend Developer
                        <br />
                        <span className={styles.highlight}>Passionate about</span> scalable systems
                    </h2>
                </motion.div>

                <div className={styles.content}>
                    {/* Text Content - Left */}
                    <motion.div
                        className={styles.textContent}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={{
                            hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
                            visible: {
                                opacity: 1,
                                y: 0,
                                filter: 'blur(0px)',
                                transition: { duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
                            }
                        }}
                    >
                        <div className={styles.bioBlock}>
                            <p className={styles.bio}>
                                I&apos;m an <strong>Information Technology undergraduate</strong> at SLIIT,
                                specializing in Software Engineering. Currently working as a Full Stack Developer
                                at Saradha Lanka Agro, where I build enterprise-grade <strong>ERP and CRM systems</strong>.
                            </p>
                            <p className={styles.bio}>
                                My passion lies in <strong>Backend Development</strong> with Node.js, Express.js,
                                and Laravel. I&apos;ve worked on microservices architectures, RESTful APIs, and
                                integrated AI-powered features into production systems. Eager to learn more about
                                database optimization, system scalability, and delivering impactful solutions.
                            </p>
                        </div>

                        {/* Skills Preview */}
                        <motion.div
                            className={styles.skillPreview}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={staggerContainer}
                        >
                            {['Node.js', 'Express.js', 'Laravel', 'MongoDB', 'MySQL'].map((skill, i) => (
                                <motion.span
                                    key={skill}
                                    className={styles.skillTag}
                                    variants={{
                                        hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            filter: 'blur(0px)',
                                            transition: { duration: 0.5 }
                                        }
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Stats - Right */}
                    <motion.div
                        className={styles.statsGrid}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={staggerContainer}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className={styles.statCard}
                                variants={{
                                    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        filter: 'blur(0px)',
                                        transition: { duration: 0.6 }
                                    }
                                }}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <span className={styles.statNumber}>{stat.number}</span>
                                <span className={styles.statLabel}>{stat.label}</span>

                                {/* Shine effect on hover */}
                                <div className={styles.statShine} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
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
