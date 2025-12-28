'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
    {
        title: 'EV Charge Mobile App',
        description: 'A mobile application for EV charging station management and reservations.',
        tech: ['Kotlin', 'Android', 'Mobile'],
        github: 'https://github.com/DulinaSH2001/EVChargeMobileApp',
        live: '#',
    },
    {
        title: 'Saradha Lanka ERP',
        description: 'Enterprise resource planning system for Saradha Lanka Agro Company to manage invoices and bills.',
        tech: ['Laravel', 'Blade', 'PHP', 'MySQL'],
        github: 'https://github.com/DulinaSH2001/Saradha_Lanka_Sub_Erp',
        live: '#',
    },
    {
        title: 'CRM Frontend',
        description: 'Customer relationship management frontend application built with modern technologies.',
        tech: ['TypeScript', 'React', 'Vercel'],
        github: 'https://github.com/DulinaSH2001/crm-frontend-V1',
        live: 'https://crm-frontend-v1-rust.vercel.app',
    },
    {
        title: 'Job Sheet Extension',
        description: 'Browser extension for managing and tracking job sheets efficiently.',
        tech: ['JavaScript', 'Chrome Extension'],
        github: 'https://github.com/DulinaSH2001/job-sheet-extension-V1',
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
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.label}>03 — WORK</span>
                    <h2 className={styles.title}>Selected Projects</h2>
                </motion.div>

                {/* Projects List */}
                <div className={styles.projectsList}>
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            className={styles.projectItem}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
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
                                    className={styles.projectLink}
                                    whileHover={{ scale: 1.1 }}
                                    aria-label="GitHub"
                                >
                                    <Github size={18} />
                                </motion.a>
                                <motion.a
                                    href={project.live}
                                    className={styles.projectLink}
                                    whileHover={{ scale: 1.1 }}
                                    aria-label="Live Project"
                                >
                                    <ExternalLink size={18} />
                                </motion.a>
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
                </div>

                {/* View More */}
                <motion.div
                    className={styles.viewMore}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
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
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
            />
        </section>
    );
}
