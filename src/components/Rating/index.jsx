import React from 'react';
import styles from "./styles.module.scss";

const Rating = ({rating}) => {
    const stars = "★" ;

    return (
        <div className={styles.__stars}>
            <span className={styles.__red}>{stars.repeat(rating)}</span>
            <span className={styles.__white}>{stars.repeat(5-rating)}</span>     
        </div>
    );
};

export default Rating;