// Import React
import React from 'react';
import styles from './bundle.module.css';
import { useNavigate } from 'react-router-dom';

const BundleDeal = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.bundleDealContainer}>
            <div className={styles.imageContainer}>
                <img
                    src="https://res.cloudinary.com/dnlwb6g3p/image/upload/v1735659134/candle_message_secret_e9wnlb.png"
                    alt="Candle Bundle Deal"
                    className={styles.bundleImage}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Make Every Moment Magical</h1>
                <p className={styles.description}>
                    Whether it’s a birthday, anniversary, or simply a “just because” gift, our candles bring warmth and meaning to every occasion. Each flame reveals the magic of your love and the beauty of whispered secrets.
                </p>
                {/* <p className={styles.note}>
                    This discount will be automatically applied at checkout.
                </p> */}
                <button className={styles.shopNowButton} onClick={() => navigate(`/all-product`)} >Shop Now</button>
            </div>
        </div>
    );
};

export default BundleDeal;
