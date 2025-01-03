import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Fetch items from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // Generate slug from the candle name
  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove special characters
      .replace(/\s+/g, '-'); // Replace spaces with hyphens
  };

  // Remove an item from the cart
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: '1px solid #ccc',
                marginBottom: '1rem',
                padding: '1rem',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => navigate(`/candle/${generateSlug(item.name)}`)} // Navigate using slug
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src={item.images[0]}
                  alt={item.name}
                  style={{ width: '80px', height: '80px', borderRadius: '5px' }}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent parent onClick from triggering
                  handleRemoveItem(item.id);
                }}
                style={{
                  backgroundColor: '#ff7043',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
};

export default CartPage;
