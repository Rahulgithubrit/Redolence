'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import Logo from './Logo';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const menuRef = useRef(null);

    // Fetch and update cart count dynamically
    useEffect(() => {
        const updateCartCount = () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            setCartCount(cart.length);
        };

        // Initial load
        updateCartCount();

        // Add event listener for custom 'cartUpdated' event
        window.addEventListener('cartUpdated', updateCartCount);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('cartUpdated', updateCartCount);
    }, []);

    // Animation for opening and closing the menu
    useEffect(() => {
        if (isMenuOpen) {
            gsap.to(menuRef.current, { duration: 0.5, x: 0, opacity: 1, ease: 'power3.out' });
        } else {
            gsap.to(menuRef.current, { duration: 0.5, x: '-100%', opacity: 0, ease: 'power3.in' });
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <Link to="/" className={styles.navLogo}>
                    <Logo />
                </Link>
            </div>

            {/* Hamburger Menu Icon */}
            <div className={styles.navbarHamburger} onClick={toggleMenu}>
                <div className={`${styles.line} ${isMenuOpen ? styles.open : ''}`}></div>
                <div className={`${styles.line} ${isMenuOpen ? styles.open : ''}`}></div>
                <div className={`${styles.line} ${isMenuOpen ? styles.open : ''}`}></div>
            </div>

            {/* Mobile Menu */}
            <div className={styles.navbarMenu} ref={menuRef}>
                <ul>
                    <li><a href="/all-product">Products</a></li>
                    <li>
                        <Link to="/cart">
                            Cart <span className={styles.cartCount}>{cartCount}</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Desktop Links */}
            <div className={styles.navbarLinks}>
                <a href="/all-product">Products</a>
                <Link to="/cart">
                    Cart <span className={styles.cartCount}>{cartCount}</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
