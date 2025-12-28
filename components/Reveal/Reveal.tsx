'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
}

// Cinematic reveal animation variants
export const revealVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        filter: 'blur(10px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
        },
    },
};

// Stagger children animation
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

// Fade in from different directions
export const fadeInDirection = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay = 0) => {
    const directions = {
        up: { y: 50, x: 0 },
        down: { y: -50, x: 0 },
        left: { x: 50, y: 0 },
        right: { x: -50, y: 0 },
    };

    return {
        hidden: {
            opacity: 0,
            ...directions[direction],
            filter: 'blur(8px)',
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.7,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
            },
        },
    };
};

// Scale reveal for images/cards
export const scaleReveal = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        filter: 'blur(10px)',
    },
    visible: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// Text reveal line by line
export const textReveal = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: 'easeOut' as const,
        },
    }),
};

// Reveal component wrapper
export function Reveal({ children, delay = 0, direction = 'up', className }: RevealProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInDirection(direction, delay)}
            className={className}
        >
            {children}
        </motion.div>
    );
}
