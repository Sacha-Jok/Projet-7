import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Dropdown from '../../components/Dropdown';
import {aboutTxt} from '../../datas/constants';
import bannerImg from '../../assets/images/aboutBanner.png';
import styles from "../../styles/pages/about.module.scss"



const About = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.__banner}><img className={styles.__pic} src={bannerImg} alt="Paysage de montagnes enneigées" /></div>
            <Dropdown title={aboutTxt.first.title} text={aboutTxt.first.text} />
            <Dropdown title={aboutTxt.second.title} text={aboutTxt.second.text} />
            <Dropdown title={aboutTxt.third.title} text={aboutTxt.third.text} />
            <Dropdown title={aboutTxt.fourth.title} text={aboutTxt.fourth.text} />
            <Footer/>
        </div>
    );
};

export default About;