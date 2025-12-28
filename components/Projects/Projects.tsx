'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.css';

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
        transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
};

const projects = [
    {
        title: 'RMS Online - AI Restaurant System',
        description: 'Full-featured restaurant management system with AI-based forecasting for booking trends and occupancy using GitHub-hosted models. Real-time AJAX updates.',
        tech: ['Laravel', 'MySQL', 'JavaScript', 'AJAX', 'AI/ML'],
        github: 'https://github.com/DulinaSH2001',
        live: '#',
    },
    {
        title: 'SalesOptimizer - AI Integration Gateway',
        description: 'Universal integration gateway similar to payment SDK. Customizable architecture with AI-driven forecasting dashboards for sales performance.',
        tech: ['Laravel', 'MySQL', 'JavaScript', 'REST API'],
        github: 'https://github.com/DulinaSH2001',
        live: '#',
    },
    {
        title: 'Hospital Management System',
        description: 'Complete healthcare solution with API + Web + Mobile. Flutter mobile app, Next.js admin dashboard, and RESTful APIs for seamless communication.',
        tech: ['Laravel', 'Next.js', 'Flutter', 'MySQL', 'REST API'],
        github: 'https://github.com/DulinaSH2001',
        live: '#',
    },
    {
        title: 'Food Delivery Microservices',
        description: 'Microservices-based food delivery platform with Spring Boot backend, real-time location tracking via Google Maps, and GPT-4.0 for SEO-friendly descriptions.',
        tech: ['Spring Boot', 'React', 'Kafka', 'OpenAI API'],
        github: 'https://github.com/DulinaSH2001',
        live: '#',
    },
    {
        title: 'Job Sheet Chrome Extension',
        description: 'Chrome extension for managing job sheet reminders and tracking daily tasks. Clean UI, fast performance, and reliable offline local storage.',
        tech: ['JavaScript', 'Chrome Extension API', 'HTML5', 'CSS3'],
        github: 'https://github.com/DulinaSH2001/job-sheet-extension-V1',
        live: '#',
    },
    {
        title: 'EV Charge Mobile App',
        description: 'Mobile application for EV charging station management and reservations built with modern Android technologies.',
        tech: ['Kotlin', 'Android', 'Mobile'],
        github: 'https://github.com/DulinaSH2001/EVChargeMobileApp',
        live: '#',
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="projects" className={styles.projects} ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={revealUp}
                >
                    <span className={styles.label}>03 — WORK</span>
                    <h2 className={styles.title}>Selected Projects</h2>
                </motion.div>

                {/* Projects List */}
                <motion.div
                    className={styles.projectsList}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={staggerContainer}
                >
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            className={styles.projectItem}
                            variants={{
                                hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    filter: 'blur(0px)',
                                    transition: { duration: 0.6 }
                                }
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Project Number */}
                            <span className={styles.projectNumber}>
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            {/* Project Content */}
                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>

                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.p
                                            className={styles.projectDescription}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {project.description}
                                        </motion.p>
                                    )}
                                </AnimatePresence>

                                {/* Tech Stack */}
                                <div className={styles.techStack}>
                                    {project.tech.map((tech) => (
                                        <span key={tech} className={styles.techTag}>{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Links */}
                            <div className={styles.projectLinks}>
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.projectLink}
                                    whileHover={{ scale: 1.1 }}
                                    aria-label="GitHub"
                                >
                                    <Github size={18} />
                                </motion.a>
                                {project.live !== '#' && (
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.projectLink}
                                        whileHover={{ scale: 1.1 }}
                                        aria-label="Live Project"
                                    >
                                        <ExternalLink size={18} />
                                    </motion.a>
                                )}
                            </div>

                            {/* Flash overlay on hover */}
                            <motion.div
                                className={styles.flashOverlay}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredIndex === index ? 0.03 : 0 }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.article>
                    ))}
                </motion.div>

                {/* View More */}
                <motion.div
                    className={styles.viewMore}
                    initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
                    animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <motion.a
                        href="https://github.com/DulinaSH2001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.viewMoreBtn}
                        whileHover={{ x: 10 }}
                    >
                        View More on GitHub
                        <ExternalLink size={16} />
                    </motion.a>
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
