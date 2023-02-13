import React from 'react';
import { useParams } from 'react-router-dom';
import Rentals from '../../datas/logements.json'
import styles from "./styles.module.scss";

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Dropdown from '../../components/Dropdown';
import Tag from '../../components/Tag';
import ErrorPage from '../ErrorPage';
import Rating from '../../components/Rating';
import Lightbox from '../../components/Lightbox';

const Rental = () => {
    const {id} = useParams();
    const appart = Rentals.find(obj => obj.id === id);
  
    if (!appart) return <ErrorPage />

    const equipmentList = appart.equipments.map((equipment) => <li className={styles.__element} key={equipment}>{equipment}</li>);

    const nameArr = appart.host.name.split(" ")
    return (
        <div>
            <Navbar />
            <div className={styles.__page}>
                <Lightbox pictures={appart.pictures}/>
                <div className={styles.__textContainer}>
                    <div className={styles.__titleContainer}>
                        <h1 className={styles.__title}>{appart.title}</h1>
                        <h2 className={styles.__subtitle}>{appart.location}</h2>
                        <Tag tags={appart.tags} />
                    </div>
                    <div className={styles.__ratingContainer}>
                        <div className={styles.__host}>
                            <div className={styles.__name}>
                                <h3 className={styles.__name}>{nameArr[0]}</h3>
                                <h3 className={styles.__name}>{nameArr[1]}</h3>
                            </div>
                            <img className={styles.__pic} src={appart.host.picture} alt={appart.host.name} />
                        </div>
                        <Rating rating={appart.rating}/>
                    </div>
                </div>
                <div className={styles.__dropdownContainer}>
                    <Dropdown title='Description' text={appart.description} />
                    <Dropdown title='Équipements' text={equipmentList} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Rental;