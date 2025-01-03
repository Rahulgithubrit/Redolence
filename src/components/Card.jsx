import React, { useState, useEffect } from 'react';
import styles from './card.module.css';

const Card = ({ id, name, price, images = [], onClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.card} onClick={() => onClick(name)}>
      <img
        src={images[currentIndex]}
        alt={name}
        className={styles.image}
      />
      <div className={styles.overlay}>
        <h2 className={styles.cardTitle}>{name}</h2>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
};

export default Card; 
