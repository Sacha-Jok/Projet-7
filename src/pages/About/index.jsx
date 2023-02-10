import React from 'react';


import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Dropdown from '../../components/Dropdown';
import Banner from '../../components/Banner';

import {aboutTxt} from '../../datas/constants';
import styles from "./styles.module.scss";
import bannerImg from '../../assets/images/aboutBanner.png';



const About = () => {
    return (
        <div>
            <Navbar />
            <Banner banner={bannerImg} />
            <div className={styles.__dropdownContainer}>
                <Dropdown title={aboutTxt.first.title} text={aboutTxt.first.text} />
                <Dropdown title={aboutTxt.second.title} text={aboutTxt.second.text} />
                <Dropdown title={aboutTxt.third.title} text={aboutTxt.third.text} />
                <Dropdown title={aboutTxt.fourth.title} text={aboutTxt.fourth.text} />
            </div>
            <Footer />
        </div>
    );
};

export default About;