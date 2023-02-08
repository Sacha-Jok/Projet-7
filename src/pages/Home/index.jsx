import React from 'react';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';

import bannerImg from '../../assets/images/homeBanner.png';



const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner banner={bannerImg} text='Chez vous, partout et ailleurs' />
            <Footer />
        </div>
    );
};

export default Home;