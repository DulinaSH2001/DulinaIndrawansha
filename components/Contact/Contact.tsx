'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import styles from './Contact.module.css';

const socialLinks = [
    { icon: Github, href: 'https://github.com/DulinaSH2001', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setFormState({ name: '', email: '', message: '' });
        alert('Message sent! Thank you for reaching out.');
    };

    return (
        <section id="contact" className={styles.contact} ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
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
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
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
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
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
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
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
