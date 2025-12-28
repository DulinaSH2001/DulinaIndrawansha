'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { scrollY } = useScroll();
    const navBackground = useTransform(
        scrollY,
        [0, 100],
        ['rgba(5, 5, 5, 0)', 'rgba(10, 10, 10, 0.8)']
    );
    const navBlur = useTransform(scrollY, [0, 100], [0, 20]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
                style={{
                    backgroundColor: navBackground,
                    backdropFilter: `blur(${navBlur}px)`,
                }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
                <div className={styles.container}>
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className={styles.logo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className={styles.logoIcon}>D</span>
                        <span className={styles.logoText}>ulina</span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <ul className={styles.navLinks}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <motion.a
                                    href={link.href}
                                    className={`${styles.navLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.label}
                                    {activeSection === link.href.slice(1) && (
                                        <motion.div
                                            className={styles.activeIndicator}
                                            layoutId="activeIndicator"
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </motion.a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.a
                        href="#contact"
                        className={styles.ctaButton}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Let&apos;s Talk
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className={styles.menuLine}
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className={styles.menuLine}
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className={styles.menuLine}
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ul>
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={activeSection === link.href.slice(1) ? styles.active : ''}
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
