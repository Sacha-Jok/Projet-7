import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import styles from "../../styles/pages/error-page.module.scss"

const ErrorPage = () => {
    return (
        <div className={styles.__errorPage}>
            <Navbar />
            <div className={styles.__errorSection}>
                <p className={styles.__number}>404</p>
                <p className={styles.__message}>Oups ! la page que vous demandez n'existe pas.</p>
                <p className={styles.__link}><Link to="/home">Retourner sur la page d'accueil</Link></p>
            </div>
        </div>
    );
};

export default ErrorPage;