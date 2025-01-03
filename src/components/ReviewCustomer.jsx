'use client';

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './reviewCustomer.module.css';

const reviews = [
    {
        image: 'https://res.cloudinary.com/dnlwb6g3p/image/upload/v1735668008/happy_propose_day_candle_z1c5pi.png',
        text: "I’ve never seen anything like these secret message candles before. The concept is so creative and meaningful. I gifted one to my best friend, and she couldn’t stop talking about it! It’s the perfect way to share a heartfelt message while also giving something beautiful and practical. Absolutely love it!",
        product: '"A Truly Unique Gift!"',
    },
    {
        image: 'https://res.cloudinary.com/dnlwb6g3p/image/upload/v1735668352/Chocolate_day_message_p9d5lc.png',
        text: "Receiving this candle was such an emotional experience. The hidden message inside was so beautifully written, and the candle itself added a warm glow to my home. It’s rare to find a gift that feels so personal and full of love. I’ll cherish this forever. Highly recommended for anyone looking to make someone smile!",
        product: '"Emotionally Uplifting and Beautiful"',
    },
    {
        image: 'https://res.cloudinary.com/dnlwb6g3p/image/upload/v1735668008/happy_propose_day_candle_z1c5pi.png',
        text: "From start to finish, the process of ordering this candle was seamless. The ability to craft a secret message made it feel so personal, and the recipient was absolutely delighted. The thoughtfulness behind this product is unmatched. It’s more than just a candle – it’s a memory in the making.",
        product: '"An Exceptional Gifting Experience"',
    },
];

const ReviewCustomer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [slideWidth, setSlideWidth] = useState(0);
    const slidesWrapperRef = useRef(null);

    // Update slidesToShow based on window width
    useEffect(() => {
        const updateSlidesToShow = () => {
            const width = window.innerWidth;
            if (width <= 480) {
                setSlidesToShow(1);
                setSlideWidth(0.3);
            } else if (width <= 768) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
                setSlideWidth(1.5)
            }
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);

        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    const slideToNext = () => {
        const nextIndex = (currentIndex + 1) % reviews.length;
        gsap.to(slidesWrapperRef.current, {
            x: `-${nextIndex * (100 / slidesToShow)}%`,
            duration: 0.8,
            ease: 'power3.out',
        });
        setCurrentIndex(nextIndex);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>More Customer Reviews</h2>
            <div className={styles.slider}>
                <div
                    className={styles.slidesWrapper}
                    ref={slidesWrapperRef}
                    style={{
                        width: `${(reviews.length * 100) / slidesToShow * slideWidth}%`,
                        display: 'flex',
                    }}
                >
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className={styles.slide}
                            style={{ flex: `0 0 calc(100% / ${slidesToShow})` }}
                        >
                            <div className={styles.reviewCard}>
                                <img
                                    src={review.image}
                                    alt={review.product}
                                    className={styles.image}
                                />
                                <p className={styles.text}>"{review.text}"</p>
                                <p className={styles.product}>{review.product}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={slideToNext} className={styles.next}>
                {'>'}
            </button>
        </div>
    );
};

export default ReviewCustomer;
