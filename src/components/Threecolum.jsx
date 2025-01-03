// Import React
import React from 'react';
import styles from './threecolum.module.css';

const ThreeColumnFeatures = () => {
    return (
        <div className={styles.container}>
            <div className={styles.feature}>
                <h2 className={styles.title}>Hand-Poured Elegance</h2>
                <p className={styles.description}>
                    Crafted with care using premium soy wax for a cleaner, longer burn.
                </p>
            </div>
            <div className={styles.feature}>
                <h2 className={styles.title}>Uniquely Sentimental</h2>
                <p className={styles.description}>
                    Represent your feelings through a gift that touches the heart.
                </p>
            </div>
            <div className={styles.feature}>
                <h2 className={styles.title}>Eco-Friendly Delight</h2>
                <p className={styles.description}>
                    Made with natural materials and designed for a sustainable, loving future.
                </p>
            </div>
        </div>
    );
};

export default ThreeColumnFeatures;
