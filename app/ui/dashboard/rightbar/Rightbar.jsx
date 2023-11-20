import React from 'react';
import Image from 'next/image';
import styles from './rightbar.module.css';
import { MdPlayCircleFilled } from 'react-icons/md';

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/astronaut.png"
            alt='astronaut'
            className={styles.bgImage}
            fill
          />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subTitle}>Takes 4 minutes to learn</span>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius modi quos culpa nulla quam ullam dolorum quas doloremque ipsa.</p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subTitle}>Takes 4 minutes to learn</span>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius modi quos culpa nulla quam ullam dolorum quas doloremque ipsa.</p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>
    </div>
  )
};

export default Rightbar;