import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>BRAND</h4>
          <ul>
            <li><a href="#about-us">About Us</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>QUICK LINKS</h4>
          <ul>
            <li><a href="#sign-in">Sign In</a></li>
            <li><a href="#collections">Collections</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>SUPPORT</h4>
          <ul>
            <li><a href="#contact-us">Contact Us</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>LEGAL</h4>
          <ul>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div> */}
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>FOLLOW US</h4>
          <ul>
            <li>+91 97172 44643</li>
            <li><a href="mailto:redolencefragrancereviews@gmail.com">redolencefragrancereviews@gmail.com</a></li>
            <li className={styles.socialIcons}>
              <a href="#facebook">🌐</a>
              <a href="#instagram">📸</a>
              <a href="#youtube">🎥</a>
              <a href="#twitter">🐦</a>
              <a href="#pinterest">📌</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 CandleShop · Privacy Policy · Terms of Service · Contact Information</p>
      </div>
    </footer>
  );
};

export default Footer;
