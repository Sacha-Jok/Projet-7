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
            <button className={styles.__leftButton} onClick={prevImage}><img src={leftArrow} alt="Left arrow"/></button>
            <img className={styles.__image} src={pictures[currentIndex]} alt="Rental pictures"/>
            <button className={styles.__rightButton} onClick={nextImage}><img src={rightArrow} alt="Right arrow"/></button>
        </div>
    );
};

export default Lightbox;