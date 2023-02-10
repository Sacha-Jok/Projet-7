import { Link } from 'react-router-dom';
import Rentals from '../../datas/logements.json'
import styles from "./styles.module.scss";

const Card = () => {
    return (
        Rentals.map(rentalInfo =>
            <Link className={styles.__card} key={rentalInfo.id} to={`../${rentalInfo.id}`} >
                    <div className={styles.__background}><img className={styles.__cover} src={rentalInfo.cover} alt={`Photo of  + ${rentalInfo.title}`} /></div>
                    <h2 className={styles.__title}>{rentalInfo.title}</h2>
            </Link>
        )
    );
};

export default Card;
