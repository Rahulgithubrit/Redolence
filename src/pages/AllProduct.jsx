import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css'; // Updated for clarity and separation
import candles from '../data/candle.json';
import Card from '../components/Card';

const AllProduct = () => {
    const navigate = useNavigate();

    // Generate slug from candle name
    const generateSlug = (name) => {
        return name
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, '') // Remove special characters
            .replace(/\s+/g, '-'); // Replace spaces with hyphens
    };

    const handleCardClick = (name) => {
        const slug = generateSlug(name);
        navigate(`/candle/${slug}`); // Navigate using slug
    };

    return (
        <div className={styles.allProduct}>
            <h1 className={styles.heading}>All Products</h1>
            <div className={styles.cardContainer}>
                {candles.map((candle) => (
                    <Card
                        key={candle.id}
                        id={candle.id}
                        name={candle.name}
                        description={candle.description}
                        price={candle.price}
                        images={candle.images}
                        onClick={() => handleCardClick(candle.name)} // Pass name for slug generation
                    />
                ))}
            </div>
        </div>
    );
};

export default AllProduct;
