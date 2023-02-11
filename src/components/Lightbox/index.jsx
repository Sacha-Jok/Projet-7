import { useState } from 'react';

import leftArrow from '../../assets/images/leftArrow.svg';
import rightArrow from '../../assets/images/rightArrow.svg';
import styles from "./styles.module.scss";

const Lightbox = ({pictures}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % pictures.length);
    };

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length)
    }
     
    return (
        <div className={styles.__lightbox}>
            {pictures.length > 1 && <button className={`${styles.__leftButton} ${styles.__button}`} onClick={prevImage}><img src={leftArrow} alt="Left arrow"/></button>}
            <img className={styles.__image} src={pictures[currentIndex]} alt="Rental pictures"/>
            {pictures.length > 1 && <button className={`${styles.__rightButton} ${styles.__button}`} onClick={nextImage}><img src={rightArrow} alt="Right arrow"/></button>}
            {pictures.length > 1 &&<div className={styles.__number}> <span>{currentIndex + 1}/{pictures.length}</span></div>}
        </div>
    );
};

export default Lightbox;