import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './home.module.css';
import candles from '../data/candle.json';
import Card from '../components/Card'; // Import the Card component
import BundleDeal from '../components/BundleDeal';
import ImageSliderWithOverlay from '../components/Slider';
import ThreeColumnFeatures from '../components/Threecolum';
import ReviewCustomer from '../components/ReviewCustomer';
import LatestCandles from '../components/LatestCandle';

const HomePage = () => {
    const navigate = useNavigate();

    const generateSlug = (name) => {
        return name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
    };


    const handleCardClick = (name) => {
        const slug = generateSlug(name);
        console.log(slug)
        navigate(`/candle/${slug}`);
    };

    return (
        <div className={styles.homePage}>
            <ImageSliderWithOverlay />
            <h2 className={styles.heading}>A Candle, A Secret, A Story Just for You</h2>
            <p className={styles.subheading} >Discover a world where every flicker holds a meaning. Our Secret Message Candles go beyond just light and fragrance – they’re heartfelt treasures, uniquely designed to spark emotions and create lasting memories.</p>
            <div className={styles.cardContainer}>
                {candles.slice(0, 6).map((candle) => (
                    <Card
                        key={candle.id}
                        id={candle.id}
                        name={candle.name}
                        description={candle.description}
                        price={candle.price}
                        images={candle.images}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
            <div className={styles.showMore} >
                <Link to={'/all-product'} className={styles.showmorebutton} >Show more product</Link>
            </div>
            <BundleDeal />
            <ThreeColumnFeatures />
            <ReviewCustomer />
            <LatestCandles />
        </div>
    );
};

export default HomePage;
