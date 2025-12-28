'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.css';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const stats = [
        { number: '5+', label: 'Years Experience' },
        { number: '50+', label: 'Projects Completed' },
        { number: '30+', label: 'Happy Clients' },
        { number: '10+', label: 'Technologies' },
    ];

    return (
        <section id="about" className={styles.about} ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.label}>01 — ABOUT</span>
                    <h2 className={styles.title}>
                        Passionate about building
                        <br />
                        <span className={styles.highlight}>exceptional</span> digital experiences
                    </h2>
                </motion.div>

                <div className={styles.content}>
                    {/* Text Content - Left */}
                    <motion.div
                        className={styles.textContent}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={styles.bioBlock}>
                            <p className={styles.bio}>
                                I&apos;m a passionate <strong>Full Stack Developer</strong> with a keen eye for detail
                                and a love for creating seamless user experiences. With expertise spanning both
                                frontend and backend technologies, I bring ideas to life through clean, efficient code.
                            </p>
                            <p className={styles.bio}>
                                My journey in tech has led me through diverse projects—from sleek web applications
                                to complex enterprise solutions. I believe in continuous learning and staying
                                ahead of the curve with the latest technologies.
                            </p>
                        </div>

                        {/* Skills Preview */}
                        <div className={styles.skillPreview}>
                            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python'].map((skill, i) => (
                                <motion.span
                                    key={skill}
                                    className={styles.skillTag}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats - Right */}
                    <motion.div
                        className={styles.statsGrid}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className={styles.statCard}
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
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
            />
        </section>
    );
}
