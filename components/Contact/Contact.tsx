'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Github, Linkedin, Twitter } from 'lucide-react';
import styles from './Contact.module.css';

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

const socialLinks = [
    { icon: Github, href: 'https://github.com/DulinaSH2001', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dulina-hejitha-indrawansha-73046026a', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create Gmail compose URL with form data
        const recipientEmail = 'dulina.dev@gmail.com';
        const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
        const body = encodeURIComponent(
            `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
        );

        // Open Gmail compose in new tab
        const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${recipientEmail}&su=${subject}&body=${body}`;
        window.open(gmailUrl, '_blank');

        // Reset form
        setTimeout(() => {
            setIsSubmitting(false);
            setFormState({ name: '', email: '', message: '' });
        }, 500);
    };

    return (
        <section id="contact" className={styles.contact} ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={revealUp}
                >
                    <span className={styles.label}>04 — CONTACT</span>
                    <h2 className={styles.title}>Let&apos;s Work Together</h2>
                    <p className={styles.subtitle}>
                        Have a project in mind? I&apos;m always open to discussing new opportunities.
                    </p>
                </motion.div>

                <div className={styles.content}>
                    {/* Contact Form */}
                    <motion.form
                        className={styles.form}
                        initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
                        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.formLabel}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className={styles.formInput}
                                    placeholder="Your name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.formLabel}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={styles.formInput}
                                    placeholder="your@email.com"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.formLabel}>Message</label>
                            <textarea
                                id="message"
                                className={styles.formTextarea}
                                placeholder="Tell me about your project..."
                                rows={6}
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                required
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isSubmitting ? (
                                <span className={styles.spinner} />
                            ) : (
                                <>
                                    Send Message
                                    <Send size={16} />
                                </>
                            )}
                        </motion.button>
                    </motion.form>

                    {/* Contact Info */}
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
                        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Email</span>
                            <a href="mailto:dulina.dev@gmail.com" className={styles.infoValue}>
                                dulina.dev@gmail.com
                            </a>
                        </div>

                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Location</span>
                            <span className={styles.infoValue}>Sri Lanka</span>
                        </div>

                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Social</span>
                            <div className={styles.socialLinks}>
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialLink}
                                        whileHover={{ y: -3 }}
                                        aria-label={social.label}
                                    >
                                        <social.icon size={18} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <motion.footer
                className={styles.footer}
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Dulina Indrawansha
                </p>
                <p className={styles.footerNote}>
                    Designed & Built with passion
                </p>
            </motion.footer>
        </section>
    );
}
