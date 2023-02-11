import React, { useState, useEffect } from 'react';

import styles from "./styles.module.scss";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    let imagesLoaded = 0;
  
    images.forEach(image => {
      image.addEventListener('load', () => {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
          setLoading(false);
        }
      });
    });
  }, []);

  return (
    loading && (
        <div className={styles.__loader}>
            <div className={styles.__logo}></div>
        </div>
    )
  );
};

export default Loader;