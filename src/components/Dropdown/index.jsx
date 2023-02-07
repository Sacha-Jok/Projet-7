import { useState } from 'react';
import arrow from '../../assets/images/upArrow.svg';
import styles from "./styles.module.scss";

const Dropdown = ({title, text}) => (
    <details className={styles.__details} >
        <summary className={styles.__title}>{title}<img id='arrow' src={arrow} alt=" Flèche" /></summary>
        <p className={styles.__description}>{text}</p>
    </details>
);

export default Dropdown;