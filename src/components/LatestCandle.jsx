// Import React
import React from 'react';
import styles from './latestCandles.module.css';
import { useNavigate } from 'react-router-dom';

const BackgroundBanner = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>Illuminate Love and Memories</h1>
                <button className={styles.ctaButton} onClick={() => navigate('/all-product')} >See More</button>
            </div>
        </div>
    );
};

export default BackgroundBanner;
