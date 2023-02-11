import React from 'react';
import styles from "./styles.module.scss";

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Card from '../../components/Card';

import bannerImg from '../../assets/images/homeBanner.png';
import Loader from '../../components/Loader';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Loader />
            <Banner banner={bannerImg} text='Chez vous, partout et ailleurs' />
            <div className={styles.__cardContainer}><Card /></div>
            <Footer />
        </div>
    );
};

export default Home;