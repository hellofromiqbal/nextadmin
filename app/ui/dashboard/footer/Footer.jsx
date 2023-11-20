import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logl}>Lama Dev</div>
      <div className={styles.text}>&reg;All rights reserved.</div>
    </div>
  )
};

export default Footer;