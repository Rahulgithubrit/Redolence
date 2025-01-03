import React from 'react';
import styles from './candlebar.module.css';

const ContactBar = () => {
  return (
    <div className={styles.contactBar}>
      <p>
        <a href="mailto:redolencefragrancereviews@gmail.com" className={styles.link}>
          redolencefragrancereviews@gmail.com
        </a>{' '}
        |{' '}
        <a href="tel:+919717244643" className={styles.link}>
          +91 97172 44643
        </a>
      </p>
    </div>
  );
};

export default ContactBar;
