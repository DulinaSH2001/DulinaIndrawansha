'use client';

import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    const [isHovered, setIsHovered] = useState(false);
    const [isIlluminated, setIsIlluminated] = useState(false);

    const handleNameHover = useCallback(() => {
        if (isHovered) return;

        setIsHovered(true);

        // Photo illuminates after a short delay
        setTimeout(() => {
            setIsIlluminated(true);
        }, 300);

    }, [isHovered]);

    const handleNameLeave = useCallback(() => {
        setIsHovered(false);
        setIsIlluminated(false);
    }, []);

    return (
        <section className={styles.hero}>
            {/* Film grain overlay */}
            <div className={styles.filmGrain} />

            <div className={styles.content}>
                {/* Left side - Name and info */}
                <div className={styles.textContent}>
                    <motion.div
                        className={styles.nameContainer}
                        onMouseEnter={handleNameHover}
                        onMouseLeave={handleNameLeave}
                    >
                        {/* DULINA - outline text */}
                        <motion.h1
                            className={styles.firstName}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            DULINA
                        </motion.h1>

                        {/* INDRAWANSHA - normal solid text */}
                        <motion.h1
                            className={styles.lastName}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            INDRAWANSHA
                        </motion.h1>
                    </motion.div>

                    <motion.p
                        className={styles.role}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        Full Stack Developer
                    </motion.p>

                    <motion.div
                        className={styles.cta}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <motion.a
                            href="#projects"
                            className={styles.btn}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View Work
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className={styles.btnOutline}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Contact
                        </motion.a>
                    </motion.div>
                </div>

                {/* Right side - Photo (dark, illuminates on hover) */}
                <motion.div
                    className={styles.photoContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    <div className={`${styles.photoWrapper} ${isIlluminated ? styles.illuminated : ''}`}>
                        <div className={styles.photoMask}>
                            <Image
                                src="/dulina.jpg"
                                alt="Dulina Indrawansha"
                                fill
                                className={styles.photo}
                                priority
                            />
                        </div>

                        {/* Vintage Vignette - dark corners */}
                        <div className={styles.vignette} />

                        {/* Dark overlay that fades on illuminate */}
                        <div className={styles.darkOverlay} />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <motion.div
                    className={styles.scrollLine}
                    animate={{ scaleY: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <span>SCROLL</span>
            </motion.div>
        </section>
    );
}
