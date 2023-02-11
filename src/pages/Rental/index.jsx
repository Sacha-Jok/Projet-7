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
    const equipmentList = appart.equipments.map((equipment) => <li className={styles.__element} key={equipment}>{equipment}</li>);
    if (!appart) {
        return(
            <ErrorPage />
        )
    }
    return (
        <div>
            <Navbar />
                <div className={styles.__page}>
                    <Lightbox pictures={appart.pictures}/>
                    <div className={styles.__appartHeader}>
                        <h1 className={styles.__title}>{appart.title}</h1>
                        <div className={styles.__host}>
                            <h3 className={styles.__name}>{appart.host.name}</h3>
                            <img className={styles.__pic} src={appart.host.picture} alt={appart.host.name} />
                        </div>
                    </div>
                    <h2 className={styles.__subtitle}>{appart.location}</h2>
                    <div className={styles.__stars}>
                        <Tag tags={appart.tags} />
                        <Rating rating={appart.rating}/>
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