import React from 'react';
import whiteLogo from '../../assets/images/blackLogo.png';

import styles from "./styles.module.scss";

const Footer = () => (
    <footer className={styles.__footer}>
        <img className={styles.__logoKasa} src={whiteLogo} alt="white logo"></img>
        <p>© 2023 Kasa. All rights reserved</p>
    </footer>
);

export default Footer;