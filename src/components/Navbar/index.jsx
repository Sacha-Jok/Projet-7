import { Link } from 'react-router-dom';
import redLogo from '../../assets/images/redLogo.png';

import styles from "./styles.module.scss";

const Navbar = () => (
    <nav className={styles.__navbar}>
      <img className={styles.__logo} src={redLogo} alt="red logo" />
      <div className={styles.__link}>
        <Link to="/home">Accueil</Link>
        <Link to="/about">A propos</Link>
      </div>
    </nav>
);

export default Navbar;