import React from "react";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <h1 className={styles.logoText}>Redolence</h1>
    </div>
  );
};

export default Logo;
