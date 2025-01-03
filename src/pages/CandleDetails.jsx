import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './candleDetails.module.css';
import candles from '../data/candle.json';

const CandleDetails = () => {
  const { name: slug } = useParams(); // Use slug from URL params
  const navigate = useNavigate();
  const [candle, setCandle] = useState(null); // Initialize candle as null
  const [selectedImage, setSelectedImage] = useState(''); // Initialize selected image

  // Function to find a candle by its slug
  const findCandleBySlug = (slug) => {
    return candles.find((candle) =>
      candle.name
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '') // Remove special characters
        .replace(/\s+/g, '-') === slug // Replace spaces with hyphens
    );
  };

  // UseEffect to find the candle after slug is resolved
  useEffect(() => {
    if (slug) {
      const foundCandle = findCandleBySlug(slug);
      setCandle(foundCandle);
      setSelectedImage(foundCandle?.images[0] || '');
    }
  }, [slug]);

  if (!candle) return <p>Candle not found!</p>;

  // Add item to cart and trigger cart update
  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    alert(`${item.name} has been added to your cart.`);
  };

  // Redirect to WhatsApp with candle name
  const handleBuyNow = () => {
    const phoneNumber = '+919717244643'; // Replace with your WhatsApp phone number
    const message = `Hello, I would like to buy the candle: ${candle.name}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank'); // Open WhatsApp link in a new tab
  };

  return (
    <div className={styles.detailsPage}>
      <div className={styles.detailsContainer}>
        {/* Image Section */}
        <div className={styles.imageSection}>
          <div className={styles.thumbnailContainer}>
            {candle.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={candle.name}
                className={`${styles.thumbnail} ${selectedImage === img ? styles.activeThumbnail : ''
                  }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <img src={selectedImage} alt={candle.name} className={styles.mainImage} />
        </div>

        {/* Details Section */}
        <div className={styles.detailsSection}>
          <h1 className={styles.title}>{candle.name}</h1>
          <p className={styles.description}>{candle.description}</p>
          <p className={styles.price}>{candle.price}</p>
          <div className={styles.buttonContainer}>
            <button className={styles.enquireButton} onClick={handleBuyNow}>
              Buy Now
            </button>
            <button
              className={styles.enquireButton}
              onClick={() => addToCart(candle)}
            >
              Add to Cart
            </button>
            <button className={styles.backButton} onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandleDetails;
