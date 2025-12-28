'use client';

import styles from './FilmOverlay.module.css';

export default function FilmOverlay() {
    return (
        <div className={styles.filmOverlay}>
            {/* CRT Scanlines */}
            <div className={styles.scanlines} />

            {/* Film Grain */}
            <div className={styles.grain} />

            {/* Vertical Scratches */}
            <div className={styles.scratches} />

            {/* Vignette */}
            <div className={styles.vignette} />

            {/* Flicker effect */}
            <div className={styles.flicker} />
        </div>
    );
}
