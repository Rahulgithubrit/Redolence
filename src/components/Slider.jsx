// Import React, GSAP and necessary hooks
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './slider.module.css';
import { useNavigate } from 'react-router-dom';

const ImageSliderWithOverlay = () => {
    const slides = [
        {
            image: "https://res.cloudinary.com/dnlwb6g3p/image/upload/v1735747664/banner_images_for_secret_message_candle_gjkavc.jpg",
            title: "Valentine Collection!",
            description: "Make this holiday season merry and memorable with our 'Christmas Collection', with an exclusive Spiced Apple scent!",
            note: "Available til January 1st.",
            buttonText: "Shop Now",
            href: '/all-product'
        },
        {
            image: "https://res.cloudinary.com/dnlwb6g3p/image/upload/v1735757656/secret_image_candle_banner_hu3md6.jpg",
            title: "Personalized Candles",
            description: "Create your own message candle and surprise your loved ones!",
            note: "Perfect for any occasion.",
            buttonText: "Customize Now",
            href: '/all-product'
        },
        {
            image: "https://res.cloudinary.com/dnlwb6g3p/image/upload/v1735757656/banner_for_candle_message_icz1vy.jpg",
            title: "Secret Message Candles",
            description: "Light up the candle to reveal a secret message!",
            note: "A gift full of surprises.",
            buttonText: "Explore More",
            href: '/all-product'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const sliderRef = useRef(null);

    useEffect(() => {
        if (!sliderRef.current) return;

        const interval = setInterval(() => {
            gsap.to(sliderRef.current, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
                    gsap.to(sliderRef.current, { opacity: 1, duration: 0.5 });
                },
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderItem} ref={sliderRef}>
                <img
                    src={slides[currentIndex].image}
                    alt={slides[currentIndex].title}
                    className={styles.sliderImage}
                />
                <div className={styles.overlay}>
                    <h1 className={styles.title}>{slides[currentIndex].title}</h1>
                    {/* <p className={styles.description}>{slides[currentIndex].description}</p>
                    <p className={styles.note}>{slides[currentIndex].note}</p> */}
                    <button className={styles.shopButton} onClick={() => navigate(`${slides[currentIndex].href}`)} >{slides[currentIndex].buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default ImageSliderWithOverlay;
