import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 20,
        },
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const slideInFromLeft: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
        },
    },
};

export const slideInFromRight: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
        },
    },
};

export const letterAnimation: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            damping: 12,
            stiffness: 200,
        },
    },
};

export const glowPulse: Variants = {
    initial: { opacity: 0.5 },
    animate: {
        opacity: [0.5, 1, 0.5],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};
