import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Dropdown from '../../components/Dropdown';
import Banner from '../../components/Banner';

import {aboutTxt} from '../../datas/constants';
import bannerImg from '../../assets/images/aboutBanner.png';



const About = () => {
    return (
        <div>
            <Navbar />
            <Banner banner={bannerImg} />
            <Dropdown title={aboutTxt.first.title} text={aboutTxt.first.text} />
            <Dropdown title={aboutTxt.second.title} text={aboutTxt.second.text} />
            <Dropdown title={aboutTxt.third.title} text={aboutTxt.third.text} />
            <Dropdown title={aboutTxt.fourth.title} text={aboutTxt.fourth.text} />
            <Footer />
        </div>
    );
};

export default About;